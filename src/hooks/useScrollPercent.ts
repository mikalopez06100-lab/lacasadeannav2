"use client";

import { useEffect } from "react";
import { getLenis } from "@/lib/lenis-instance";

export function useScrollPercent(readyFlag: boolean) {
  useEffect(() => {
    if (!readyFlag) return;
    const hpct = document.getElementById("hpct");
    if (!hpct) return;

    const update = () => {
      const lenis = getLenis();
      const scroll = lenis ? lenis.scroll : window.scrollY;
      const limit = lenis
        ? lenis.limit
        : document.documentElement.scrollHeight - window.innerHeight;
      const p = limit > 0 ? Math.round((scroll / limit) * 100) : 0;
      hpct.textContent = `${p}%`;
    };

    const lenis = getLenis();
    if (lenis) {
      lenis.on("scroll", update);
    } else {
      window.addEventListener("scroll", update, { passive: true });
    }
    update();

    return () => {
      if (lenis) lenis.off("scroll", update);
      else window.removeEventListener("scroll", update);
    };
  }, [readyFlag]);
}

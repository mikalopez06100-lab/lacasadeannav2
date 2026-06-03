"use client";

import { useEffect } from "react";
import { getLenis } from "@/lib/lenis-instance";

/** Révélation gauche/droite du manifeste — CSS + IO (fiable avec Lenis). */
export function useManifReveal(ready: boolean) {
  useEffect(() => {
    if (!ready) return;

    const section = document.querySelector(".manif");
    if (!section) return;

    const chunks = Array.from(
      section.querySelectorAll<HTMLElement>(".manif-chunk")
    );
    if (chunks.length === 0) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      chunks.forEach((c) => c.classList.add("is-in"));
      return;
    }

    let played = false;
    const play = () => {
      if (played) return;
      const rect = section.getBoundingClientRect();
      if (rect.top > window.innerHeight * 0.9 || rect.bottom < 40) return;
      played = true;
      chunks.forEach((chunk, i) => {
        window.setTimeout(() => chunk.classList.add("is-in"), i * 130);
      });
    };

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          play();
          io.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -5% 0px" }
    );
    io.observe(section);

    const onScroll = () => play();
    const lenis = getLenis();
    lenis?.on("scroll", onScroll);
    requestAnimationFrame(play);
    window.setTimeout(play, 500);

    const fallback = window.setTimeout(() => {
      if (!played) {
        played = true;
        chunks.forEach((c) => c.classList.add("is-in"));
      }
    }, 5000);

    return () => {
      window.clearTimeout(fallback);
      io.disconnect();
      lenis?.off("scroll", onScroll);
    };
  }, [ready]);
}

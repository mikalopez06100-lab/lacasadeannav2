"use client";

import { useEffect, useState, type ReactNode } from "react";
import { MenuOverlay } from "@/components/MenuOverlay";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { useScrollPercent } from "@/hooks/useSiteAnimations";
import { usePageLenis } from "@/hooks/usePageLenis";
import { getLenis } from "@/lib/lenis-instance";

type Props = {
  children: ReactNode;
};

/** Enveloppe commune (header, menu, footer, Lenis) pour pages intérieures. */
export function SiteShell({ children }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  usePageLenis();
  useScrollPercent(true);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    const lenis = getLenis();
    if (lenis) {
      if (menuOpen) lenis.stop();
      else lenis.start();
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <div className="cur" id="cur" />
      <SiteHeader menuOpen={menuOpen} onOpenMenu={() => setMenuOpen(true)} />
      <MenuOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />
      {children}
      <SiteFooter />
    </>
  );
}

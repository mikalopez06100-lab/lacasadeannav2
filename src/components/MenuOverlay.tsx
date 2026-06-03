"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { scrollToAnchor } from "@/hooks/useSiteAnimations";
import { site } from "@/lib/site";

type Props = {
  open: boolean;
  onClose: () => void;
};

const NAV = [
  { hash: "#studio", num: "01", label: "Le studio" },
  { hash: "#valeurs", num: "02", label: "Notre approche" },
  { hash: "#realisations", num: "03", label: "Réalisations" },
  { hash: "#presse", num: "04", label: "Presse" },
  { hash: "#faq", num: "05", label: "Questions" },
  { hash: "#contact", num: "06", label: "Contact" },
] as const;

export function MenuOverlay({ open, onClose }: Props) {
  const pathname = usePathname();
  const onHome = pathname === "/";

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <aside
      className="over"
      data-open={open ? "true" : "false"}
      id="over"
      aria-hidden={!open}
      role="dialog"
      aria-modal="true"
      aria-label="Menu de navigation"
    >
      <div className="o-top">
        <span>La Casa de Anna · Index</span>
        <button className="ox" type="button" aria-label="Fermer le menu" onClick={onClose}>
          ×
        </button>
      </div>
      <nav>
        {NAV.map((item) => {
          const href = `/${item.hash}`;
          if (onHome) {
            return (
              <a
                key={item.hash}
                href={item.hash}
                onClick={(e) => {
                  e.preventDefault();
                  onClose();
                  window.setTimeout(() => scrollToAnchor(item.hash), 80);
                }}
              >
                <span className="num">{item.num}</span>
                {item.label}
              </a>
            );
          }
          return (
            <Link key={item.hash} href={href} onClick={onClose}>
              <span className="num">{item.num}</span>
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="o-foot">
        <span>Veyrier-du-Lac · Haute-Savoie</span>
        <a href={`mailto:${site.email}`}>{site.email}</a>
        <a href={site.sameAs[0]} target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
      </div>
    </aside>,
    document.body
  );
}

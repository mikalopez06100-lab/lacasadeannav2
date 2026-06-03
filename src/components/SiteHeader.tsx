"use client";

import Link from "next/link";
import { SiteImage } from "@/components/SiteImage";

type Props = {
  menuOpen: boolean;
  onOpenMenu: () => void;
};

export function SiteHeader({ menuOpen, onOpenMenu }: Props) {
  return (
    <header>
      <div className="h-grid">
        <Link href="/" className="h-brand">
          <SiteImage
            src="/assets/img/logo.png"
            alt=""
            width={156}
            height={87}
            priority
            className="logo-mark"
            style={{ height: 24, width: "auto" }}
          />
          <span>
            La Casa de Anna <span className="reg">®</span>
          </span>
        </Link>
        <div className="h-center">
          <span className="h-dot" />
          <span className="h-pct" id="hpct">
            0%
          </span>
          <span className="h-dot" />
        </div>
        <div
          className="h-menu"
          role="button"
          tabIndex={0}
          aria-label="Ouvrir le menu"
          aria-expanded={menuOpen}
          onClick={onOpenMenu}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              onOpenMenu();
            }
          }}
        >
          <span className="mlabel">Menu</span>
          <button className="mbtn" type="button" tabIndex={-1} aria-hidden>
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}

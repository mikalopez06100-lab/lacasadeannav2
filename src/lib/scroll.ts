import { getLenis } from "@/lib/lenis-instance";

export function scrollToAnchor(hash: string, onDone?: () => void) {
  const id = hash.replace("#", "");
  const el = document.getElementById(id);
  if (!el) return;

  const lenis = getLenis();
  if (lenis) {
    lenis.scrollTo(el, { offset: -80, onComplete: onDone });
  } else {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    onDone?.();
  }
}

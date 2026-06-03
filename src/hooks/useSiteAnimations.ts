"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { getLenis, setLenis } from "@/lib/lenis-instance";

gsap.registerPlugin(ScrollTrigger);

const lenisEasing = (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t));

export function useSiteAnimations(ready: boolean) {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      document.body.classList.add("loaded", "hero-ready");
      return;
    }

    document.body.classList.add("motion-on");

    const lenis = new Lenis({
      duration: 1.2,
      easing: lenisEasing,
      smoothWheel: true,
    });
    setLenis(lenis);

    lenis.on("scroll", ScrollTrigger.update);
    ScrollTrigger.defaults({ scroller: document.documentElement });

    ScrollTrigger.scrollerProxy(document.documentElement, {
      scrollTop(value) {
        if (arguments.length && value !== undefined) {
          lenis.scrollTo(value, { immediate: true });
        }
        return lenis.scroll;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: "transform",
    });
    ScrollTrigger.addEventListener("refresh", () => lenis.resize());
    ScrollTrigger.refresh();

    const raf = (time: number) => {
      lenis.raf(time);
      ScrollTrigger.update();
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      setLenis(null);
      document.body.classList.remove("motion-on");
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  useEffect(() => {
    if (!ready) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    document.body.classList.add("hero-ready", "loaded");

    if (reduced) return;

    const ctx = gsap.context(() => {
      gsap.set(".hero-mark .l span", { yPercent: 105 });
      gsap.to(".hero-mark .l span", {
        yPercent: 0,
        duration: 1.35,
        ease: "power3.out",
        stagger: 0.13,
        delay: 0.1,
        clearProps: "transform",
        onComplete: () => {
          document.body.classList.add("loaded");
        },
      });

      const manifSection = document.querySelector(".manif");
      const manifChunks = gsap.utils.toArray<HTMLElement>(".manif-chunk-inner");
      /** Fenêtres de progression scroll (0–1) par segment — tous finis avant 100 %. */
      const manifSlices = [
        { start: 0, end: 0.22 },
        { start: 0.16, end: 0.36 },
        { start: 0.3, end: 0.5 },
        { start: 0.44, end: 0.62 },
        { start: 0.56, end: 0.76 },
        { start: 0.68, end: 0.9 },
      ];
      if (manifSection && manifChunks.length > 0) {
        const manifFromX = (el: HTMLElement) =>
          el.closest(".manif-chunk")?.getAttribute("data-from") === "right" ? 48 : -48;

        const updateManif = (progress: number) => {
          manifChunks.forEach((el, i) => {
            const slice = manifSlices[i] ?? manifSlices[manifSlices.length - 1];
            const fromX = manifFromX(el);
            const local = gsap.utils.clamp(
              0,
              1,
              gsap.utils.mapRange(slice.start, slice.end, 0, 1, progress)
            );
            gsap.set(el, {
              x: `${gsap.utils.interpolate(fromX, 0, local)}vw`,
              opacity: local,
              force3D: true,
            });
          });
        };

        manifChunks.forEach((el) => {
          gsap.set(el, { x: `${manifFromX(el)}vw`, opacity: 0, force3D: true });
        });

        ScrollTrigger.create({
          trigger: manifSection,
          start: "top 92%",
          end: "top 8%",
          scrub: 1.25,
          invalidateOnRefresh: true,
          onUpdate: (self) => updateManif(self.progress),
          onRefresh: (self) => updateManif(self.progress),
        });
      }

      const studioMain = document.querySelector(".studio-pic .main");
      const studioImg = studioMain?.querySelector("img");
      if (studioMain && studioImg) {
        gsap.fromTo(
          studioImg,
          { scale: 0.86, transformOrigin: "50% 50%", force3D: true },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: studioMain,
              start: "top 90%",
              end: "top 38%",
              scrub: 0.75,
            },
          }
        );
      }

      gsap.utils.toArray<HTMLElement>(".vrow").forEach((row, i) => {
        gsap.fromTo(
          row,
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power2.out",
            delay: i * 0.15,
            scrollTrigger: {
              trigger: row,
              start: "top 90%",
              once: true,
            },
          }
        );
      });

      const footAnna = document.querySelector(".foot-mark .it");
      if (footAnna) {
        gsap.from(footAnna, {
          y: 40,
          duration: 1.2,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: ".foot-mark",
            start: "top 85%",
            once: true,
          },
        });
      }

      const section = document.querySelector("#realisations");
      const track = document.querySelector("#htrack") as HTMLElement | null;
      const pfill = document.getElementById("pfill");
      const hmeta = document.getElementById("hmeta");
      const cards = track?.children.length ?? 0;

      if (section && track && pfill && hmeta) {
        const mm = gsap.matchMedia();
        mm.add("(min-width: 981px)", () => {
          const getScroll = () => Math.max(0, track.scrollWidth - window.innerWidth);
          gsap.to(track, {
            x: () => -getScroll(),
            ease: "none",
            scrollTrigger: {
              trigger: section,
              pin: true,
              scrub: 1,
              end: () => `+=${getScroll()}`,
              invalidateOnRefresh: true,
              anticipatePin: 1,
              onUpdate: (self) => {
                pfill.style.width = `${Math.max(8, self.progress * 100)}%`;
                const idx = Math.min(
                  cards,
                  Math.floor(self.progress * (cards - 1)) + 1
                );
                hmeta.textContent = `${String(idx).padStart(2, "0")} / ${String(cards).padStart(2, "0")}`;
              },
            },
          });
        });
      }

      ScrollTrigger.refresh();
      window.setTimeout(() => ScrollTrigger.refresh(), 400);
    });

    return () => ctx.revert();
  }, [ready]);
}

export function useCustomCursor() {
  useEffect(() => {
    if (!window.matchMedia("(hover:hover)").matches) return;

    const cur = document.getElementById("cur");
    if (!cur) return;

    let cx = 0;
    let cy = 0;
    let tx = 0;
    let ty = 0;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };
    document.addEventListener("mousemove", onMove);

    const loop = () => {
      cx += (tx - cx) * 0.22;
      cy += (ty - cy) * 0.22;
      cur.style.left = `${cx}px`;
      cur.style.top = `${cy}px`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const setLabel = (label: string, extra = "lg") => {
      cur.classList.add(extra);
      cur.setAttribute("data-label", label);
    };
    const clear = () => {
      cur.classList.remove("lg", "img-hover");
      cur.removeAttribute("data-label");
    };

    document.querySelectorAll("a:not(#mopen):not(.ox)").forEach((el) => {
      el.addEventListener("mouseenter", () => setLabel("→"));
      el.addEventListener("mouseleave", clear);
    });
    document.querySelectorAll(".h-menu,.faq-item,button:not(.mbtn):not(.ox)").forEach((el) => {
      el.addEventListener("mouseenter", () => {
        cur.classList.add("lg");
        cur.removeAttribute("data-label");
      });
      el.addEventListener("mouseleave", clear);
    });
    document.querySelectorAll(".h-card").forEach((el) => {
      el.addEventListener("mouseenter", () => setLabel("Drag →"));
      el.addEventListener("mouseleave", clear);
    });
    document.querySelectorAll(".hi img").forEach((el) => {
      el.addEventListener("mouseenter", () => {
        cur.classList.add("img-hover");
        cur.removeAttribute("data-label");
      });
      el.addEventListener("mouseleave", clear);
    });

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);
}

export function useLoader(onDone: () => void) {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      document.body.classList.add("hero-ready", "loaded");
      onDone();
      return;
    }

    const loader = document.getElementById("loader");
    const lfill = document.getElementById("lfill") as HTMLElement | null;
    const lpct = document.getElementById("lpct");
    if (!loader || !lfill || !lpct) {
      document.body.classList.add("hero-ready", "loaded");
      onDone();
      return;
    }

    const t = window.setTimeout(() => {
      lfill.style.width = "100%";
      let v = 0;
      const i = window.setInterval(() => {
        v += 4;
        if (v >= 100) {
          v = 100;
          window.clearInterval(i);
          lpct.textContent = "100%";
          window.setTimeout(() => {
            loader.classList.add("gone");
            document.body.classList.add("hero-ready");
            onDone();
          }, 500);
        } else {
          lpct.textContent = `${v}%`;
        }
      }, 65);
    }, 200);

    return () => window.clearTimeout(t);
  }, [onDone]);
}

export function useFaq() {
  useEffect(() => {
    document.querySelectorAll(".faq-item").forEach((it) => {
      it.addEventListener("click", () => it.classList.toggle("open"));
    });
  }, []);
}

export function useProjectsDrag() {
  useEffect(() => {
    if (window.matchMedia("(min-width: 981px)").matches) return;

    const track = document.getElementById("htrack");
    const rail = track?.parentElement;
    const pfill = document.getElementById("pfill");
    const hmeta = document.getElementById("hmeta");
    if (!track || !rail || !pfill || !hmeta) return;

    const cards = track.children.length;
    let isDown = false;
    let startX = 0;
    let sl = 0;

    const upd = () => {
      const max = track.scrollWidth - rail.clientWidth;
      const p = max > 0 ? rail.scrollLeft / max : 0;
      (pfill as HTMLElement).style.width = `${Math.max(8, p * 100)}%`;
      const idx = Math.min(cards, Math.floor(p * (cards - 1)) + 1);
      hmeta.textContent = `${String(idx).padStart(2, "0")} / ${String(cards).padStart(2, "0")}`;
    };

    const onDown = (e: PointerEvent) => {
      isDown = true;
      startX = e.pageX;
      sl = rail.scrollLeft;
      track.style.cursor = "grabbing";
    };
    const onUp = () => {
      isDown = false;
      track.style.cursor = "grab";
    };
    const onMove = (e: PointerEvent) => {
      if (!isDown) return;
      e.preventDefault();
      rail.scrollLeft = sl - (e.pageX - startX) * 1.4;
      upd();
    };

    rail.style.overflowX = "auto";
    (rail as HTMLElement).style.scrollbarWidth = "none";

    track.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);
    track.addEventListener("pointermove", onMove);
    rail.addEventListener("scroll", upd);
    upd();

    return () => {
      track.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      track.removeEventListener("pointermove", onMove);
      rail.removeEventListener("scroll", upd);
    };
  }, []);
}


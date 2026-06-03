"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { MenuOverlay } from "@/components/MenuOverlay";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteImage } from "@/components/SiteImage";
import { faqItems, projects } from "@/lib/data";
import { site } from "@/lib/site";
import {
  useCustomCursor,
  useFaq,
  useLoader,
  useProjectsDrag,
  useScrollPercent,
  useSiteAnimations,
  useStudioReveal,
  scrollToAnchor,
} from "@/hooks/useSiteAnimations";
import { getLenis } from "@/lib/lenis-instance";

const bandItems = [
  "Conception & plans 3D",
  "Mobilier sur mesure",
  "Rideaux confectionnés",
  "Suivi de chantier",
  "Aménagement clé-en-main",
  "Particuliers & professionnels",
];

function ManifLine({
  children,
  innerClassName = "",
}: {
  children: React.ReactNode;
  innerClassName?: string;
}) {
  return (
    <span className="manif-line">
      <span className={`manif-line-inner fr ${innerClassName}`.trim()}>{children}</span>
    </span>
  );
}

export function LandingPage() {
  const [ready, setReady] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const onLoaderDone = useCallback(() => setReady(true), []);

  useLoader(onLoaderDone);
  useSiteAnimations(ready);
  useScrollPercent(ready);
  useCustomCursor();
  useFaq();

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

  const closeMenu = () => setMenuOpen(false);
  const openMenu = () => setMenuOpen(true);

  useProjectsDrag();
  useStudioReveal();

  useEffect(() => {
    if (!ready) return;
    const hash = window.location.hash;
    if (hash) {
      window.setTimeout(() => scrollToAnchor(hash), 400);
    }
  }, [ready]);

  const band = [...bandItems, ...bandItems];

  return (
    <>
      <div className="loader" id="loader">
        <div className="loader-grid">
          <div className="lleft">
            La Casa de Anna
            <br />
            2026 ©
          </div>
          <div className="loader-mark fr">
            <span>La Casa</span>
            <span className="it">de Anna</span>
            <span>
              Studio<sup style={{ fontSize: ".4em" }}>®</sup>
            </span>
          </div>
          <div className="lright">
            Lac d&apos;Annecy
            <br />
            FR · 74
          </div>
        </div>
        <div className="loader-bar">
          <div className="fill" id="lfill" />
        </div>
        <div className="loader-pct" id="lpct">
          0%
        </div>
      </div>

      <div className="cur" id="cur" />

      <SiteHeader menuOpen={menuOpen} onOpenMenu={openMenu} />
      <MenuOverlay open={menuOpen} onClose={closeMenu} />

      <section className="hero" id="main">
        <h1 className="hero-mark fr">
          <span className="l l1">
            <span>La Casa</span>
          </span>
          <span className="l l2">
            <span>de Anna</span>
          </span>
          <span className="l l3">
            <span>
              Studio<sup className="reg">®</sup>
            </span>
          </span>
        </h1>

        <div className="scroll-tag">[scroll] / découvrir</div>

        <div className="hero-foot">
          <div className="meta">
            N°—01
            <br />
            Studio de design d&apos;intérieur
          </div>
          <p className="lede">
            Décoration et architecture d&apos;intérieur clé-en-main au bord du lac
            d&apos;Annecy. Du premier croquis au dernier coussin — particuliers et
            professionnels, Annecy et Haute-Savoie.
          </p>
          <div className="acts">
            <div className="meta-r">
              Veyrier-du-Lac · 45°50&apos;N
              <br />
              Est. 2021
            </div>
          </div>
        </div>
      </section>

      <div className="band" aria-hidden="true">
        <div className="band-track">
          {band.map((label, i) => (
            <span key={`${label}-${i}`}>
              {label}
              <span className="ast" />
            </span>
          ))}
        </div>
      </div>

      <section className="manif">
        <div className="manif-in">
          <div className="sec-no">N°—02 / Le parti pris</div>
          <h2>
            <ManifLine>Décorer</ManifLine>
            <ManifLine innerClassName="it tab">n&apos;est pas</ManifLine>
            <br />
            <ManifLine>embellir.</ManifLine>
            <ManifLine innerClassName="it tab">C&apos;est</ManifLine>
            <br />
            <ManifLine>composer</ManifLine>
            <ManifLine innerClassName="it tab">une vie.</ManifLine>
          </h2>
          <div className="manif-foot">
            <p className="lead">
              Une décoratrice s&apos;arrête au conseil. Nous, nous allons jusqu&apos;au
              lieu fini.
            </p>
            <p>
              Un intérieur réussi n&apos;est pas une affaire de tendance. C&apos;est un
              équilibre — entre l&apos;esthétique, l&apos;usage et la lumière particulière
              des bords du lac.
            </p>
            <p>
              Conception, mobilier sur mesure, rideaux, suivi de chantier — nous menons
              le projet de A à Z, sans que vous ayez à coordonner quoi que ce soit.
            </p>
          </div>
        </div>
      </section>

      <section className="studio" id="studio">
        <div className="studio-in">
          <div className="studio-pic">
            <div className="main">
              <SiteImage
                src="/assets/img/studio.jpg"
                alt="Natalia et Coline, duo de designers d'intérieur, studio La Casa de Anna près d'Annecy"
                width={800}
                height={1000}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div className="badge">
              <span>Studio fondé en</span>
              <span className="yr">2021</span>
            </div>
          </div>
          <div className="studio-txt">
            <div className="sec-no">N°—03 / Le studio</div>
            <h3>
              Deux regards, <span className="it">une exigence.</span>
            </h3>
            <p>
              La Casa de Anna est né d&apos;une passion devenue métier. Après plusieurs
              années dans le marketing, Natalia se lance dans le design d&apos;intérieur ;
              Coline la rejoint pour former un binôme dont les regards se complètent et
              se challengent.
            </p>
            <p>
              Du conseil ponctuel au projet complet — conception, plans 3D, mobilier sur
              mesure, rideaux, suivi de chantier — nous accompagnons particuliers et
              professionnels du bassin annécien, avec la même attention au détail à
              chaque étape.
            </p>
            <p>
              Notre travail commence toujours par une écoute : vos habitudes, vos
              souvenirs, votre manière d&apos;habiter. Le reste n&apos;est que mise en
              forme — et c&apos;est notre métier.
            </p>
            <div className="sign">
              <div className="nm fr">Natalia &amp; Coline</div>
              <div className="rl">Designers d&apos;intérieur</div>
            </div>
          </div>
        </div>
      </section>

      <div className="astband" aria-hidden="true">
        {Array.from({ length: 4 }).map((_, i) => (
          <span key={i}>
            Approche<span className="ast" />
          </span>
        ))}
      </div>

      <section className="values" id="valeurs">
        <div className="values-in">
          <div className="values-head">
            <h2>
              Notre <span className="it">approche.</span>
            </h2>
            <p className="side">
              Trois principes guident chacun de nos projets. Pas une charte marketing —
              une manière de travailler éprouvée, projet après projet, depuis 2021.
            </p>
          </div>
          <div className="vrow">
            <span className="vno fr">01</span>
            <span className="vname">Justesse</span>
            <p className="vd1 fr">
              Aucun choix décoratif n&apos;est anodin. Chaque matériau, chaque proportion
              répond à un usage, une lumière, une histoire.
            </p>
            <p className="vd2">
              Pas de tendance pour la tendance. Le bon matériau au bon endroit, et
              c&apos;est lui qui décide.
            </p>
          </div>
          <div className="vrow">
            <span className="vno fr">02</span>
            <span className="vname">Sur-mesure</span>
            <p className="vd1 fr">
              Le mobilier et les rideaux sont confectionnés pour vos espaces, pas
              adaptés depuis un catalogue.
            </p>
            <p className="vd2">
              Atelier intégré, réseau d&apos;artisans locaux, finitions surveillées du
              premier croquis à la dernière vis.
            </p>
          </div>
          <div className="vrow">
            <span className="vno fr">03</span>
            <span className="vname">Conduite</span>
            <p className="vd1 fr">
              Vous parlez à une seule équipe — du diagnostic initial au stylisme final,
              en passant par les artisans.
            </p>
            <p className="vd2">
              Vous n&apos;avez pas à coordonner. C&apos;est tout l&apos;objet du clé-en-main.
            </p>
          </div>
        </div>
      </section>

      <section className="proj" id="realisations">
        <div className="proj-head">
          <div>
            <div className="sec-no">N°—05 / Réalisations</div>
            <h2>
              Histoires
              <br />
              d&apos;<span className="it">intérieurs.</span>
            </h2>
          </div>
          <p className="side">
            Lofts, combles, appartements vue lac, salles de bains-hôtel — chaque projet
            pensé sur mesure, du plateau brut au stylisme final. Glissez horizontalement.
          </p>
        </div>

        <div className="h-rail">
          <div className="h-track" id="htrack">
            {projects.map((p) => (
              <article className="h-card" key={p.slug}>
                <div className="hi">
                  <SiteImage
                    src={p.image}
                    alt={p.alt}
                    width={540}
                    height={675}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                  <span className="hno fr">№ {p.number}</span>
                  <span className="htag">{p.tag}</span>
                </div>
                <div className="hbar">
                  <span className="hyr">{p.year}</span>
                  <span className="htt fr">
                    {p.title} <span className="it">{p.titleItalic}</span>
                  </span>
                  <Link href={`/realisations/${p.slug}`} className="hlink">
                    Projet
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className="h-progress">
            <div className="pfill" id="pfill" />
          </div>
          <div className="h-meta" id="hmeta">
            01 / 07
          </div>
        </div>
      </section>

      <section className="qblock">
        <blockquote>
          Qui a dit
          <br />
          <span className="it">qu&apos;un beau lieu</span>
          <br />
          ne pouvait pas
          <br />
          <span className="it warm">aussi être habité.</span>
        </blockquote>
        <p>
          Nous ne décorons pas des photos pour magazines. Nous concevons des intérieurs
          faits pour être vécus — par vous, vos enfants, vos invités, votre quotidien.
          La beauté n&apos;est pas l&apos;ennemie de la fonction. C&apos;est sa forme la
          plus aboutie.
        </p>
      </section>

      <section className="press" id="presse">
        <div className="press-in">
          <div className="press-pic">
            <SiteImage
              src="/assets/img/press-1.jpg"
              alt="Couverture du reportage Art & Décoration sur La Casa de Anna"
              width={600}
              height={800}
            />
            <SiteImage
              src="/assets/img/press-2.jpg"
              alt="Double page Art & Décoration consacrée à un projet de La Casa de Anna près d'Annecy"
              width={600}
              height={800}
            />
          </div>
          <div>
            <div className="sec-no">N°—07 / Dans la presse</div>
            <h2>
              Esprit <span className="it">d&apos;ouverture.</span>
            </h2>
            <q>
              Une maison unique alliant liberté architecturale et harmonie avec
              l&apos;environnement, près d&apos;Annecy.
            </q>
            <div className="pmeta">
              Art &amp; Décoration · Reportage Céline Hassen · Photos Sophie Lloyd
            </div>
            <a
              href="https://www.instagram.com/la_casa_de_anna/"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Découvrir le reportage →
            </a>
          </div>
        </div>
      </section>

      <section className="voice">
        <div className="voice-in">
          <div className="sec-no">N°—08 / Ce qu&apos;elles en disent</div>
          <q>
            Supers conseils, supers idées. Les plans 3D nous ont aidés à{" "}
            <span className="warm">bien visualiser</span>. Natalia et Coline sont très à
            l&apos;écoute et très réactives — je les recommande sans hésiter.
          </q>
          <div className="by">Cliente — avis Google vérifié</div>
          <div className="voice-stats">
            <div className="vstat">
              <div className="vn fr">
                5,0<span className="it">★</span>
              </div>
              <div className="vl">Note moyenne</div>
            </div>
            <div className="vstat">
              <div className="vn fr">16</div>
              <div className="vl">Avis Google</div>
            </div>
            <div className="vstat">
              <div className="vn fr">
                34<span className="it">K</span>
              </div>
              <div className="vl">Abonnés Instagram</div>
            </div>
          </div>
          <p className="voice-note">
            Note et nombre d&apos;avis à connecter à la fiche Google Business Profile du
            studio.
          </p>
        </div>
      </section>

      <section className="faq" id="faq">
        <div className="faq-in">
          <div className="sec-no">N°—09 / Questions fréquentes</div>
          <h2>
            Avant de nous <span className="it">écrire.</span>
          </h2>
          {faqItems.map((item) => (
            <div className="faq-item" key={item.q}>
              <div className="faq-q">
                {item.q}
                <span className="plus">+</span>
              </div>
              <div className="faq-a">
                <div className="faq-a-in">{item.a}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-in">
          <div>
            <div className="sec-no">N°—10 / Démarrer</div>
            <h2>
              Donnons un sens
              <span className="it">à votre intérieur.</span>
            </h2>
          </div>
          <div className="contact-side">
            <p>
              Premier échange gratuit, sans engagement. Parlez-nous de votre projet — on
              vous explique notre méthode et l&apos;on voit si l&apos;aventure nous
              ressemble.
            </p>
            <div className="contact-acts">
              <a href={`mailto:${site.email}`} className="primary">
                {site.email} <span>→</span>
              </a>
              <a href={`tel:${site.phone}`}>
                06 61 24 30 36 <span>→</span>
              </a>
              <a href={site.sameAs[0]}>
                @la_casa_de_anna <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="foot-mark fr">
          La Casa <span className="it">de Anna</span>
          <span className="reg">®</span>
        </div>
        <div className="foot-grid">
          <div>
            <h5>Studio</h5>
            <p>
              Studio de design d&apos;intérieur clé-en-main, lac d&apos;Annecy.
              Veyrier-du-Lac · Haute-Savoie.
            </p>
          </div>
          <div>
            <h5>Navigation</h5>
            <ul>
              <li>
                <a href="#studio">Le studio</a>
              </li>
              <li>
                <a href="#valeurs">Approche</a>
              </li>
              <li>
                <a href="#realisations">Réalisations</a>
              </li>
              <li>
                <a href="#presse">Presse</a>
              </li>
              <li>
                <a href="#faq">Questions</a>
              </li>
            </ul>
          </div>
          <div>
            <h5>Contact</h5>
            <ul>
              <li>
                <a href={`tel:${site.phone}`}>06 61 24 30 36</a>
              </li>
              <li>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li>Lun-Ven · 9h-18h</li>
            </ul>
          </div>
          <div>
            <h5>Réseaux</h5>
            <ul>
              <li>
                <a href={site.sameAs[0]}>Instagram</a>
              </li>
              <li>
                <a href={site.sameAs[1]}>Pinterest</a>
              </li>
              <li>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=La+Casa+de+Anna+Veyrier-du-Lac"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Business
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="foot-bot">
          <span>© 2026 La Casa de Anna ® — SARL · Veyrier-du-Lac</span>
          <span>Mentions légales · Politique de confidentialité</span>
        </div>
      </footer>
    </>
  );
}

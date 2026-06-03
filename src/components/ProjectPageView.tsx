"use client";

import Link from "next/link";
import { SiteImage } from "@/components/SiteImage";
import { SiteShell } from "@/components/SiteShell";
import type { Project } from "@/lib/data";
import { site } from "@/lib/site";

type Props = {
  project: Project;
  prev: Project | null;
  next: Project | null;
};

export function ProjectPageView({ project, prev, next }: Props) {
  return (
    <SiteShell>
      <article className="proj-page">
        <header className="proj-hero">
          <Link href="/#realisations" className="sec-no proj-back">
            ← Réalisations · N°—{project.number}
          </Link>
          <h1 className="proj-title fr">
            {project.title} <span className="it">{project.titleItalic}</span>
          </h1>
          <p className="proj-meta">
            <span>{project.tag}</span>
            <span className="proj-meta-sep">·</span>
            <span>{project.year}</span>
          </p>
        </header>

        <div className="proj-cover">
          <SiteImage
            src={project.image}
            alt={project.alt}
            width={1320}
            height={1650}
            priority
            sizes="100vw"
            className="proj-cover-img"
          />
        </div>

        <div className="proj-body">
          <p className="proj-lede fr">{project.lede}</p>
          {project.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
          <div className="proj-scope">
            <h2 className="sec-no">Prestations</h2>
            <ul>
              {project.scope.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </div>

        <nav className="proj-nav" aria-label="Projets précédent et suivant">
          {prev ? (
            <Link href={`/realisations/${prev.slug}`} className="proj-nav-link prev">
              <span className="label">Projet précédent</span>
              <span className="title fr">
                {prev.title} <span className="it">{prev.titleItalic}</span>
              </span>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link href={`/realisations/${next.slug}`} className="proj-nav-link next">
              <span className="label">Projet suivant</span>
              <span className="title fr">
                {next.title} <span className="it">{next.titleItalic}</span>
              </span>
            </Link>
          ) : (
            <span />
          )}
        </nav>

        <section className="contact proj-cta" id="contact">
          <div className="contact-in">
            <div>
              <div className="sec-no">Un projet similaire ?</div>
              <h2>
                Parlons de <span className="it">votre intérieur.</span>
              </h2>
            </div>
            <div className="contact-side">
              <p>
                Premier échange gratuit, sans engagement. Décrivez-nous votre lieu — nous
                vous expliquons comment nous travaillons sur Annecy et en Haute-Savoie.
              </p>
              <div className="contact-acts">
                <a href={`mailto:${site.email}`} className="primary">
                  {site.email} <span>→</span>
                </a>
                <a href={`tel:${site.phone}`}>
                  06 61 24 30 36 <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </article>
    </SiteShell>
  );
}

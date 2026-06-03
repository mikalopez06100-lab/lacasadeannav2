# La Casa de Anna — Landing V4 (Next.js)

Site de production basé sur la maquette `lacasadeanna-landing-v4.html` et le brief Cursor V4.

## Stack

- Next.js 14 (App Router)
- Lenis (smooth scroll)
- GSAP 3 + ScrollTrigger
- `next/image` (WebP/AVIF)
- Fonts self-hostées : Fraunces + Bricolage Grotesque

## Démarrage

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Déploiement Vercel

1. Importer le dépôt [lacasadeannav2](https://github.com/mikalopez06100-lab/lacasadeannav2) sur [vercel.com](https://vercel.com)
2. Framework : **Next.js** (détecté automatiquement)
3. Build : `npm run build` — Output : défaut Next.js
4. Domaine conseillé : `www.lacasadeanna.com` (variables d’environnement optionnelles)

Compatible Vercel (`npm run build`).

## Fait (brief)

- [x] Images extraites de la maquette → `public/assets/img/`
- [x] CSS de la maquette → `src/app/globals.css`
- [x] Lenis + GSAP (hero, manifeste, valeurs, footer-mark, scroll horizontal desktop)
- [x] Curseur contextuel (touch désactivé)
- [x] SEO : JSON-LD SSR, canonical, sitemap, robots, OG image (`public/og.jpg`)
- [x] Pages projet `/realisations/[slug]` (7 projets, pas de `href="#"`)
- [x] `prefers-reduced-motion` (loader, marquees, animations)
- [x] H1 sémantique sur le hero

## En attente côté client

- Logo vectoriel SVG d’origine (placeholder typographique dans `public/logo.svg` + `logo.png`)
- OG image 1200×630 dédiée (actuellement `le-detail.jpg` en placeholder)
- Connexion Google Business / Places API pour les avis
- Formulaire Brevo (actuellement mailto/tel)
- Autorisation citation Art & Décoration

## Scripts utilitaires

```bash
node scripts/extract-images.mjs   # ré-extraire les images depuis le HTML source
```

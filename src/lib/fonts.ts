import { Bricolage_Grotesque, Fraunces } from "next/font/google";

/** Fraunces variable — axes SOFT / WONK / opsz pour la maquette */
export const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  adjustFontFallback: true,
  axes: ["SOFT", "WONK", "opsz"],
});

export const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
  adjustFontFallback: true,
  weight: ["300", "400", "500", "600"],
});

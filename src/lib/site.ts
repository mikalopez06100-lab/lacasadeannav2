export const site = {
  name: "La Casa de Anna",
  url: "https://www.lacasadeanna.com",
  description:
    "La Casa de Anna, studio de design d'intérieur clé-en-main au bord du lac d'Annecy. Conception, mobilier sur mesure, rideaux et suivi de chantier — du premier croquis au dernier coussin.",
  email: "decoration@lacasadeanna.com",
  phone: "+33661243036",
  address: {
    street: "38A route de Morat",
    city: "Veyrier-du-Lac",
    postalCode: "74290",
    country: "FR",
  },
  areaServed: [
    "Annecy",
    "Veyrier-du-Lac",
    "Haute-Savoie",
    "Annecy-le-Vieux",
    "Talloires",
    "Menthon-Saint-Bernard",
  ],
  sameAs: [
    "https://www.instagram.com/la_casa_de_anna/",
    "https://fr.pinterest.com/La_casa_de_Anna/",
  ],
} as const;

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  description: site.description,
  url: site.url,
  telephone: site.phone,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
  areaServed: site.areaServed,
  priceRange: "€€€",
  sameAs: site.sameAs,
};

export const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Dans quelle zone géographique travaillez-vous ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Le studio est basé à Veyrier-du-Lac, au bord du lac d'Annecy. Nous accompagnons particuliers et professionnels sur Annecy, le bassin annécien, la Haute-Savoie, et à distance en visio pour la consultation.",
      },
    },
    {
      "@type": "Question",
      name: "Combien coûte la consultation ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La consultation est à 790 € TTC pour 3 heures à domicile ou en visio. 150 € sont déduits dès 1 000 € de commande mobilier via le studio.",
      },
    },
    {
      "@type": "Question",
      name: "Quelle différence entre la consultation, le dossier de conception et le clé-en-main ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La consultation (3 h) aide à trancher vos choix déco avec matériauthèque et plan 3D. Le dossier de conception livre plans, rendus 3D, planche d'ambiance et liste shopping. Le clé-en-main inclut tout, plus coordination du chantier, commandes, pose et stylisme final.",
      },
    },
    {
      "@type": "Question",
      name: "Combien de temps dure un projet ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Le dossier de conception est remis sous 20 à 45 jours. Un projet clé-en-main s'étale sur plusieurs mois selon les travaux et les délais artisans.",
      },
    },
  ],
};

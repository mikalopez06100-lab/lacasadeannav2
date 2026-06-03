export type Project = {
  slug: string;
  number: string;
  tag: string;
  year: string;
  title: string;
  titleItalic: string;
  image: string;
  alt: string;
  lede: string;
  paragraphs: string[];
  scope: string[];
};

export const projects: Project[] = [
  {
    slug: "loft-pringy",
    number: "01",
    tag: "Pringy · Haute-Savoie",
    year: "2024",
    title: "Loft",
    titleItalic: "Pringy",
    image: "/assets/img/loft-pringy.jpg",
    alt: "Loft Pringy — chambre sous combles avec verrière noire et poutres apparentes, conçue par La Casa de Anna",
    lede: "Un plateau sous combles transformé en suite parentale : verrière noire, poutres apparentes et lumière maîtrisée.",
    paragraphs: [
      "Le projet part d'un volume brut sous toiture, peu exploité malgré un fort potentiel. L'enjeu : structurer l'espace sans le figer, en assumant la verticalité et la matière du bâti existant.",
      "La verrière noire cadre le ciel et apporte une lumière zénithale contrôlée. Les poutres restent visibles ; le mobilier et les textiles en coton et lin adoucissent l'ensemble sans le dénaturer.",
      "Conception, plans 3D, choix des matériaux, mobilier et coordination des artisans — un accompagnement clé-en-main du premier croquis au dernier coussin.",
    ],
    scope: ["Conception & plans 3D", "Mobilier sur mesure", "Textiles", "Coordination chantier"],
  },
  {
    slug: "sous-les-toits",
    number: "02",
    tag: "Annecy · Combles",
    year: "2024",
    title: "Sous",
    titleItalic: "les toits",
    image: "/assets/img/sous-les-toits.jpg",
    alt: "Chambre sous combles avec lits superposés intégrés et grosses poutres, La Casa de Anna",
    lede: "Une chambre d'enfants sous les toits : lits superposés intégrés, bois massif et jeux de hauteur sous charpente.",
    paragraphs: [
      "Les combles d'une maison annécienne accueillent une chambre pour deux enfants. La pente du toit impose des choix précis : chaque centimètre est pensé pour le quotidien, pas seulement pour la photo.",
      "Les lits superposés sont conçus sur mesure et épousent la structure. Le bois clair dialogue avec les poutres anciennes ; les niches de rangement libèrent le centre de la pièce.",
      "Un projet où la décoration rejoint l'ergonomie : circuler, ranger, lire, dormir — tout est dessiné avant d'être habillé.",
    ],
    scope: ["Mobilier sur mesure", "Planche d'ambiance", "Rangements intégrés", "Stylisme final"],
  },
  {
    slug: "comme-a-l-hotel",
    number: "03",
    tag: "Veyrier-du-Lac · Suite",
    year: "2024",
    title: "Comme",
    titleItalic: "à l'hôtel",
    image: "/assets/img/comme-a-l-hotel.jpg",
    alt: "Salle de bains double vasque bois et ardoise, suite parentale conçue par La Casa de Anna",
    lede: "Une suite parentale au bord du lac : salle de bains double vasque, bois chaleureux et ardoise — l'esprit hôtel boutique à domicile.",
    paragraphs: [
      "Les clients souhaitaient une salle de bains qui prolonge la chambre, sans rupture visuelle. L'ardoise et le bois structurent l'espace ; les lignes restent sobres, presque monastiques.",
      "La double vasque sur plan bois libère les matinées ; le miroir et l'éclairage indirect prolongent la hauteur sous plafond. Chaque détail — robinetterie, poignées, finitions — a été validé en rendu 3D avant commande.",
      "Projet mené en clé-en-main : du plan de dépose aux dernières réserves de carrelage et boiseries.",
    ],
    scope: ["Dossier de conception", "Rendus 3D", "Sélection matériaux", "Suivi de chantier"],
  },
  {
    slug: "la-foret",
    number: "04",
    tag: "Annecy-le-Vieux · Mezzanine",
    year: "2023",
    title: "La",
    titleItalic: "forêt",
    image: "/assets/img/la-foret.jpg",
    alt: "Mezzanine avec papier peint forêt et baignoire face aux montagnes",
    lede: "Mezzanine ouverte sur les montagnes : papier peint forêt, baignoire îlot et lecture du paysage comme pièce maîtresse.",
    paragraphs: [
      "Une mezzanine surplombe le séjour ; la vue sur les sommets devient le point focal. Le papier peint forêt enveloppe la zone bain et crée une atmosphère feutrée, presque hors du temps.",
      "La baignoire est positionnée pour capter la lumière du matin sans sacrifier l'intimité. Les matériaux — céramique, bois, laiton vieilli — composent une palette sobre, ancrée dans le lieu.",
      "Ce projet illustre notre approche : le décor n'embellit pas, il compose une vie — ici, celle d'une maison qui vit au rythme du lac et des saisons.",
    ],
    scope: ["Planche d'ambiance", "Papier peint & textiles", "Éclairage", "Stylisme"],
  },
  {
    slug: "l-escalier",
    number: "05",
    tag: "Annecy · Mezzanine bibliothèque",
    year: "2023",
    title: "L'",
    titleItalic: "escalier",
    image: "/assets/img/l-escalier.jpg",
    alt: "Escalier bibliothèque sur mesure avec papier peint mural montagne enneigée",
    lede: "Un escalier devient bibliothèque : structure sur mesure et panorama montagne en papier peint mural.",
    paragraphs: [
      "L'escalier était une circulation perdue. Nous l'avons transformé en bibliothèque sculptée, avec marches bois, garde-corps discret et rayonnages intégrés dans la hauteur.",
      "Le papier peint montagne enneigée au fond du volume crée une perspective inattendue — comme une fenêtre ouverte sur un autre horizon. Le contraste entre bois chaleureux et paysage froid structure l'ensemble.",
      "Mobilier et menuiserie conçus avec nos artisans locaux ; pose et finitions suivies jusqu'au dernier ragréage.",
    ],
    scope: ["Menuiserie sur mesure", "Papier peint panoramique", "Éclairage intégré", "Coordination artisans"],
  },
  {
    slug: "chambre-anna",
    number: "06",
    tag: "Chambre d'enfant · Sur mesure",
    year: "2024",
    title: "La chambre",
    titleItalic: "d'Anna",
    image: "/assets/img/chambre-anna.jpg",
    alt: "Chambre d'enfant avec lit cabane et ciel étoilé, conçue par La Casa de Anna",
    lede: "Une chambre d'enfant sur mesure : lit cabane, ciel étoilé et univers poétique pensé pour grandir avec elle.",
    paragraphs: [
      "Pour cette chambre, nous avons écouté avant de dessiner : jeux, lecture, rêves, rangements. Le lit cabane structure l'espace et libère le sol pour jouer.",
      "Le plafond « ciel étoilé » apporte une magie nocturne sans tomber dans l'excès. Les couleurs restent douces, les matériaux sains ; la pièce peut évoluer avec l'âge de l'enfant sans tout refaire.",
      "Un exemple de mobilier sur mesure signé La Casa de Anna — conçu, fabriqué et posé par notre réseau d'artisans en Haute-Savoie.",
    ],
    scope: ["Lit cabane sur mesure", "Plafond & éclairage", "Rangements", "Stylisme"],
  },
  {
    slug: "le-detail",
    number: "07",
    tag: "Détail · Stylisme",
    year: "2024",
    title: "Le",
    titleItalic: "détail",
    image: "/assets/img/le-detail.jpg",
    alt: "Détail d'aménagement intérieur — texture, matières, finition",
    lede: "Le détail qui fait la différence : matières, textures et finitions qui signent un intérieur abouti.",
    paragraphs: [
      "Un projet ne se résume pas à un plan d'ensemble. Ce sont les jointures, les chants de bois, la chute de lumière sur un linage, la patine du laiton qui donnent à un lieu sa personnalité.",
      "Nous accompagnons le stylisme final comme une étape à part entière : objets, vases, livres, textiles — tout est disposé pour que l'espace soit habité, pas seulement photographié.",
      "Cette sensibilité au détail traverse tous nos projets, du loft aux suites parentales, en passant par les chambres d'enfants.",
    ],
    scope: ["Stylisme final", "Sélection objets", "Textiles", "Matières & finitions"],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: index > 0 ? projects[index - 1] : null,
    next: index < projects.length - 1 ? projects[index + 1] : null,
  };
}

export const faqItems = [
  {
    q: "Dans quelle zone géographique travaillez-vous ?",
    a: "Le studio est basé à Veyrier-du-Lac, au bord du lac d'Annecy. Nous accompagnons particuliers et professionnels sur Annecy, le bassin annécien, Annecy-le-Vieux, Talloires, Menthon-Saint-Bernard, la Haute-Savoie et les projets à distance en visio pour la consultation.",
  },
  {
    q: "Quelle différence entre la consultation, le dossier de conception et le clé-en-main ?",
    a: "La consultation (3 h, 790 €) aide à trancher vos choix déco sur place, avec matériauthèque et plan 3D. Le dossier de conception livre plans, rendus 3D, planche d'ambiance, plan électrique et liste shopping pour lancer vos travaux avec vos artisans. Le clé-en-main inclut tout le dossier plus la coordination du chantier, les commandes, la pose et le stylisme final.",
  },
  {
    q: "Combien coûte la consultation ?",
    a: "La consultation est à 790 € TTC pour 3 heures à domicile ou en visio. 150 € sont déduits dès 1 000 € de commande mobilier passée via le studio. Les conditions précises vous sont rappelées lors du premier échange.",
  },
  {
    q: "Combien de temps dure un projet ?",
    a: "Cela dépend de l'ampleur. Le dossier de conception est remis sous 20 à 45 jours après la visite. Un projet clé-en-main s'étale en général sur plusieurs mois, selon les travaux, les délais des artisans et le mobilier sur mesure.",
  },
  {
    q: "Puis-je commencer par une consultation avant d'aller plus loin ?",
    a: "Oui, c'est même l'approche la plus courante : un premier rendez-vous pour clarifier vos besoins, puis — si vous le souhaitez — un devis pour un dossier de conception ou un accompagnement clé-en-main. Aucune obligation après la consultation.",
  },
  {
    q: "Accompagnez-vous les professionnels (hôtels, restaurants, bureaux) ?",
    a: "Oui. Nous concevons des espaces alignés avec votre marque et vos contraintes d'exploitation : hôtellerie, restauration, bureaux, commerces. Contactez-nous en précisant votre activité pour un premier échange adapté.",
  },
];

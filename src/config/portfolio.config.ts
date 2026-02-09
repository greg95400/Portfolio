export interface FileItem {
  label: string
  path: string
}

export interface SectionItem {
  title: string
  description: string
  files: FileItem[]
}

export interface Section {
  id: string
  title: string
  icon: string
  description: string
  path: string
  items: SectionItem[]
}

export interface PortfolioConfig {
  personal: {
    name: string
    title: string
    bio: string
    linkedin: string
    email: string
    cvPath: string
  }
  sections: Section[]
}

export const portfolioConfig: PortfolioConfig = {
  personal: {
    name: "MENEUS Grégory",
    title: "Etudiant MIAGE",
    bio: "Etudiant passionné en MIAGE, spécialisé dans les systèmes d'information et le développement web.",
    linkedin: "https://www.linkedin.com/in/gr%C3%A9gory-meneus-8379a5309/",
    email: "votre.email@example.com",
    cvPath: "/files/cv.pdf",
  },
  sections: [
    {
      id: "travaux",
      title: "Travaux demandés",
      icon: "FileText",
      description: "Tous les travaux réalisés en classe, organisés et complets.",
      path: "/travaux",
      items: [
        {
          title: "TD Odoo",
          description: "Travaux dirigés sur Odoo - ERP et gestion d'entreprise",
          files: [
            { label: "TD Odoo (PDF)", path: "/files/td-odoo.pdf" },
          ],
        },
      ],
    },
    {
      id: "cours",
      title: "Supports de cours",
      icon: "BookOpen",
      description: "Notes de cours complétées, claires et structurées.",
      path: "/cours",
      items: [
        {
          title: "Cours 1 - Exemple",
          description: "Notes du premier cours",
          files: [],
        },
      ],
    },
    {
      id: "systeme-info",
      title: "Documents SI",
      icon: "Database",
      description: "Documents liés au système d'information : rédaction, organisation et présentation.",
      path: "/systeme-info",
      items: [
        {
          title: "Document SI - Exemple",
          description: "Description du document",
          files: [],
        },
      ],
    },
    {
      id: "certifications",
      title: "Certifications & Projets",
      icon: "Award",
      description: "Attestations, certifications obtenues et projets réalisés.",
      path: "/certifications",
      items: [
        {
          title: "Certification Exemple",
          description: "Description de la certification",
          files: [],
        },
      ],
    },
    {
      id: "projet-final",
      title: "Projet final",
      icon: "Rocket",
      description: "Projet numérique intégrant les compétences acquises (CRM).",
      path: "/projet-final",
      items: [
        {
          title: "Projet CRM",
          description: "Conception et réalisation du projet CRM",
          files: [],
        },
      ],
    },
    {
      id: "soutenance",
      title: "Soutenance",
      icon: "Presentation",
      description: "Diaporama structuré pour la présentation orale.",
      path: "/soutenance",
      items: [
        {
          title: "Diaporama de soutenance",
          description: "Présentation pour la soutenance finale",
          files: [],
        },
      ],
    },
    {
      id: "ressources",
      title: "Autres ressources",
      icon: "Library",
      description: "Veille technologique et ressources complémentaires.",
      path: "/ressources",
      items: [
        {
          title: "Ressource Exemple",
          description: "Description de la ressource",
          files: [],
        },
      ],
    },
  ],
}

export interface FileItem {
  label: string
  path: string
  external?: boolean
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
        {
          title: "TP HubSpot",
          description: "TP Découverte HubSpot - CRM et Marketing",
          files: [
            { label: "TP Découverte HubSpot (PDF)", path: "/files/TP_Decouverte_hubspot.pdf" },
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
          title: "Cours 1",
          description: "Support de cours 1",
          files: [
            { label: "Cours 1 (PDF)", path: "/files/cours1.pdf" },
          ],
        },
        {
          title: "Cours 2 HubSpot",
          description: "Supports de cours sur HubSpot CRM et Marketing",
          files: [
            { label: "1- CRM version Etudiant", path: "/files/Cours_hubspot/1- CRM version Etudiant.pdf" },
            { label: "2- Termes techniques CRM", path: "/files/Cours_hubspot/2- termes techniques CRM version Etudiant.pdf" },
            { label: "3- Pipeline vs Funnel", path: "/files/Cours_hubspot/3- pipeline vs funnel.pdf" },
            { label: "4 - Scénario simple", path: "/files/Cours_hubspot/4 - scénario simple.pdf" },
            { label: "6- Pipeline de vente VS Workflow", path: "/files/Cours_hubspot/6- Pipeline de vente VS Workflow.pdf" },
            { label: "8- HubSpot", path: "/files/Cours_hubspot/8- hubspot.docx.pdf" },
            { label: "CRM VS PGI", path: "/files/Cours_hubspot/CRM VS PGI VERSION ETUD.pdf" },
            { label: "PGI (Excel)", path: "/files/Cours_hubspot/PGI.xlsx" },
          ],
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
          title: "HubSpot CRM & Marketing",
          description: "Maîtrise des outils CRM et de l'automatisation marketing via HubSpot.",
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

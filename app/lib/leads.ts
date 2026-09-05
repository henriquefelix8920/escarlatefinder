export type LeadStatus =
  | "novo"
  | "interessante"
  | "abordado"
  | "respondeu"
  | "proposta"
  | "cliente";

export type Lead = {
  id: string;
  name: string;
  city: string;
  score: number;
  website: boolean;
  photos: number;
  instagram: string;
  instagramUrl: string;
  whatsapp: string | null;
  profileUrl: string;
  source: string;
  status: LeadStatus;
};

export const leads: Lead[] = [
  {
    id: "lead-001",
    name: "Ana Martins",
    city: "Uberlândia",
    score: 92,
    website: false,
    photos: 28,
    instagram: "@anamartins",
    instagramUrl: "https://instagram.com/anamartins",
    whatsapp: null,
    profileUrl: "#",
    source: "Demonstração",
    status: "novo",
  },

  {
    id: "lead-002",
    name: "Bella Andrade",
    city: "Uberaba",
    score: 84,
    website: false,
    photos: 19,
    instagram: "@bellaandrade",
    instagramUrl: "https://instagram.com/bellaandrade",
    whatsapp: null,
    profileUrl: "#",
    source: "Demonstração",
    status: "novo",
  },

  {
    id: "lead-003",
    name: "Laura Costa",
    city: "Franca",
    score: 76,
    website: false,
    photos: 15,
    instagram: "@lauracosta",
    instagramUrl: "https://instagram.com/lauracosta",
    whatsapp: null,
    profileUrl: "#",
    source: "Demonstração",
    status: "novo",
  },

  {
    id: "lead-004",
    name: "Maya Oliveira",
    city: "Ribeirão Preto",
    score: 68,
    website: true,
    photos: 12,
    instagram: "@mayaoliveira",
    instagramUrl: "https://instagram.com/mayaoliveira",
    whatsapp: null,
    profileUrl: "#",
    source: "Demonstração",
    status: "novo",
  },
];

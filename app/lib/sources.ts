export type SourceStatus =
  | "demo"
  | "available"
  | "connected"
  | "disabled";

export type Source = {
  id: string;
  name: string;
  description: string;
  url: string;
  status: SourceStatus;
  type: "manual" | "public" | "api";
  leadsFound: number;
  lastCollection: string | null;
};

export type PublicLead = {
  id: string;
  name: string;
  city: string;
  score: number;
  instagram: string;
  website: boolean;
  photos: number;
  whatsapp: string | null;
};

export const sources: Source[] = [
  {
    id: "source-demo",
    name: "Modo demonstração",
    description:
      "Fonte utilizada para testar o EscarlateFinder sem conexão externa.",
    url: "#",
    status: "demo",
    type: "manual",
    leadsFound: 4,
    lastCollection: "Agora",
  },

  {
    id: "source-public-01",
    name: "Fonte pública",
    description:
      "Aguardando validação das condições de coleta automatizada.",
    url: "#",
    status: "available",
    type: "public",
    leadsFound: 0,
    lastCollection: null,
  },

  {
    id: "source-api-01",
    name: "Integração API",
    description:
      "Estrutura reservada para futuras integrações oficiais por API.",
    url: "#",
    status: "disabled",
    type: "api",
    leadsFound: 0,
    lastCollection: null,
  },
];

const demoLeads: PublicLead[] = [
  {
    id: "demo-1",
    name: "Ana Martins",
    city: "Uberlândia",
    score: 92,
    instagram: "@anamartins",
    website: false,
    photos: 28,
    whatsapp: null,
  },
  {
    id: "demo-2",
    name: "Beatriz Silva",
    city: "Uberlândia",
    score: 86,
    instagram: "@beatrizsilva",
    website: false,
    photos: 21,
    whatsapp: null,
  },
  {
    id: "demo-3",
    name: "Camila Rocha",
    city: "Uberlândia",
    score: 78,
    instagram: "@camilarocha",
    website: false,
    photos: 17,
    whatsapp: null,
  },
];

export async function searchSources(
  query: string | { city?: string }
): Promise<PublicLead[]> {
  const city =
    typeof query === "string"
      ? query.trim()
      : (query.city ?? "").trim();

  if (!city) {
    return demoLeads;
  }

  const normalizedCity = city.toLowerCase();

  return demoLeads.filter(
    (lead) =>
      lead.city.toLowerCase().includes(normalizedCity) ||
      normalizedCity.includes(lead.city.toLowerCase())
  );
}

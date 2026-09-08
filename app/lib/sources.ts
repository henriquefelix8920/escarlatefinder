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

export type SearchSourcesQuery = {
  city?: string;
  category?: string;
};

export type SearchSourcesResult = {
  leads: PublicLead[];
  sourcesUsed: string[];
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
      "Fonte pública preparada para o motor de prospecção.",
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
  query: SearchSourcesQuery
): Promise<SearchSourcesResult> {
  const city = (query.city ?? "").trim().toLowerCase();

  const category = (query.category ?? "").trim();

  console.log(
    "[EscarlateFinder] Nova busca:",
    {
      city: query.city ?? "",
      category,
    }
  );

  let leads = demoLeads;

  if (city) {
    leads = leads.filter((lead) => {
      const leadCity = lead.city.toLowerCase();

      return (
        leadCity.includes(city) ||
        city.includes(leadCity)
      );
    });
  }

  return {
    leads,
    sourcesUsed: ["Modo demonstração"],
  };
}

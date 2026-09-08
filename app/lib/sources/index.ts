export type SourceSearchParams = {
  city: string;
  category: string;
};

export type PublicLead = {
  id: string;
  name: string;
  city: string;
  profileUrl: string;
  website: string | null;
  whatsapp: string | null;
  instagram: string | null;
  source: string;
  score: number;
};

export type LeadSource = {
  id: string;
  name: string;
  description: string;
  search(params: SourceSearchParams): Promise<PublicLead[]>;
};

export type ProspectSearchResult = {
  city: string;
  category: string;
  leads: PublicLead[];
  sourcesUsed: string[];
};

const demoSource: LeadSource = {
  id: "demo",
  name: "Modo demonstração",
  description:
    "Fonte local utilizada para testar o mecanismo de prospecção.",
  async search({ city, category }) {
    const normalizedCity = city.trim() || "Uberlândia";

    return [
      {
        id: "demo-1",
        name: "Ana Martins",
        city: normalizedCity,
        profileUrl: "#",
        website: null,
        whatsapp: null,
        instagram: "@anamartins",
        source: "Modo demonstração",
        score: 92,
      },
      {
        id: "demo-2",
        name: "Beatriz Silva",
        city: normalizedCity,
        profileUrl: "#",
        website: null,
        whatsapp: null,
        instagram: "@beatrizsilva",
        source: "Modo demonstração",
        score: 86,
      },
      {
        id: "demo-3",
        name: "Camila Rocha",
        city: normalizedCity,
        profileUrl: "#",
        website: null,
        whatsapp: null,
        instagram: "@camilarocha",
        source: "Modo demonstração",
        score: 78,
      },
    ];
  },
};

export const sources: LeadSource[] = [demoSource];

export async function searchSources(
  params: SourceSearchParams
): Promise<ProspectSearchResult> {
  const activeSources = sources;

  const results = await Promise.all(
    activeSources.map((source) => source.search(params))
  );

  const leads = results.flat();

  return {
    city: params.city,
    category: params.category,
    leads,
    sourcesUsed: activeSources.map((source) => source.name),
  };
}

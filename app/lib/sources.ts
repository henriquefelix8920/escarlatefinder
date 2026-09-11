import { prospectSources } from "../prospect/sources";
import type {
  PublicLead,
  ProspectQuery,
} from "../prospect/contract";

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

export type SearchSourcesQuery = ProspectQuery;

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
    leadsFound: 3,
    lastCollection: "Agora",
  },

  {
    id: "source-public-01",
    name: "Fonte pública",
    description:
      "Fonte pública conectada ao motor de prospecção.",
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

export async function searchSources(
  query: SearchSourcesQuery
): Promise<SearchSourcesResult> {
  const normalizedQuery: ProspectQuery = {
    city: (query.city ?? "").trim(),
    category: (query.category ?? "").trim(),
  };

  console.log(
    "[EscarlateFinder] Executando busca real:",
    normalizedQuery
  );

  const availableSources = prospectSources.filter(
    (source) =>
      source.status === "available" ||
      source.status === "connected"
  );

  const results = await Promise.all(
    availableSources.map((source) =>
      source.search(normalizedQuery)
    )
  );

  const leads: PublicLead[] = [];
  const sourcesUsed: string[] = [];

  for (const result of results) {
    leads.push(...result.leads);

    if (result.leads.length > 0) {
      sourcesUsed.push(result.sourceName);
    }
  }

  return {
    leads,
    sourcesUsed,
  };
}

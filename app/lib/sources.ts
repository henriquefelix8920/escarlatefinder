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

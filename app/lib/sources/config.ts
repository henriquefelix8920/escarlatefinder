export type SourceConfig = {
  id: string;
  name: string;
  description: string;
  type: "public" | "manual" | "api";
  automated: boolean;
  enabled: boolean;
};

export const sourceConfigs: SourceConfig[] = [
  {
    id: "public-directory",
    name: "Diretórios públicos",
    description:
      "Fontes públicas utilizadas para descobrir profissionais e perfis disponíveis na internet.",
    type: "public",
    automated: false,
    enabled: true,
  },

  {
    id: "manual-source",
    name: "Cadastro manual",
    description:
      "Permite adicionar uma lead encontrada manualmente pelo operador.",
    type: "manual",
    automated: false,
    enabled: true,
  },

  {
    id: "official-api",
    name: "Integração oficial",
    description:
      "Espaço reservado para futuras integrações por APIs oficiais.",
    type: "api",
    automated: true,
    enabled: false,
  },
];

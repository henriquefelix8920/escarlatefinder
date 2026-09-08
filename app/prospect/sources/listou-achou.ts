import type { LeadSource, ProspectQuery } from "../contract";

export const listouAchouSource: LeadSource = {
  id: "listou-achou",
  name: "Listou Achou",
  type: "public",

  async search(query: ProspectQuery) {
    const city = query.city.trim();

    if (!city) {
      return [];
    }

    /*
     * PRIMEIRA VERSÃO DO ADAPTADOR
     *
     * Nesta etapa não fazemos coleta automática.
     * O adaptador apenas estabelece o ponto de integração
     * entre o motor de prospecção e a fonte.
     *
     * A implementação de coleta será adicionada depois,
     * respeitando as condições de uso da fonte.
     */

    console.log(
      `[EscarlateFinder] Busca solicitada no Listou Achou: ${city}`
    );

    return [];
  },
};

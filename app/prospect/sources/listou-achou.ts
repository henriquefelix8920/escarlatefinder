import type {
  LeadSource,
  ProspectQuery,
} from "../contract";

export const listouAchouSource: LeadSource = {
  id: "listou-achou",

  name: "Listou Achou",

  description:
    "Fonte pública preparada para pesquisas de oportunidades.",

  status: "available",

  type: "public",

  async search(query: ProspectQuery) {
    const city = (query.city ?? "").trim();

    if (!city) {
      return {
        leads: [],
        sourceName: "Listou Achou",
      };
    }

    /*
     * ADAPTADOR DA FONTE
     *
     * Esta primeira versão ainda não realiza coleta
     * automática.
     *
     * O objetivo aqui é manter o motor de prospecção
     * separado da fonte, permitindo conectar a coleta
     * real posteriormente.
     */

    console.log(
      `[EscarlateFinder] Busca solicitada no Listou Achou: ${city}`
    );

    return {
      leads: [],
      sourceName: "Listou Achou",
    };
  },
};

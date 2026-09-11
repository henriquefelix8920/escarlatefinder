import type {
  LeadSource,
  ProspectQuery,
  LeadSourceResult,
} from "../contract";

const BASE_URL = "https://listouachou.com.br";

export const listouAchouSource: LeadSource = {
  id: "listou-achou",
  name: "Listou Achou",
  type: "public",
  status: "available",

  async search(
    query: ProspectQuery
  ): Promise<LeadSourceResult> {
    const city = (query.city ?? "").trim();

    if (!city) {
      return {
        leads: [],
        sourceName: "Listou Achou",
      };
    }

    /*
     * O Listou Achou utiliza URLs de cidade.
     * Exemplo:
     * https://listouachou.com.br/sao-paulo
     */

    const citySlug = city
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");

    const url = `${BASE_URL}/${citySlug}`;

    console.log(
      "[EscarlateFinder] Consultando Listou Achou:",
      url
    );

    try {
      const response = await fetch(url, {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (compatible; EscarlateFinder/1.0)",
          Accept: "text/html",
        },
        cache: "no-store",
      });

      if (!response.ok) {
        console.error(
          "[EscarlateFinder] Listou Achou respondeu:",
          response.status
        );

        return {
          leads: [],
          sourceName: "Listou Achou",
        };
      }

      const html = await response.text();

      /*
       * Nesta primeira etapa estamos apenas validando
       * que conseguimos acessar a página pública.
       *
       * A extração dos perfis será feita no próximo passo,
       * depois que confirmarmos que a consulta funciona.
       */

      console.log(
        "[EscarlateFinder] Listou Achou consultado com sucesso.",
        {
          city,
          category: query.category ?? "",
          htmlSize: html.length,
        }
      );

      return {
        leads: [],
        sourceName: "Listou Achou",
      };
    } catch (error) {
      console.error(
        "[EscarlateFinder] Erro ao consultar Listou Achou:",
        error
      );

      return {
        leads: [],
        sourceName: "Listou Achou",
      };
    }
  },
};

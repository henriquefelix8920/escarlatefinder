"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowLeft,
  Search,
  MapPin,
  Database,
  Sparkles,
  ChevronRight,
  BriefcaseBusiness,
  Loader2,
} from "lucide-react";

import {
  searchSources,
  PublicLead,
} from "../lib/sources";

const categories = [
  {
    value: "profissionais",
    label: "Profissionais independentes",
  },
  {
    value: "fotografas",
    label: "Fotógrafas",
  },
  {
    value: "modelos",
    label: "Modelos",
  },
  {
    value: "beleza",
    label: "Beleza e estética",
  },
  {
    value: "outros",
    label: "Outros",
  },
];

function scoreClass(score: number) {
  if (score >= 85) return "high";
  if (score >= 70) return "medium";
  return "low";
}

export default function ProspectPage() {
  const [city, setCity] = useState("");
  const [category, setCategory] =
    useState("profissionais");

  const [searched, setSearched] = useState(false);
  const [loading, setLoading] = useState(false);

  const [results, setResults] = useState<PublicLead[]>([]);

  const [sourcesUsed, setSourcesUsed] =
    useState<string[]>([]);

  async function handleSearch() {
    setLoading(true);

    try {
      const result = await searchSources({
        city,
        category,
      });

      setResults(result.leads);
      setSourcesUsed(result.sourcesUsed);
      setSearched(true);
    } catch (error) {
      console.error(
        "Erro ao executar busca:",
        error
      );

      setResults([]);
      setSourcesUsed([]);
      setSearched(true);
    } finally {
      setLoading(false);
    }
  }

  const selectedCategory =
    categories.find(
      (item) => item.value === category
    )?.label ?? "Profissionais independentes";

  return (
    <main className="sourcesPage">
      <div className="sourcesContainer">
        <header className="sourcesHeader">
          <div>
            <Link
              href="/"
              className="backButton"
            >
              <ArrowLeft size={16} />
              Voltar ao dashboard
            </Link>

            <span className="eyebrow">
              ESCARLATEFINDER / PROSPECÇÃO
            </span>

            <h1>Encontrar leads</h1>

            <p>
              Pesquise oportunidades e encontre
              profissionais com presença digital, mas
              sem site próprio identificado.
            </p>
          </div>
        </header>

        <section className="sourcesIntro">
          <div className="introIcon">
            <Sparkles size={22} />
          </div>

          <div>
            <strong>
              Central de prospecção
            </strong>

            <span>
              Você pesquisa. O EscarlateFinder
              organiza. A decisão de abordar
              continua sendo sua.
            </span>
          </div>
        </section>

        <section className="searchPanel">
          <div className="searchField">
            <MapPin size={19} />

            <input
              type="text"
              placeholder="Digite uma cidade..."
              value={city}
              onChange={(event) =>
                setCity(event.target.value)
              }
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  handleSearch();
                }
              }}
            />
          </div>

          <div className="searchField">
            <BriefcaseBusiness size={19} />

            <select
              value={category}
              onChange={(event) =>
                setCategory(
                  event.target.value
                )
              }
              style={{
                width: "100%",
                background: "transparent",
                border: "none",
                outline: "none",
                color: "inherit",
                font: "inherit",
              }}
            >
              {categories.map((item) => (
                <option
                  key={item.value}
                  value={item.value}
                >
                  {item.label}
                </option>
              ))}
            </select>
          </div>

          <button
            className="searchButton"
            onClick={handleSearch}
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader2
                  size={18}
                  className="spin"
                />
                Pesquisando...
              </>
            ) : (
              <>
                <Search size={18} />
                Encontrar leads
              </>
            )}
          </button>
        </section>

        {!searched && (
          <section className="sourcesGrid">
            <article className="sourceCard">
              <div className="sourceCardTop">
                <div className="sourceIcon">
                  <Search size={17} />
                </div>

                <div className="sourceStatus demo">
                  <Sparkles size={14} />
                  PRONTO
                </div>
              </div>

              <h2>
                Comece uma busca
              </h2>

              <p>
                Escolha uma cidade e um segmento
                para iniciar uma pesquisa de
                oportunidades.
              </p>

              <div className="sourceMeta">
                <div>
                  <span>OBJETIVO</span>
                  <strong>LEADS</strong>
                </div>

                <div>
                  <span>CRITÉRIO</span>
                  <strong>SEM SITE</strong>
                </div>

                <div>
                  <span>DECISÃO</span>
                  <strong>MANUAL</strong>
                </div>
              </div>
            </article>
          </section>
        )}

        {searched && (
          <section className="leadsSection">
            <div className="sectionHeader">
              <div>
                <span className="eyebrow">
                  RESULTADOS
                </span>

                <h3>
                  Oportunidades
                  {city
                    ? ` em ${city}`
                    : ""}
                </h3>

                <p
                  style={{
                    marginTop: "6px",
                    color:
                      "rgba(255,255,255,0.5)",
                    fontSize: "13px",
                  }}
                >
                  Segmento:{" "}
                  {selectedCategory}
                </p>
              </div>

              <span
                style={{
                  color:
                    "rgba(255,255,255,0.5)",
                  fontSize: "13px",
                }}
              >
                {results.length} encontrados
              </span>
            </div>

            {sourcesUsed.length > 0 && (
              <div
                style={{
                  marginBottom: "18px",
                  color:
                    "rgba(255,255,255,0.45)",
                  fontSize: "12px",
                }}
              >
                Fonte utilizada:{" "}
                {sourcesUsed.join(", ")}
              </div>
            )}

            {results.length === 0 && (
              <div className="sourceCard">
                <Database size={20} />

                <h2>
                  Nenhum lead encontrado
                </h2>

                <p>
                  O motor não encontrou
                  oportunidades para esta busca.
                </p>
              </div>
            )}

            <div className="leadsList">
              {results.map((lead) => (
                <article
                  className="leadCard"
                  key={lead.id}
                >
                  <div className="leadAvatar">
                    {lead.name.charAt(0)}
                  </div>

                  <div className="leadMain">
                    <div className="leadTitle">
                      <h4>
                        {lead.name}
                      </h4>

                      <span
                        className={`priority ${scoreClass(
                          lead.score
                        )}`}
                      >
                        {lead.score >= 85
                          ? "ALTA PRIORIDADE"
                          : lead.score >=
                            70
                          ? "BOA OPORTUNIDADE"
                          : "OPORTUNIDADE"}
                      </span>
                    </div>

                    <div className="leadMeta">
                      <span>
                        <MapPin
                          size={13}
                        />
                        {lead.city}
                      </span>

                      {lead.instagram && (
                        <span>
                          Instagram
                        </span>
                      )}

                      {lead.whatsapp && (
                        <span>
                          WhatsApp
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="leadWebsite">
                    <span>
                      Site próprio
                    </span>

                    <strong
                      className={
                        lead.website
                          ? "yes"
                          : "no"
                      }
                    >
                      {lead.website
                        ? "Identificado"
                        : "Não identificado"}
                    </strong>
                  </div>

                  <div className="score">
                    <span>SCORE</span>
                    <strong>
                      {lead.score}
                    </strong>
                  </div>

                  <div className="leadActions">
                    <Link
                      href="/"
                      className="smallButton"
                      style={{
                        textDecoration:
                          "none",
                      }}
                    >
                      Ver perfil
                      <ChevronRight
                        size={15}
                      />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        <div
          className="sourcesFooter"
          style={{
            marginTop: "28px",
          }}
        >
          <Database size={15} />

          <span>
            O EscarlateFinder utiliza fontes
            habilitadas pelo motor de
            prospecção. A abordagem das leads
            é sempre manual.
          </span>
        </div>
      </div>
    </main>
  );
}

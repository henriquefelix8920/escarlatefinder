"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowLeft,
  Search,
  MapPin,
  Database,
  Sparkles,
  Users,
  ChevronRight,
} from "lucide-react";

const demoResults = [
  {
    id: "demo-1",
    name: "Ana Martins",
    city: "Uberlândia",
    score: 92,
    instagram: "@anamartins",
    website: false,
    photos: 28,
  },
  {
    id: "demo-2",
    name: "Beatriz Silva",
    city: "Uberlândia",
    score: 86,
    instagram: "@beatrizsilva",
    website: false,
    photos: 21,
  },
  {
    id: "demo-3",
    name: "Camila Rocha",
    city: "Uberlândia",
    score: 78,
    instagram: "@camilarocha",
    website: false,
    photos: 17,
  },
];

function scoreClass(score: number) {
  if (score >= 85) return "high";
  if (score >= 70) return "medium";
  return "low";
}

export default function ProspectPage() {
  const [city, setCity] = useState("");
  const [searched, setSearched] = useState(false);

  function handleSearch() {
    setSearched(true);
  }

  return (
    <main className="sourcesPage">
      <div className="sourcesContainer">
        <header className="sourcesHeader">
          <div>
            <Link href="/" className="backButton">
              <ArrowLeft size={16} />
              Voltar ao dashboard
            </Link>

            <span className="eyebrow">
              ESCARLATEFINDER / PROSPECÇÃO
            </span>

            <h1>Encontrar leads</h1>

            <p>
              Pesquise oportunidades e encontre profissionais
              com presença digital, mas sem site próprio
              identificado.
            </p>
          </div>
        </header>

        <section className="sourcesIntro">
          <div className="introIcon">
            <Sparkles size={22} />
          </div>

          <div>
            <strong>Central de prospecção</strong>

            <span>
              Você pesquisa. O EscarlateFinder organiza.
              A decisão de abordar continua sendo sua.
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

          <select defaultValue="public">
            <option value="public">
              Fontes públicas
            </option>

            <option value="demo">
              Demonstração
            </option>
          </select>

          <button
            className="searchButton"
            onClick={handleSearch}
          >
            <Search size={18} />
            Encontrar leads
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

              <h2>Comece uma busca</h2>

              <p>
                Digite uma cidade acima para iniciar uma
                pesquisa de oportunidades.
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
                  {city ? ` em ${city}` : ""}
                </h3>
              </div>

              <span
                style={{
                  color: "rgba(255,255,255,0.5)",
                  fontSize: "13px",
                }}
              >
                {demoResults.length} encontrados
              </span>
            </div>

            <div className="leadsList">
              {demoResults.map((lead) => (
                <article
                  className="leadCard"
                  key={lead.id}
                >
                  <div className="leadAvatar">
                    {lead.name.charAt(0)}
                  </div>

                  <div className="leadMain">
                    <div className="leadTitle">
                      <h4>{lead.name}</h4>

                      <span
                        className={`priority ${scoreClass(
                          lead.score
                        )}`}
                      >
                        {lead.score >= 85
                          ? "ALTA PRIORIDADE"
                          : "BOA OPORTUNIDADE"}
                      </span>
                    </div>

                    <div className="leadMeta">
                      <span>
                        <MapPin size={13} />
                        {lead.city}
                      </span>

                      <span>
                        Instagram
                      </span>

                      <span>
                        {lead.photos} fotos
                      </span>
                    </div>
                  </div>

                  <div className="leadWebsite">
                    <span>Site próprio</span>

                    <strong className="no">
                      Não identificado
                    </strong>
                  </div>

                  <div className="score">
                    <span>SCORE</span>
                    <strong>{lead.score}</strong>
                  </div>

                  <div className="leadActions">
                    <Link
                      href="/"
                      className="smallButton"
                      style={{
                        textDecoration: "none",
                      }}
                    >
                      Ver perfil
                      <ChevronRight size={15} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        <div
          className="sourcesFooter"
          style={{ marginTop: "28px" }}
        >
          <Database size={15} />

          <span>
            Nesta etapa estamos usando dados de demonstração.
            O próximo estágio será conectar uma fonte pública
            real ao mecanismo de prospecção.
          </span>
        </div>
      </div>
    </main>
  );
}

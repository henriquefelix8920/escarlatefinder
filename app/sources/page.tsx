"use client";

import {
  ArrowLeft,
  Database,
  Globe,
  KeyRound,
  CheckCircle2,
  Clock3,
  PauseCircle,
  ExternalLink,
  Sparkles,
} from "lucide-react";

import { sources } from "../lib/sources";

function statusInfo(status: string) {
  switch (status) {
    case "connected":
      return {
        label: "CONECTADA",
        className: "connected",
        icon: <CheckCircle2 size={14} />,
      };

    case "available":
      return {
        label: "DISPONÍVEL",
        className: "available",
        icon: <Globe size={14} />,
      };

    case "disabled":
      return {
        label: "INATIVA",
        className: "disabled",
        icon: <PauseCircle size={14} />,
      };

    default:
      return {
        label: "DEMONSTRAÇÃO",
        className: "demo",
        icon: <Sparkles size={14} />,
      };
  }
}

function typeInfo(type: string) {
  switch (type) {
    case "api":
      return {
        label: "API",
        icon: <KeyRound size={14} />,
      };

    case "public":
      return {
        label: "FONTE PÚBLICA",
        icon: <Globe size={14} />,
      };

    default:
      return {
        label: "MANUAL",
        icon: <Database size={14} />,
      };
  }
}

export default function SourcesPage() {
  return (
    <main className="sourcesPage">
      <div className="sourcesContainer">
        <header className="sourcesHeader">
          <div>
            <a href="/" className="backButton">
              <ArrowLeft size={16} />
              Voltar ao dashboard
            </a>

            <span className="eyebrow">
              ESCARLATEFINDER / SISTEMA
            </span>

            <h1>Fontes</h1>

            <p>
              Gerencie as origens utilizadas pelo EscarlateFinder
              para encontrar novas oportunidades.
            </p>
          </div>
        </header>

        <section className="sourcesIntro">
          <div className="introIcon">
            <Sparkles size={22} />
          </div>

          <div>
            <strong>Motor de prospecção</strong>

            <span>
              As fontes são independentes do CRM. Isso permite
              adicionar novas integrações sem alterar a estrutura
              das leads.
            </span>
          </div>
        </section>

        <section className="sourcesGrid">
          {sources.map((source) => {
            const status = statusInfo(source.status);
            const type = typeInfo(source.type);

            return (
              <article
                className="sourceCard"
                key={source.id}
              >
                <div className="sourceCardTop">
                  <div className="sourceIcon">
                    {type.icon}
                  </div>

                  <div
                    className={`sourceStatus ${status.className}`}
                  >
                    {status.icon}
                    {status.label}
                  </div>
                </div>

                <h2>{source.name}</h2>

                <p>{source.description}</p>

                <div className="sourceMeta">
                  <div>
                    <span>TIPO</span>
                    <strong>{type.label}</strong>
                  </div>

                  <div>
                    <span>LEADS</span>
                    <strong>{source.leadsFound}</strong>
                  </div>

                  <div>
                    <span>ÚLTIMA COLETA</span>

                    <strong>
                      {source.lastCollection ?? "Nunca"}
                    </strong>
                  </div>
                </div>

                <div className="sourceActions">
                  <button
                    className="sourceButton"
                    disabled={
                      source.status === "disabled"
                    }
                  >
                    <ExternalLink size={15} />
                    Abrir fonte
                  </button>

                  <button
                    className="sourceButton primary"
                    disabled={
                      source.status !== "available"
                    }
                  >
                    <Globe size={15} />
                    Configurar
                  </button>
                </div>
              </article>
            );
          })}
        </section>

        <footer className="sourcesFooter">
          <Clock3 size={15} />

          <span>
            O EscarlateFinder somente deverá automatizar fontes
            cuja utilização esteja permitida pelas respectivas
            condições de uso ou por autorização adequada.
          </span>
        </footer>
      </div>
    </main>
  );
}

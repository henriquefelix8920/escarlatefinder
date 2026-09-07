"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock3,
  Database,
  Users,
  Sparkles,
  RefreshCw,
} from "lucide-react";

const demoLeads = [
  {
    name: "Ana Martins",
    city: "Uberlândia",
    score: 92,
    status: "Alta prioridade",
  },
  {
    name: "Beatriz Silva",
    city: "Uberaba",
    score: 86,
    status: "Alta prioridade",
  },
  {
    name: "Camila Rocha",
    city: "Frutal",
    score: 78,
    status: "Boa oportunidade",
  },
  {
    name: "Juliana Alves",
    city: "Ituiutaba",
    score: 71,
    status: "Boa oportunidade",
  },
];

export default function DemoSourcePage() {
  return (
    <main className="dashboard">
      <aside className="sidebar">
        <div className="brand">
          <div className="brandMark">✦</div>

          <div>
            <div className="brandName">ESCARLATE</div>
            <div className="brandFinder">FINDER</div>
          </div>
        </div>

        <div className="sidebarSection">
          <span className="sectionLabel">FONTE</span>

          <Link href="/sources" className="navItem">
            <ArrowLeft size={18} />
            Voltar para Fontes
          </Link>

          <div className="navItem active">
            <Database size={18} />
            Demonstração
          </div>
        </div>

        <div className="sidebarBottom">
          <div className="scarletSymbol">☾</div>

          <div>
            <strong>EscarlateFinder</strong>
            <span>Lead Intelligence</span>
          </div>
        </div>
      </aside>

      <section className="content">
        <header className="topbar">
          <div>
            <span className="eyebrow">FONTE DE PROSPECÇÃO</span>
            <h1>Modo demonstração</h1>
          </div>

          <div className="topActions">
            <div className="statusOnline">
              <span />
              Fonte ativa
            </div>
          </div>
        </header>

        <section className="hero">
          <div className="heroContent">
            <span className="heroKicker">
              <Sparkles size={14} />
              DEMONSTRAÇÃO
            </span>

            <h2>
              Uma amostra do
              <br />
              <span>motor de prospecção.</span>
            </h2>

            <p>
              Esta fonte permite testar o funcionamento do
              EscarlateFinder sem depender de uma conexão externa.
              Os leads abaixo são dados de demonstração.
            </p>
          </div>

          <div className="heroSymbol">
            <div className="symbolRing ringOne" />
            <div className="symbolRing ringTwo" />
            <span>✦</span>
          </div>
        </section>

        <section className="statsGrid">
          <div className="statCard">
            <div className="statIcon">
              <Users size={19} />
            </div>

            <div>
              <span>Leads coletados</span>
              <strong>{demoLeads.length}</strong>
              <small>dados de demonstração</small>
            </div>
          </div>

          <div className="statCard featured">
            <div className="statIcon">
              <CheckCircle2 size={19} />
            </div>

            <div>
              <span>Fonte</span>
              <strong>Ativa</strong>
              <small>pronta para teste</small>
            </div>
          </div>

          <div className="statCard">
            <div className="statIcon">
              <Clock3 size={19} />
            </div>

            <div>
              <span>Última coleta</span>
              <strong>Agora</strong>
              <small>execução manual</small>
            </div>
          </div>

          <div className="statCard">
            <div className="statIcon">
              <Database size={19} />
            </div>

            <div>
              <span>Tipo</span>
              <strong>Manual</strong>
              <small>fonte de teste</small>
            </div>
          </div>
        </section>

        <section className="workspace">
          <div className="sectionHeader">
            <div>
              <span className="eyebrow">FONTE</span>
              <h3>Informações da coleta</h3>
            </div>

            <button className="viewAll">
              <RefreshCw size={16} />
              Coletar novamente
            </button>
          </div>

          <div className="searchPanel">
            <div className="searchField">
              <Database size={19} />

              <input
                value="Modo demonstração"
                readOnly
              />
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "0 18px",
                color: "rgba(255,255,255,0.6)",
                fontSize: "14px",
              }}
            >
              <CheckCircle2 size={17} />
              Fonte disponível
            </div>

            <Link
              href="/"
              className="searchButton"
              style={{
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Enviar para prospecção
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>

        <section className="leadsSection">
          <div className="sectionHeader">
            <div>
              <span className="eyebrow">DADOS COLETADOS</span>
              <h3>Leads desta fonte</h3>
            </div>

            <span
              style={{
                color: "rgba(255,255,255,0.5)",
                fontSize: "13px",
              }}
            >
              {demoLeads.length} registros
            </span>
          </div>

          <div className="leadsList">
            {demoLeads.map((lead) => (
              <article className="leadCard" key={lead.name}>
                <div className="leadAvatar">
                  {lead.name.charAt(0)}
                </div>

                <div className="leadMain">
                  <div className="leadTitle">
                    <h4>{lead.name}</h4>

                    <span className="priority high">
                      {lead.status}
                    </span>
                  </div>

                  <div className="leadMeta">
                    <span>{lead.city}</span>
                    <span>Fonte demonstração</span>
                  </div>
                </div>

                <div className="leadWebsite">
                  <span>Origem</span>
                  <strong className="yes">Demonstração</strong>
                </div>

                <div className="score">
                  <span>SCORE</span>
                  <strong>{lead.score}</strong>
                </div>

                <div className="leadActions">
                  <Link
                    href="/"
                    className="smallButton"
                    style={{ textDecoration: "none" }}
                  >
                    Ver lead
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className="drawerFooter" style={{ marginTop: "28px" }}>
          <Database size={15} />

          <span>
            Esta é uma fonte de demonstração. Nenhuma coleta
            externa é realizada nesta etapa.
          </span>
        </div>
      </section>
    </main>
  );
}

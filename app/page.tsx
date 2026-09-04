"use client";

import { useState } from "react";
import {
  Search,
  Users,
  Flame,
  MessageCircle,
  TrendingUp,
  ExternalLink,
  ChevronRight,
  Sparkles,
  MapPin,
  Instagram,
  MoreHorizontal,
} from "lucide-react";

const leads = [
  {
    name: "Ana Martins",
    city: "Uberlândia",
    score: 92,
    website: false,
    photos: 28,
  },
  {
    name: "Bella Andrade",
    city: "Uberaba",
    score: 84,
    website: false,
    photos: 19,
  },
  {
    name: "Laura Costa",
    city: "Franca",
    score: 76,
    website: false,
    photos: 15,
  },
  {
    name: "Maya Oliveira",
    city: "Ribeirão Preto",
    score: 68,
    website: true,
    photos: 12,
  },
];

function scoreClass(score: number) {
  if (score >= 85) return "high";
  if (score >= 70) return "medium";
  return "low";
}

export default function Home() {
  const [search, setSearch] = useState("");

  const filteredLeads = leads.filter((lead) =>
    `${lead.name} ${lead.city}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

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
          <span className="sectionLabel">MENU</span>

          <button className="navItem active">
            <TrendingUp size={18} />
            Dashboard
          </button>

          <button className="navItem">
            <Users size={18} />
            Leads
            <span className="navBadge">127</span>
          </button>

          <button className="navItem">
            <Flame size={18} />
            Interessantes
            <span className="navBadge">34</span>
          </button>

          <button className="navItem">
            <MessageCircle size={18} />
            Abordados
          </button>
        </div>

        <div className="sidebarSection">
          <span className="sectionLabel">SISTEMA</span>

          <button className="navItem">
            <Search size={18} />
            Prospecção
          </button>

          <button className="navItem">
            <Instagram size={18} />
            Fontes
          </button>
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
            <span className="eyebrow">CENTRAL DE PROSPECÇÃO</span>
            <h1>Dashboard</h1>
          </div>

          <div className="topActions">
            <div className="statusOnline">
              <span />
              Sistema online
            </div>

            <button className="iconButton">
              <MoreHorizontal size={20} />
            </button>
          </div>
        </header>

        <section className="hero">
          <div className="heroContent">
            <span className="heroKicker">
              <Sparkles size={14} />
              INTELLIGENCE
            </span>

            <h2>
              Encontre oportunidades.
              <br />
              <span>Você decide quem abordar.</span>
            </h2>

            <p>
              Descubra profissionais, identifique oportunidades digitais e
              organize seus melhores leads em um único lugar.
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
              <span>Leads encontrados</span>
              <strong>127</strong>
              <small>+18 esta semana</small>
            </div>
          </div>

          <div className="statCard featured">
            <div className="statIcon">
              <Flame size={19} />
            </div>

            <div>
              <span>Alta prioridade</span>
              <strong>34</strong>
              <small>27% dos leads</small>
            </div>
          </div>

          <div className="statCard">
            <div className="statIcon">
              <MessageCircle size={19} />
            </div>

            <div>
              <span>Abordados</span>
              <strong>17</strong>
              <small>6 responderam</small>
            </div>
          </div>

          <div className="statCard">
            <div className="statIcon">
              <TrendingUp size={19} />
            </div>

            <div>
              <span>Pipeline potencial</span>
              <strong>R$ 4.985</strong>
              <small>5 oportunidades</small>
            </div>
          </div>
        </section>

        <section className="workspace">
          <div className="sectionHeader">
            <div>
              <span className="eyebrow">PROSPECÇÃO</span>
              <h3>Encontrar novos leads</h3>
            </div>
          </div>

          <div className="searchPanel">
            <div className="searchField">
              <MapPin size={19} />

              <input
                placeholder="Digite uma cidade..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <select defaultValue="todas">
              <option value="todas">Todas as fontes</option>
              <option>Vitrine</option>
              <option>JobModel</option>
              <option>OfertaHot</option>
            </select>

            <button className="searchButton">
              <Search size={18} />
              Encontrar leads
            </button>
          </div>
        </section>

        <section className="leadsSection">
          <div className="sectionHeader">
            <div>
              <span className="eyebrow">OPORTUNIDADES</span>
              <h3>Leads recentes</h3>
            </div>

            <button className="viewAll">
              Ver todos
              <ChevronRight size={16} />
            </button>
          </div>

          <div className="leadsList">
            {filteredLeads.map((lead) => (
              <article className="leadCard" key={lead.name}>
                <div className="leadAvatar">
                  {lead.name.charAt(0)}
                </div>

                <div className="leadMain">
                  <div className="leadTitle">
                    <h4>{lead.name}</h4>

                    <span className={`priority ${scoreClass(lead.score)}`}>
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
                      <Instagram size={13} />
                      Instagram
                    </span>

                    <span>{lead.photos} fotos</span>
                  </div>
                </div>

                <div className="leadWebsite">
                  <span>Site próprio</span>

                  <strong className={lead.website ? "yes" : "no"}>
                    {lead.website ? "Identificado" : "Não identificado"}
                  </strong>
                </div>

                <div className="score">
                  <span>SCORE</span>
                  <strong>{lead.score}</strong>
                </div>

                <div className="leadActions">
                  <button className="smallButton">
                    <ExternalLink size={15} />
                    Perfil
                  </button>

                  <button className="smallButton primary">
                    Interessante
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}

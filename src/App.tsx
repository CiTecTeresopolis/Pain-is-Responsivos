import "./App.css";
import { useState } from "react";

function App() {
  const [filterOpen, SetFilterOpen] = useState(false);
  const [categoryFilter, SetCategoryFilter] = useState("Todos");

  const paineis = [
    {
      id: 1,
      categoria: "Defesa Civil",
      titulo: "Relatório de Atendimentos e Vistorias",
      descricao:
        "Painel Responsivo do Relatório de Atendimentos e Vistorias da Defesa Civil.",
      autor: "Defesa Civil",
      data: "26 de agosto de 2025",
      capa: "/defesa-civil.png",
      link: "https://dashboard-defesa-civil.vercel.app/",
      cor: "#EE6B3A",
    },
    {
      id: 2,
      categoria: "Assistência Social",
      titulo: "Equipamentos de Proteção Social",
      descricao:
        "Painel Responsivo dos Equipamentos de Proteção Social da Assitência Social.",
      autor: "Assistência Social",
      data: "26 de agosto de 2025",
      capa: "/equipamentos-protecao-social.png",
      link: "https://equipamentos-protecao-social.vercel.app/",
      cor: "#128C7E",
    },
    {
      id: 3,
      categoria: "Assistência Social",
      titulo: "Conselhos Tutelares",
      descricao:
        "Painel de Abrangência do Conselhos Tutelares da Assitência Social.",
      autor: "Assistência Social",
      data: "26 de agosto de 2025",
      capa: "/conselhos-tutelares.png",
      link: "https://conselhos-tutelares.vercel.app/",
      cor: "#128C7E",
    },
    {
      id: 4,
      categoria: "Saúde",
      titulo: "Mapa das Unidades de Saúde",
      descricao: "Mapa Responsivo das Unidades de Saúde do Município.",
      autor: "Ciência e Tecnologia",
      data: "1 de setembro de 2025",
      capa: "/mapa-unidades-saude.png",
      link: "https://mapa-unidades-de-saude.vercel.app/",
      cor: "#009BE5",
    },
    {
      id: 5,
      categoria: "Segurança Pública",
      titulo: "Mapa dos Semáforos",
      descricao: "Mapa Responsivo com os Semáforos do Município.",
      autor: "Segurança Pública",
      data: "21 de outubro de 2025",
      capa: "/mapa-semaforos.png",
      link: "https://mapa-semaforos.vercel.app/",
      cor: "#588157",
    },
    {
      id: 6,
      categoria: "Assistência Social",
      titulo: "Aluguel Social - Público Atendido 2025",
      descricao:
        "Análise do Perfil do Público Atendido pelo Aluguel Social - 2025.",
      autor: "Assistência Social",
      data: "12 de novembro de 2025",
      capa: "/publico-atendido.png",
      link: "https://perfil-publico-aluguel-social.vercel.app/",
      cor: "#128C7E",
    },
    {
      id: 7,
      categoria: "Assistência Social",
      titulo: "Rede de Proteção de Direitos Humanos",
      descricao:
        "Informações sobre instituições de proteção social, serviços prestados e capacidade de atendimento. - 2025.",
      autor: "Assistência Social",
      data: "05 de dezembro de 2025",
      capa: "/rede-protecao.png",
      link: "https://rede-protecao-dh.vercel.app/",
      cor: "#128C7E",
    },
    {
      id: 8,
      categoria: "Assistência Social",
      titulo: "Perfil Beneficiários PROMAJ",
      descricao:
        "Perfil dos Beneficiários do Programa de Oportunidade de Primeiro Emprego e Capacitação de Jovens. - 2025.",
      autor: "Assistência Social",
      data: "15 de dezembro de 2025",
      capa: "/perfil-promaj.png",
      link: "https://dashboard-promaj.vercel.app/",
      cor: "#128C7E",
    },
    {
      id: 9,
      categoria: "Finanças e Orçamento",
      titulo: "Painel de Recursos Liberados",
      descricao:
        "Visualização dos Recursos Públicos Liberados no ano de 2025.",
      autor: "Finanças e Orçamento",
      data: "06 de janeiro de 2026",
      capa: "/recursos-liberados.png",
      link: "https://recursos-liberados-2025.vercel.app/",
      cor: "#4f30ffff",
    },
    {
      id: 10,
      categoria: "Assistência Social",
      titulo: "Perfil Beneficiários POT",
      descricao:
        "Perfil dos Beneficiários do Programa Operação Trabalho. - 2025.",
      autor: "Assistência Social",
      data: "08 de Janeiro de 2026",
      capa: "/perfil-pot.png",
      link: "https://dashboard-pot.vercel.app/",
      cor: "#128C7E",
    },
    {
      id: 10,
      categoria: "Administração",
      titulo: "Perfil dos Estagiários",
      descricao:
        "Perfil dos Estagiários Contratados pelo Município. - 2025.",
      autor: "Administração",
      data: "12 de Janeiro de 2026",
      capa: "/dashboard-estagiario.png",
      link: "https://dashboard-estagiarios.vercel.app/",
      cor: "#ffd000",
    },
    {
      id: 11,
      categoria: "Governo",
      titulo: "Emendas Parlamentares",
      descricao:
        "Emendas Parlamentares - 2025.",
      autor: "Governo",
      data: "04 de Fevereiro de 2026",
      capa: "/emendas.png",
      link: "https://emendas-parlamentares-teresopolis.vercel.app/",
      cor: "#00e1ff",
    },
    {
      id: 12,
      categoria: "Assistência Social",
      titulo: "Atendimentos CREAS",
      descricao:
        "Métricas dos atendimentos do CREAS. - 2025.",
      autor: "Assistência Social",
      data: "11 de fevereiro de 2026",
      capa: "/creas.png",
      link: "https://dashboard-creas-teresopolis.vercel.app/",
      cor: "#128C7E",
    },
    {
      id: 13,
      categoria: "Assistência Social",
      titulo: "Atendimentos CRAS",
      descricao:
        "Métricas dos atendimentos do CRAS. - 2025.",
      autor: "Assistência Social",
      data: "11 de fevereiro de 2026",
      capa: "/cras.png",
      link: "https://dashboard-cras-2025.vercel.app/",
      cor: "#128C7E",
    },
  ];

  const filterPainels = () => {
    if (categoryFilter == "Todos") {
      return paineis;
    } else {
      return paineis.filter((painel) => {
        return painel.categoria === categoryFilter;
      });
    }
  };

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="sub-header-1" style={{ alignItems: "flex-start" }}>
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="https://dados.teresopolis.rj.gov.br/"
          >
            ⭠ Retornar ao Portal
          </a>
        </div>
        <div className="sub-header">
          <h1>Dados Abertos</h1>
          <h3>Prefeitura de Teresópolis</h3>
        </div>
        <div className="sub-header-1" style={{ alignItems: "flex-end" }}>
          <div className="div-filter">
            <button
              onClick={() => SetFilterOpen(!filterOpen)}
              className="button-select"
            >
              {categoryFilter == "Todos"
                ? "Todas as Organizações"
                : categoryFilter}
            </button>
            {filterOpen && (
              <div className="list-select">
                <ul>
                  {["Todos", "Defesa Civil", "Assistência Social", "Saúde", "Segurança Pública", "Finanças e Orçamento", "Administração", "Governo", " "].map(
                    (org) => (
                      <li
                        key={org}
                        onClick={() => {
                          SetCategoryFilter(org);
                          SetFilterOpen(false);
                        }}
                        className=""
                      >
                        {org}
                      </li>
                    )
                  )}
                  <li className="">
                        
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/*<h1>Portal de Dados Abertos</h1>
        <h3 style={{ marginBottom: "-65px" }}>Prefeitura de Teresópolis</h3>

        <div className="div-filter">
          <button
            onClick={() => SetFilterOpen(!filterOpen)}
            className="button-select"
          >
            {categoryFilter == "Todos"
              ? "Todas as Organizações"
              : categoryFilter}
          </button>
          {filterOpen && (
            <div className="list-select">
              <ul>
                {["Todos", "Defesa Civil", "Assistência Social"].map((org) => (
                  <li
                    key={org}
                    onClick={() => {
                      SetCategoryFilter(org);
                      SetFilterOpen(false);
                    }}
                    className=""
                  >
                    {org}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>*/}
      </header>

      {/* Main Content */}
      <main className="main-content">
        <h2 className="section-title">Painéis Responsivos</h2>
        <div className="cards-grid">
          {filterPainels().reverse().map((painel) => (
            <a href={painel.link} key={painel.id} className="card">
              <div className="card-image">
                {/* Placeholder para imagem */}
                <div className="image-placeholder">
                  <img width={450} src={painel.capa} />
                </div>
              </div>
              <div className="card-content">
                <span className="card-categoria">{painel.categoria}</span>
                <h3 className="card-titulo">{painel.titulo}</h3>
                <p className="card-descricao">{painel.descricao}</p>
                <div className="card-footer">
                  <div className="card-autor">
                    <div
                      style={{ backgroundColor: painel.cor }}
                      className="autor-avatar"
                    ></div>
                    <span className="autor-nome">{painel.categoria}</span>
                  </div>
                  <span className="card-data">{painel.data}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-bottom">
          <p>
            Implementado pelo Departamento de Governança de Dados\Secretaria Municipal de Ciência e Tecnologia.
            cienciaetecnologia@teresopolis.rj.gov.br
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

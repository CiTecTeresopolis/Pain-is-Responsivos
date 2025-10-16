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
    },
  ];

  const filterPainels = () => {
    if (categoryFilter == "Todos") {
      return paineis;
    } else {
      return paineis.filter((painel) => {
        return painel.autor === categoryFilter;
      });
    }
  };

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <h1>Portal de Dados Abertos</h1>
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
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <h2 className="section-title">Painéis Responsivos</h2>
        <div className="cards-grid">
          {filterPainels().map((painel) => (
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
                    <div className="autor-avatar"></div>
                    <span className="autor-nome">{painel.autor}</span>
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
            Implementado pela Secretaria Municipal de Ciência e Tecnologia.
            cienciaetecnologia@teresopolis.rj.gov.br
          </p>
          <p>Atualizado por todos os Conselhos Municipais.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

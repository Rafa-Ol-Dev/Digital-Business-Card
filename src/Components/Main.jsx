import React from "react";
import Mail from "../images/mail-icon.png";
import LinkedIn from "../images/lin-icon.png";

export default function Main() {
  return (
    <main>
      <div className="sessao-1">
        <h1>Rafael Oliveira</h1>
        <h3>Desenvolvedor Frontend</h3>
        <div className="botoes">
          <a href="mailto:rafaoldev@gmail.com" className="botao-email">
            <span className="icone">
              <img src={Mail}></img>
            </span>
            <span className="texto-botao-1">Email</span>
          </a>
          <a href="https://www.linkedin.com/in/rafaelrdeoliveira/" className="botao-linkedin">
            <span className="icone">
              <img src={LinkedIn}></img>
            </span>
            <span className="texto-botao-2">LinkedIn</span>
          </a>
        </div>
      </div>

      <div className="sessao-2">
        <div className="sobre">
          <h2>Sobre</h2>
          <p className="texto-info">
            Sou um Dev Frontend em transição de carreira buscando minha primeira oportunidade na área de TI. Estou aprendendo React e desenvolvendo pequenos projetos solo para aprimorar minhas habilidades e me desenvolver como profissional.
          </p>
        </div>
        <div className="interesses">
          <h2>Interesses</h2>
          <p className="texto-info">
          "Sou um grande fã de esportes, principalmente futebol, NFL e Fórmula 1. Também sou fã de algumas sagas famosas, como O Senhor dos Anéis, Star Wars e  Harry Potter (os livros!). Ah, e tenho a alegria de ser pai de três crianças incríveis que me inspiram todos os dias."
          </p>
        </div>
      </div>
    </main>
  );
}

import styled, { createGlobalStyle } from "styled-components";
import LogoCarrosel from "../../../src/assets/wallpaper.png";

/* Import da fonte Albert Sans */
const googleFontImport = `@import url('https://fonts.googleapis.com/css2?family=Albert+Sans:wght@100..900&display=swap');`;

export const GlobalStyle = createGlobalStyle`
  ${googleFontImport};

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
    font-family: "Albert Sans", sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
    font-weight: 400;
    background-color: #fdf5f7;
  }
`;

/* Container de toda a seção */
export const ContainerPai = styled.section`
  min-height: 100vh;
  width: 100%;
  padding: 120px 40px 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-image: url(${LogoCarrosel});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
  }

  > * {
    position: relative;
    z-index: 1;
  }

  @media (max-width: 900px) {
    padding: 100px 24px 60px;
  }

  @media (max-width: 600px) {
    padding: 80px 16px 40px;
  }
`;

/* Título da sessão */
export const Title = styled.h1`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 60px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 700;
  color: #111;

  @media (max-width: 900px) {
    font-size: 2rem;
    margin-bottom: 40px;
  }

  @media (max-width: 600px) {
    font-size: 1.6rem;
    margin-bottom: 32px;
  }
`;

/* Wrapper de todos os cards */
export const Cards = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  gap: 30px;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 900px) {
    gap: 24px;
    flex-wrap: wrap;
    justify-content: center;
  }

  @media (max-width: 600px) {
    gap: 20px;
    flex-direction: column;
    flex-wrap: nowrap;
  }
`;

/* Card individual (moldura da foto + legenda) */
export const Card = styled.article`
  background-color: #fff;
  border-radius: 18px;
  border: 3px solid #e65a6a;
  padding: 14px 14px 10px;
  max-width: 380px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
  }

  @media (max-width: 900px) {
    max-width: 45%;
  }

  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

/* Imagem dentro do card */
export const AcoesImagem = styled.img`
  width: 21rem;
  height: auto;
  border-radius: 12px;
  object-fit: cover;
  display: block;
  margin-bottom: 8px;
`;

/* Legenda embaixo da imagem */
export const Legenda = styled.p`
  width: 100%;
  font-size: 0.9rem;
  text-align: center;
  color: #444;
  margin-top: 4px;
`;

/* Botão "Seja um voluntário" */
export const BotaoVoluntario = styled.button`
  margin-top: 48px;
  padding: 12px 32px;
  border-radius: 999px;
  border: none;
  background: linear-gradient(135deg, #f06b8a, #e23a60);
  color: #fff;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  letter-spacing: 0.04em;
  box-shadow: 0 10px 20px rgba(226, 58, 96, 0.3);
  transition: filter 0.2s ease, transform 0.2s ease;

  &:hover {
    filter: brightness(1.05);
    transform: translateY(-2px);
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

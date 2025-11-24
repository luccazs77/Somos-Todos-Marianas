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
    background-color: #fdf5f7;
  }
`;

/* ========================= CONTAINER PAI ============================= */

export const ContainerPai = styled.section`
  min-height: 84.2vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  background-image: url(${LogoCarrosel});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 40px 20px;
  position: relative;

  @media (max-width: 900px) {
    background-size: contain;
    background-position: top;
    padding: 100px 20px 40px;
  }

  @media (max-width: 600px) {
    background-size: contain;
    background-position: top;
    padding: 80px 16px 30px;
  }
`;

/* ========================= TÍTULO ============================= */

export const Title = styled.h1`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 60px;
  font-weight: 700;
  text-transform: uppercase;

  @media (max-width: 900px) {
    font-size: 2.2rem;
    margin-bottom: 40px;
  }

  @media (max-width: 600px) {
    font-size: 1.6rem;
    margin-bottom: 28px;
  }
`;

/* ========================= LISTA DE CARDS ============================= */

export const Cards = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  gap: 10px;
  width: 80%;

  /* Tablet */
  @media (max-width: 900px) {
    gap: 24px;
    flex-wrap: wrap;
    justify-content: center;
  }

  /* Mobile */
  @media (max-width: 600px) {
    gap: 20px;
    flex-direction: column;
    flex-wrap: nowrap;
    width: 100%;
  }
`;

/* ========================= CARD ============================= */

export const Card = styled.article`
  background-color: #fff;
  border-radius: 18px;
  border: 3px solid #e65a6a;
  padding: 14px;
  width: 80%; /* 🔥 VOLTOU AO JEITO ORIGINAL */
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
  }

  /* Tablet */
  @media (max-width: 900px) {
    max-width: 45%;
  }

  /* Mobile */
  @media (max-width: 600px) {
    max-width: 100%;
    width: 100%;
  }
`;

/* ========================= IMAGEM DO CARD ============================= */

export const AcoesImagem = styled.img`
  width: 100%;
  max-width: 320px;
  border-radius: 12px;
  object-fit: cover;
  margin-bottom: 10px;

  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

/* ========================= LEGENDA ============================= */

export const Legenda = styled.p`
  width: 100%;
  font-size: 0.95rem;
  text-align: center;
  color: #444;
  margin-top: 4px;
`;

/* ========================= BOTÃO VOLUNTÁRIO ============================= */

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
  box-shadow: 0 10px 20px rgba(226, 58, 96, 0.3);
  transition: 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

import styled from "styled-components";

export const BotaoTopoEstilo = styled.button`
  display: inline-flex; /* ajusta ao tamanho do conteúdo */
  align-items: center;
  justify-content: center;

  text-align: center;
  cursor: pointer;
  font-family: Roboto, sans-serif;
  writing-mode: horizontal-tb;
  text-orientation: mixed;

  height: 1.875rem;
  padding: 0 1.5rem; /* substitui a largura fixa */
  border-radius: 100px;
  overflow: hidden;

  color: #BD4A4C;
  background-color: #F3D8D6;
  border: 1px solid #BD4A4C;
  font-weight: 900;
  font-size: 14px;
  letter-spacing: 0;
  transition: all 0.3s ease;

  /* 🔑 Evita quebra e corte de texto */
  white-space: nowrap;
  word-break: keep-all;
  text-overflow: ellipsis;
  max-width: 100%;

  &:hover {
    color: #F3D8D6;
    background-color: #BD4A4C;
    transform: scale(1.05);
  }

   @media (max-width: 768px) {
    font-size: 13px;
    padding: 0 1.2rem;
  }

  @media (max-width: 400px) {
    font-size: 12px;
    padding: 0 1rem;
  }
`;

import styled from "styled-components";

export const BotaoVoluntariosEstilo = styled.button`
  display: inline-flex; /* permite ajustar ao conteúdo */
  align-items: center;
  justify-content: center;

  cursor: pointer;
  text-align: center;
  font-family: Roboto, sans-serif;
  writing-mode: horizontal-tb;
  text-orientation: mixed;

  height: 1.875rem;
  padding: 0 1.5rem; /* substitui width fixa */
  border-radius: 100px;
  overflow: hidden;

  color: #F3D8D6;
  background-color: #BD4A4C;
  border: 1px solid #F3D8D6;
  font-weight: 900;
  font-size: 14px;
  letter-spacing: 0;
  transition: all 0.3s ease;

  /* 🔑 ESSENCIAIS para evitar quebra */
  white-space: nowrap; /* impede o texto de quebrar */
  word-break: keep-all; /* mantém palavras inteiras */
  text-overflow: ellipsis; /* se for muito longo, coloca "..." */
  max-width: 100%; /* garante que não ultrapasse o container */

  &:hover {
    color: #BD4A4C;
    background-color: #F3D8D6;
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

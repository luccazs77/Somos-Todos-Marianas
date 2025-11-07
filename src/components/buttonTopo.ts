import styled from "styled-components";

export const BotaoTopoEstilo = styled.button`
  text-align: center;
  cursor: pointer;
  font-family: Roboto;
  writing-mode: horizontal-tb;
  text-orientation: mixed;
  height: 1.875rem;
  width: 8.125rem;
  max-width: 100%; /* evita quebrar em telas pequenas */
  white-space: nowrap; /* impede o texto de quebrar em 2 linhas */
  border-radius: 100px;
  overflow: hidden;
  color: #BD4A4C;
  border-color: #BD4A4C;
  background-color: #F3D8D6;
  font-weight: 900;
  font-size: 14px;
  border: 1px solid #BD4A4C;
  letter-spacing: 0;
  transition: 0.5s ease;

  &:hover {
    color: #F3D8D6;
    background-color: #BD4A4C;
  }


  @media (max-width: 768px) {
    font-size: 13px;
    width: auto;
    padding: 0 1rem;
  }

  @media (max-width: 400px) {
    font-size: 12px;
    padding: 0 0.8rem;
  }
`;

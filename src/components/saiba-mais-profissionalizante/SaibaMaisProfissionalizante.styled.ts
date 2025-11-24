import styled from "styled-components";
import TelaFundo from "../../../public/imagens/TelaFundo.png";

export const AllContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  background-image: url(${TelaFundo});
  background-size: cover;
  background-position: center;
  padding: 2rem 1rem;

  @media (max-width: 768px) {
    width: 95%;
    padding: 1rem;
  }
`;

export const TituloPrincipal = styled.h1`
  font-family: Roboto;
  text-align: center;
  margin-bottom: 2rem;
`;

export const DivContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  margin: 2rem 0rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const DivContainerTextos = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TituloPage = styled.h2`
  margin-bottom: 0.5rem;
  font-family: Roboto;
`;

export const TextosPage = styled.article`
  font-family: Roboto;
  line-height: 1.5;
  text-align: justify;
`;

export const AcaoBeneficente = styled.img`
  width: 30%;
  height: auto;
  border-radius: 10px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const CursoEducacao = styled.img`
  width: 30%;
  height: auto;
  border-radius: 10px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const CursoPolicia = styled.img`
  width: 30%;
  height: auto;
  border-radius: 10px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const AreaBotoes = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 3rem;
  padding-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
`;

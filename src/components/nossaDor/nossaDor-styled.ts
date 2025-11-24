import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 84.7vh;
  background-color: #A28181;
  color: #000000;
  font-family: "Poppins", sans-serif;
  padding: 20px;

  @media (max-width: 1024px) {
    min-height: 88vh;
  }

  @media (max-width: 768px) {
    min-height: 88vh;
  }

  @media (max-width: 480px) {
    min-height: 89.8vh;
  }
`;

export const DivContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  /* Mobile e Tablet → imagem em cima, texto no meio, botões embaixo */
  @media (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    gap: 30px;
    min-height: auto;
  }
`;

export const Texto = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  margin-left: 100px;
  order: 1;

  p {
    font-size: 22px;
    padding: 35px 0;
    opacity: 80%;
    line-height: 1.6;
    text-align: center;
  }

  @media (max-width: 1024px) {
    margin-left: 0;
    text-align: center;
    order: 2;

    p {
      max-width: 90%;
      margin: 0 auto;
      font-size: 18px;
    }
  }

  @media (max-width: 600px) {
    p {
      font-size: 17px;
      text-align: cover;
      line-height: 1.2;
    }
  }
`;

export const Textoh1 = styled.h1`
  font-size: 30px;
  font-weight: 700;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 36px;
  }

  @media (max-width: 480px) {
    font-size: 30px;
  }
`;

export const ImagemFoto = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-right: 8%;
  order: 2;

  img {
    width: 350px;
    height: auto;
    border-radius: 10px;
  }

  /* MOBILE → mostrar só uma imagem */
  @media (max-width: 768px) {
    order: 1;
    align-items: center;

    img {
      width: 260px;
    }

    /* esconde todas as imagens, MENOS a primeira */
    img:not(:first-child) {
      display: none;
    }
  }
`;


export const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;
  order: 3;

  @media (max-width: 1024px) {
    justify-content: center;
    order: 3;
  }
`;

export const Section = styled.div``;

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 88vh;
  align-items: center;
  justify-content: center;
  background-color: #a28181;
  padding: 80px 5%;
  gap: 5%;
  font-family: "Poppins", sans-serif;
  color: #010101;

   @media (max-width: 1024px) {
     max-height: 88vh;
     
  }

  @media (max-width: 768px) {
     max-height: 88vh;
  }

  @media (max-width: 480px) {
     min-height: 89.8vh;
  }
`;

/* 🔥 IMAGENS — SEMPRE PRIMEIRO NO MOBILE */
export const Imapre = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  order: 1;

  img {
    width: 450px;
    max-width: 600px;
    border-radius: 8px;
    
  }

  @media (max-width: 1024px) {
    img {
      max-width: 450px;
    }
  }

@media (max-width: 600px) {
    img {
      width: 220px;
      display: none;
    }
  }

  /* Desktop → Imagens ficam à esquerda */
  @media (min-width: 1025px) {
    order: 1;
  }
`;

/* Texto e botões */
export const ContentWrapper = styled.div`
  max-width: 700px;
  text-align: center;
  order: 2;

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

export const TextContent = styled.div`
  h1 {
    font-size: 33px;
    font-weight: bold;
    margin-bottom: 20px;
    text-align: center;
    line-height: 1.1;
  }

  p {
    font-size: 20px;
    margin-bottom: 20px;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 28px;
    }

    p {
      font-size: 16px;
    }
  }
`;

export const Textoprevencao = styled.div`
  margin-top: 20px;
  text-align: center;
  letter-spacing: 1px;
  color: #010101;
  font-size: 16px;
`;

export const Test = styled.div`
  margin-left: 23%;

  @media (max-width: 1024px) {
    margin-left: 0;
  }
`;

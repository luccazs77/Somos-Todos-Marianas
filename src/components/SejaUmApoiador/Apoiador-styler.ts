import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #A28181;
  font-family: "Poppins", sans-serif;
  width: 100%;
  min-height: 84.8vh;
  color: #010101;
  padding: 20px;

   @media (max-width: 768px) {
    min-height: 89.8vh;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;

  /* Ajusta espaçamento para tablets */
  @media (max-width: 1024px) {
    gap: 80px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  text-align: left;
  margin-top: -60px;

  @media (max-width: 768px) {
    max-width: 90%;
    text-align: center;
    margin-top: 0;
  }
`;

export const TextoH1 = styled.h1`
  font-family: "Roboto";
  font-size: 50px;
  margin-bottom: 20px;
  text-align: center;
  margin-top: 120px;

  @media (max-width: 768px) {
    font-size: 36px;
    margin-top: 40px;
  }

  @media (max-width: 480px) {
    font-size: 30px;
  }
`;

export const Subtitulo = styled.p`
  font-family: "Roboto";
  line-height: 1.6;
  font-size: 20px;

  margin-bottom: 20px;
  margin-top: -10px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const PixBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #E3C7C5;
  border: 4px solid #BD4A4C;
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 20px;
  width: 100%;
  max-width: 600px;

   @media (max-width: 480px) {
      display:none;
    }

  p {
    margin: 6px 0;
    color: #000;
    font-size: 16px;
    margin-left: 30px;
    font-family: "Roboto";

    @media (max-width: 480px) {
      margin-left: 10px;
      font-size: 14px;
    }
  }

  span {
    font-size: 18px;
    font-weight: bold;

    @media (max-width: 480px) {
      font-size: 16px;
    }
  }

  .Pix-row {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  img {
    width: 25px;
    height: 25px;
    margin-left: -10px;

    @media (max-width: 480px) {
      width: 20px;
      height: 20px;
      margin-left: 0;
    }
  }
`;

export const ImgQRC = styled.img`
  height: 25vh;
  border-radius: 8px;
  margin-top: 18%;
  margin-left: 50px;

  /* MOBILE: remover margem pra imagem não ficar lá embaixo */
  @media (max-width: 768px) {
    margin-top: 0;
    height: 30vh;
  }

  @media (max-width: 480px) {
    height: 32vh;
  }
`;

export const Button = styled.button`
  background-color: #BD4A4C;
  color: white;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  transition: 0.3s;
  width: fit-content;
  display: flex;
  justify-content: center;
  align-self: center; /* garante que no mobile fique centralizado */

  &:hover {
    background-color: #a13d3f;
  }

  @media (max-width: 480px) {
    padding: 10px 20px;
    font-size: 14px;
  }
`;

export const Butonn = styled.div`
   display: flex;
  justify-content: flex-start;
  width: 40%;
  margin-top: -5px;

`;

export const Ligt = styled.div`
  p {
    margin-left: 5px;

    @media (max-width: 480px) {
      margin-left: 0;
    }
  }
`;

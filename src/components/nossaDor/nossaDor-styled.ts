import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 88vh;
  background-color: #A28181;
  color: #000000;
  font-family: "Poppins", sans-serif;
  padding: 20px;
  

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

export const DivContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1400px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

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
    max-width: 550px;
    text-align: center;
  }

  @media (max-width: 1024px) {
    margin-left: 0;
    text-align: center;

    p {
      text-align: center;
      max-width: 90%;
      margin: 0 auto;
      font-size: 18px;
    }
  }

  @media (max-width: 600px) {
    p {
      font-size: 16px;
    }
  }
`;

export const Textoh1 = styled.h1`
  font-size: 18px;
  font-weight: 700;
  text-align: center;

  @media (max-width: 1024px) {
    text-align: center;
  }

  @media (max-width: 768px) {
    font-size: 36px;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 30px;
    text-align: center;
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

  @media (max-width: 1024px) {
    margin-right: 0;
    align-items: center;
    order: 2;

    img {
      width: 280px;
    }
  }

  @media (max-width: 600px) {
    img {
      width: 220px;
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
  }
`;

export const Section = styled.div``;

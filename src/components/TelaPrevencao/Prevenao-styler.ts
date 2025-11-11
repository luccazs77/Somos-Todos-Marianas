import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #a28181;
  font-family: "Poppins", sans-serif;
  width: 100%;
  color: #010101;  
  padding: 11px 0;
  height: 100%;
`;

export const Contai = styled.div`
  margin-top: 25px;
  display: flex;
  gap: 10px;
  justify-content: flex-start;
  flex-direction: row;

  @media (max-width: 1024px) {
    justify-content: center;
  }
`;


export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  max-width: 1200px;
  width: 100%;
  padding: 10px;
  flex-direction: column;
  margin-left: 10%;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 40px;
  }
`;

export const Imapre = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  margin-top: 30px;
  margin-left: 10%;

  img {
    width: 720px;
    max-width: 100%;
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    img {
      width: 90%;
    }
  }
`;

export const TextContent = styled.div`


  h1 {
     font-size: 42px; /* antes: 33px */
    font-weight: 700;
    margin-bottom: 25px;
    text-align: center;
    line-height: 1.2;

    @media (max-width: 1024px) {
      text-align: center;
      font-size: 36px;
    }

    @media (max-width: 768px) {
      font-size: 30px;
    }
  }

  p {
    font-size: 20px;
    line-height: 1.6;
    text-align: center;

    @media (max-width: 1024px) {
      text-align: center;
    }
  }
`;

export const Textoprevencao = styled.div`
  margin-top: 20px;
  letter-spacing: 0.5px;
  color: #010101;
  font-size: 18px;

  @media (max-width: 768px) {
    font-size: 16px;
  }


`;

export const Test = styled.div`
  margin-top: 25px;
  display: flex;
  gap: 20px;
  justify-content: flex-start;

  @media (max-width: 1024px) {
    justify-content: center;
  }
`;

import styled from "styled-components";

export const Img16 = styled.img`
  display: flex;
  justify-content: flex-start;
  border-radius: 4px;
  box-sizing: border-box;

  @media (min-width: 1440px) {
    width: 30%;
    height: 50%;
  }

  @media (max-width: 1024px) {
    width: 50%;
    
  }

  @media (max-width: 768px) {
    width: 70%;
    justify-content: center;
    margin: 0 auto;
  }

  @media (max-width: 400px) {
    width: 85%;
  }
`;

export const Img8 = styled.img`
  display: flex;
  justify-content: flex-end;
  border-radius: 5px;
  box-sizing: border-box;

  @media (min-width: 1440px) {
    width: 40%;
  }

  @media (max-width: 1024px) {
    width: 60%;
  }

  @media (max-width: 768px) {
    width: 80%;
    justify-content: center;
    margin: 0 auto;
  }

  @media (max-width: 400px) {
    width: 95%;
  }
`;

export const ImgFesta = styled.img`
  padding: 5% 3%;
  width: 95%;
  border-radius: 7px;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    width: 90%;
  }

  @media (max-width: 768px) {
    width: 85%;
  }

  @media (max-width: 400px) {
    width: 95%;
  }
`;

export const AllContainer = styled.body`
  background-color: #fbeeeC;
  box-sizing: border-box;
`;

export const TextosSobreNosInicio = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Albert Sans;
  box-sizing: border-box;

  @media (max-width: 768px) {
    align-items: center;
  }

  @media (max-width: 400px) {
    text-align: center;
  }
`;

export const SobreNos = styled.h1`
  color: #010101;
  padding: 3% 0% 4% 0%;
  text-align: justify;
  max-width: 70%;
  margin: 0 auto;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    max-width: 80%;
  }

  @media (max-width: 768px) {
    text-align: center;
    max-width: 90%;
  }

  @media (max-width: 400px) {
    font-size: 20px;
    padding: 6% 0;
  }
`;

export const Texto = styled.article`
  color: #010101;
  font-size: 16px;
  align-self: flex-start;
  padding: 0% 3%;
  text-align: left;
  font-family: 'Albert Sans', sans-serif;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    font-size: 15px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 0 5%;
    text-align: justify;
  }

  @media (max-width: 400px) {
    font-size: 13px;
    line-height: 1.4;
    padding: 0 8%;
  }
`;

export const Titulo = styled.h3`
  color: #111;
  font-size: 22px;
  align-self: flex-start;
  padding: 0% 0% 0% 3%;
  text-align: left;
  font-family: 'Albert Sans', sans-serif;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    font-size: 20px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
    padding-left: 5%;
  }

  @media (max-width: 400px) {
    font-size: 16px;
    text-align: center;
  }
`;

export const ContainerInicial = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0% 0% 2% 0%;
  box-sizing: border-box;
  margin-top: 1%;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

  @media (max-width: 768px) {
    gap: 1.5rem;
  }

  @media (max-width: 400px) {
    gap: 1rem;
  }
`;

export const ContainerFinal = styled.div`
  display: flex;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const TextosSobreNosFinal = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  @media (max-width: 768px) {
    align-items: center;
  }

  @media (max-width: 400px) {
    text-align: center;
  }
`;


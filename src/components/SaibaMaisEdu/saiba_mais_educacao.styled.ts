import styled from "styled-components";
import TelaFundo from "/imagens/back_ground.png"


export const ImagensAcoes = styled.img`
  padding-top: 3%;
  box-sizing: border-box;
  @media (max-width: 1024px) {
    display: none;
  }

  @media (max-width: 768px) {
    display: none;
  }

  @media (max-width: 400px) {
    width: 95%;
  }
`;

export const ImgAcao1 = styled.img`
  display: flex;
  justify-content: flex-start;
  border-radius: 4px;
  box-sizing: border-box;
  width: 40%;

  @media (max-width: 1024px) {
    width: 50%;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const VideoCasos = styled.img`
  display: flex;
  justify-content: flex-start;
  border-radius: 4px;
  box-sizing: border-box;
  width: 30%;
  height: 30%;
  padding-right: 3%;

  @media (max-width: 1024px) {

  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const UmGritoJustica = styled.h1`
  display: flex;
  font-family: Roboto;
  padding: 2% 0%;
  box-sizing: border-box;
  justify-content: center;
  text-align: center;
  color: #3b141bff;

  @media (max-width: 768px) {
    justify-content: center;
    text-align: center;
    max-width: 90%;
  }

  
`;

export const TextosIniciais = styled.article`
  display: flex;
  flex-direction: column;
  padding-top: 2%;
  text-align: justify;
  gap: 20px;
  font-family: Roboto;
  box-sizing: border-box;

`;

export const ListaInicial = styled.ul`
  font-family: Roboto;
`;

export const ItensListaInicial = styled.li`
  font-family: Roboto;
`;

export const TextoInicial = styled.article`
  font-family: Roboto;
`;

export const InfoInicial = styled.div`
  display: flex;
  justify-content: flex-end;
  box-sizing: border-box;

  @media (max-width: 768px) {
    justify-content: center;
    font-size: 16px;
  }
`;

export const TextosMeio = styled.div`
  box-sizing: border-box;
`;

export const TituloMeio = styled.h2`
  font-family: Roboto;
  padding: 3% 0%;
  box-sizing: border-box;
  text-align: center;
  color: #3b141bff;

  @media (max-width: 768px) {
    text-align: justify;
  }
`;

export const TextoMeio = styled.p`
  font-family: Roboto;
  text-align: justify;
  padding: 0% 1%;
  font-size: 18px;
  color: #3b141bff;
`;

export const ListaUl = styled.ul`
  padding: 1% 0%;
  box-sizing: border-box;
`;

export const ItensLista = styled.li`
  font-family: Roboto;
  padding: 1% 0%;
  text-align: justify;
  font-size: 18px;
  color: #3b141bff;
`

export const AllContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2%;
  box-sizing: border-box;
  padding: 1% 0%;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    gap: 3%;
  }
`;

export const ContainerFoto = styled.div`
  box-sizing: border-box;
`;

export const ContainerTexto = styled.div`
  box-sizing: border-box;
`;


export const BotoesContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2%;
  padding-top: 3%;
  box-sizing: border-box;



  @media (max-width: 768px) {
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
  }
  
`;

export const AllBody = styled.div`
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
  width: 80%;
  background-image: url(${TelaFundo});
`;

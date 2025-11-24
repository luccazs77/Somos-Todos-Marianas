import styled from "styled-components";

export const ContainerPai = styled.div`
  width: 100%;
  height: 84%;
  background-color: #f8f1f1ff;
  display: flex;
  flex-direction: column;
`;

export const ContainerMae = styled.div`
  width: 100%;
  /* height: 88vh; */
  height: 100%;
  display: flex; 
  overflow: hidden;

  @media (max-width: 900px) {
    flex-direction: column; 
    height: auto; 
  }
`;

export const BgLogo = styled.img`
  
  flex: 2; /* Ocupa 1 de 2 partes (50%) */
  
  height: 100%; 
  object-fit: cover;
  min-width: 0;

  @media (max-width: 900px) {
    width: 100%;
    height: auto;
    flex: none; 
  }
`;

export const FotoMariana = styled.img`
  height: 100%;
  object-fit: cover;
  min-width: 0;
  flex: 1;

  @media (max-width: 900px) {
    position: relative;
    width: 100%;
    height: auto;
  }
    @media  (max-width: 768px) {
     margin: 0 auto;
}
`;
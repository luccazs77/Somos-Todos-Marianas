import styled from "styled-components";

export const ContainerPai = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #fde7e7;
  display: flex;
  flex-direction: column;
  /* Removemos o align-items: center para o ContainerMae ter 100% da largura */
`;

export const ContainerMae = styled.div`
  width: 100%;
  /* Defina uma altura para o container. 
    Por exemplo, 85% da altura da tela (vh). 
    Ou use calc(100vh - 80px) se souber a altura do seu Header (ex: 80px).
    Vou usar 85vh como um valor padrão. Ajuste como precisar.
  */
  height: 87vh;
  display: flex; /* <-- Este é o comando mais importante! */
  overflow: hidden;

  /* Media query para telas menores (ex: 900px) */
  @media (max-width: 900px) {
    flex-direction: column; /* Empilha as imagens verticalmente */
    height: auto; /* Altura automática no mobile */
  }
`;

export const BgLogo = styled.img`
  /* Em vez de 'width: 100%', dizemos para ele ocupar METADE do espaço */
  flex: 2; /* Ocupa 1 de 2 partes (50%) */
  
  height: 100%; /* Ocupa 100% da altura do ContainerMae */
  object-fit: cover; /* Garante que a imagem preencha sem distorcer */
  min-width: 0; /* Boa prática para flexbox evitar que a imagem "estoure" */

  @media (max-width: 900px) {
    width: 100%; /* No mobile, volta a ter 100% de largura */
    height: auto;
    flex: none; /* Reseta o 'flex: 1' no mobile */
  }
`;

export const FotoMariana = styled.img`
  /* === REMOVA ISSO === */
  /* position: absolute; */
  /* right: 0; */
  /* top: 0; */
  /* z-index: 2; */

  /* === ADICIONE ISSO === */
  height: 100%;
  object-fit: cover;
  min-width: 0;
  flex: 1;

  @media (max-width: 900px) {
    /* Seu @media já estava quase certo, só limpando */
    position: relative;
    width: 100%;
    height: auto;
    flex: none; /* Reseta o 'flex: 1' no mobile */
  }
`;
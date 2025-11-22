// JusticaTransformacaoStyle.ts
import styled from "styled-components";

/* IFRAME DO VÍDEO */
export const VideoFrame = styled.iframe`
  width: 100%;
  aspect-ratio: 16 / 9;           /* mantém proporção */
  border: none;
  border-radius: 18px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.35);
  background: #000;
  outline: 3px solid #f18aa2;
  outline-offset: 4px;
  height: 31.25rem;
`;

/* CONTAINER GERAL (ABAIXO DO HEADER) */
export const Container = styled.main`
  display: flex;
  width: 100%;
  min-height: 100vh;              /* cresce com o conteúdo */
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 80px 16px 40px;
  background-color: #a28181;
  color: #000000;
  font-family: Roboto, sans-serif;

  @media (min-width: 900px) {
    padding: 100px 40px 60px;
  }
`;

/* BLOCO TEXTO + VÍDEO */
export const DivContainer = styled.section`
  display: flex;
  width: 100%;
  max-width: 85%;
  flex-direction: column;         /* mobile: coluna */
  align-items: center;
  justify-content: center;
  gap: 32px;

  @media (min-width: 900px) {
    flex-direction: row;          /* desktop: lado a lado */
    align-items: flex-start;
  }
`;

/* COLUNA DE TEXTO */
export const Texto = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  color: #ffffff;
  text-align: center;

  p {
    font-size: 1.05rem;
    padding: 24px 8px;
    opacity: 0.8;
    line-height: 1.6;
    text-align: left;
  }

  @media (min-width: 900px) {
    text-align: left;

    p {
      font-size: 1.7rem;
      padding: 35px 0;
    }
  }
`;

/* TÍTULO */
export const Textoh1 = styled.h1`
  font-size: 2.2rem;
  line-height: 1.2;
  margin: 0;

  @media (min-width: 900px) {
    font-size: 2.6rem;
  }
`;

/* COLUNA DO VÍDEO */
export const ImagemFoto = styled.div`
  width: 100%;
  max-width: 480px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 900px) {
    margin-left: 40px;
  }
`;

/* SE PRECISAR DE UMA SECTION AVULSA */
export const Section = styled.section`
  width: 100%;
`;

/* SÓ USE ESTE VIDEO SE FOR IMAGEM (NÃO É O PLAYER) */
export const Video = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
`;

// HeroButtonsStyles.ts

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 32px;
  justify-content: center;
  flex-wrap: wrap;           /* permite quebrar para linha de baixo no mobile */
`;

/* Base comum dos botões */
const BaseButton = styled.button`
  padding: 10px 32px;
  border-radius: 999px;      /* deixa formato de pílula */
  border: none;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  letter-spacing: 0.03em;
  font-family: inherit;
  transition: transform 0.15s ease, box-shadow 0.15s ease, filter 0.15s ease;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.18);

  &:hover {
    transform: translateY(-2px);
    filter: brightness(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
  }

  @media (max-width: 600px) {
    width: 100%;             /* no mobile ficam um embaixo do outro ocupando toda a largura */
    text-align: center;
  }
`;

/* Botão rosa claro: "Saiba mais" */
export const SecondaryButton = styled(BaseButton)`
  background: #f7b8c0;       /* rosa claro */
  color: #6a3a3a;            /* texto marrom-rosado */
`;

/* Botão rosa forte: "Seja um voluntário" */
export const PrimaryButton = styled(BaseButton)`
  background: linear-gradient(135deg, #f06b8a, #e23a60);
  color: #ffffff;
`;

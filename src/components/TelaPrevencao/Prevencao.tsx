import { Header } from "../Header/header2";
import {
  Container,
  DivContainer,
  Texto,
  Textoh1,
  ImagemFoto,
  VideoFrame,
  ButtonsWrapper,
  PrimaryButton,
  SecondaryButton,
} from "./PrevencaoStyle";

export function Prevencao() {
  const videoId = "bhsFknYk2V4";

  return (
    <>
      <Header /> 
      <Container>
        <DivContainer>
          <Texto>
            <Textoh1>
              Somos Todos Marianas: Um Grito por Justiça e Transformação Social
            </Textoh1>

            <p>
              Na tarde de 13 de novembro de 2016, o silêncio de São Luís foi
              quebrado por um grito que nunca deveria ter existido. Mariana
              Costa, uma jovem publicitária cheia de sonhos, teve sua vida
              brutalmente interrompida, vítima de feminicídio. Naquele momento,
              não sabíamos, mas o eco daquele grito iria se transformar em um
              movimento que mudaria para sempre a luta contra a violência de
              gênero no Maranhão...
            </p>

            <ButtonsWrapper>
              <SecondaryButton>Saiba mais</SecondaryButton>
              <PrimaryButton>Seja um voluntário</PrimaryButton>
            </ButtonsWrapper>
          </Texto>

          <ImagemFoto>
            <VideoFrame
              src={`https://www.youtube.com/embed/${videoId}`}
              title="Ação com crianças - SOMOS TODOS MARIANAS"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </ImagemFoto>
        </DivContainer>
      </Container>
    </>
  );
}

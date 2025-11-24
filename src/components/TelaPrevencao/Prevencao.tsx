import { ButtonLink } from "../../presentation/buttons/ButtonPreVol/ButtonPreVol";
import {
  Container,
  DivContainer,
  Texto,
  Textoh1,
  ImagemFoto,
  VideoFrame,
  ButtonsWrapper,
} from "./PrevencaoStyle";

export function Prevencao() {
  const videoId = "bhsFknYk2V4";

  return (
    <>
      <Container>
        <DivContainer>
          <Texto>
            <Textoh1>
              Somos Todos Marianas: Um Grito por Justiça e Transformação Social
            </Textoh1>

            <p>
              O projeto Somos Todos Marianas previne o feminicídio ao atuar com educação, acolhimento e conscientização nas escolas e comunidades. Ele ensina a reconhecer sinais de abuso, combate o machismo estrutural e oferece apoio às mulheres, criando uma rede de proteção que interrompe o ciclo de violência.
            </p>

            <ButtonsWrapper>
              <ButtonLink to="/saibaPrevencao" variant="outlined">
                  Saiba mais
              </ButtonLink>

              <ButtonLink to="/voluntario" variant="filled">
                  Seja um voluntário
              </ButtonLink>
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

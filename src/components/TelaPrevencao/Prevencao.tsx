<<<<<<< HEAD
'use client';
import Prevencao1 from "../../assets/Prevencao1.png"
import Prevencao2 from "../../assets/Prevencao2.png"
import { StyledButtonLink } from "../../presentation/buttons/ButtonPreVol/ButtonPre-styles";
import { ButtonLink } from "../../presentation/buttons/ButtonPreVol/ButtonPreVol";
import { Header } from "../../presentation/shared/Header1222/header";
import * as S from "./Prevenao-styler"
import { Link } from "react-router-dom";




export function Prevencao() {
    return(
       <S.Container>
        <Header/>
           <S.Pagprevencao>

             <S.Imapre>
            <img src={Prevencao1} alt="" />
            <img src={Prevencao2} alt="" />
            </S.Imapre>
=======
import { Header } from "../Header/header2";
import {
  Container,
  DivContainer,
  Texto,
  Textoh1,
  ImagemFoto,
  VideoFrame,
} from "./PrevencaoStyle";
import { ButtonsWrapper, PrimaryButton, SecondaryButton } from "./PrevencaoStyle";

export function Prevencao() {
  const videoId = "bhsFknYk2V4";
>>>>>>> Finalizacao

  return (
    <>
      <Header /> {/* componente já responsivo e separado */}
      <Container>
        <DivContainer>
          <Texto>
            <Textoh1>
              Somos Todos Marianas: Um Grito por Justiça e transformação Social
            </Textoh1>
            <p>Na tarde de 13 de novembro de 2016, o silêncio de São Luís foi quebrado por um grito que nunca deveria ter existido. Mariana Costa, uma jovem publicitária cheia de sonhos, teve sua vida brutalmente interrompida, vítima de feminicídio. Naquele momento, não sabíamos, mas o eco daquele grito iria se transformar em um movimento que mudaria para sempre a luta contra a violência de gênero no Maranhão...</p>
            <ButtonsWrapper>
              <SecondaryButton>Saiba mais</SecondaryButton>
              <PrimaryButton>Seja um voluntário</PrimaryButton>
            </ButtonsWrapper>
          </Texto>

<<<<<<< HEAD
                <h1>Profissionalizar para Todos os <br />
                    Futuros: quando o sonho coletivo se <br />
                    transforma em oportunidade real</h1>

                <S.Textoprevencao>
                    <p>Na tarde de 13 de novembro de 2016, o silêncio de São <br />
                        Luís foi quebrado por um grito que nunca deveria ter <br />
                        existido. Mariana Costa, uma jovem publicitária cheia de <br />
                        sonhos, teve sua vida brutalmente interrompida, vítima <br />
                        de feminicídio. Naquele momento, não sabíamos, mas o <br />
                        eco daquele grito iria se transformar em um movimento <br />
                        que mudaria para sempre a luta contra a violência de <br />
                        gênero no Maranhão...</p>
                </S.Textoprevencao>
                </S.TextContent>

                <S.Test>

                     <StyledButtonLink to="/sobre" $variant="outlined">
                        Saiba mais
                    </StyledButtonLink>

                    <StyledButtonLink to="/voluntario" $variant="filled">
                        Seja um voluntário
                    </StyledButtonLink>



                </S.Test>
                 
            </S.ContentWrapper>
     
           </S.Pagprevencao>
        </S.Container>   

    )
}
=======
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
>>>>>>> Finalizacao

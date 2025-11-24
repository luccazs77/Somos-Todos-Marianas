'use client';
import logo from "../../assets/PixQrCode.png";
import Pixlogo from "../../assets/PixIcon.png";
import * as S  from "./Apoiador-styler";
import { ButtonLink } from "../../presentation/buttons/ButtonPreVol/ButtonPreVol";

export function Apoiador() {
  return (
    <S.Container>
      <S.ContentWrapper>
        <S.TextContent>
          <S.TextoH1>Contribua e Seja um <br /> Doador</S.TextoH1>
          <S.Subtitulo>
            Como Sua Doação Faz a Diferença 
            Sua doação é mais do que um gesto; é um investimento direto na vida de 
            mulheres que precisam de apoio. Cada real doado é utilizado de forma 
            estratégica para maximizar o impacto e garantir que os recursos 
            cheguem a quem mais precisa. Priorizamos a eficiência e a transparência 
            em todas as etapas, desde a captação até a aplicação dos recursos.
          </S.Subtitulo>

          <S.PixBox>
            <p><span>PIX PARA DOAÇÕES:</span></p>
            <S.Ligt className="Pix-row">
              <img src={Pixlogo} alt="Logo Pix" />
              <p>Institutosomostodosmarianas@gmail.com</p>
            </S.Ligt>
            <p>
              Transforme sua responsabilidade social em ação concreta. <br />
              Juntos, podemos e vamos acabar com o feminicídio!
            </p>
          </S.PixBox>
         
         
        </S.TextContent>

        <S.ImgQRC src={logo} alt="QR Code para doações" />
         <S.Butonn>
               <ButtonLink to="/voluntario" variant="filled">
                  Seja um voluntário
                </ButtonLink>
          </S.Butonn>
      </S.ContentWrapper>
    </S.Container>
  );
}
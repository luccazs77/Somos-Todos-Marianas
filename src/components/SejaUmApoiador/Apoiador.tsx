'use client';
import logo from "../../assets/QRC.png";
import Pixlogo from "../../assets/PX.png";
import * as S  from "./Apoiador-styler";
import { Header } from "../../presentation/shared/Header/header";

export function Apoiador() {
  return (
    <S.Container>
      <Header />

      <S.ContentWrapper>
        <S.TextContent>
          <S.Title>Contribua e Seja um <br /> Doador</S.Title>
          <S.Subtitle>
            Como Sua Doação Faz a Diferença <br />
            Sua doação é mais do que um gesto; é um investimento direto na vida de <br /> 
            mulheres que precisam de apoio. Cada real doado é utilizado de forma <br /> 
            estratégica para maximizar o impacto e garantir que os recursos <br /> 
            cheguem a quem mais precisa. Priorizamos a eficiência e a transparência <br /> 
            em todas as etapas, desde a captação até a aplicação dos recursos.
          </S.Subtitle>

          <S.PixBox>
            <p><span>PIX PARA DOAÇÕES:</span></p>
            <div className="Pix-row">
              <img src={Pixlogo} alt="Logo Pix" />
              <p>Institutosomostodosmarianas@gmail.com</p>
            </div>
            <p>
              Transforme sua responsabilidade social em ação concreta. <br />
              Juntos, podemos e vamos acabar com o feminicídio!
            </p>
          </S.PixBox>
          <S.SecondaryButton>
               <S.ButtonGroup>Seja um voluntário</S.ButtonGroup>
          </S.SecondaryButton>
         
        </S.TextContent>

        <S.QRCodeImage src={logo} alt="QR Code para doações" />
      </S.ContentWrapper>
    </S.Container>
  );
}
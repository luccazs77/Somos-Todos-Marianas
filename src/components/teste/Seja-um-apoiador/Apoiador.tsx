'use client';
import logo from "../../../assets/QRC.jpg";
import Pixlogo from "../../../assets/PX.png"
import { Button, Container, PixBox, Subtitulo, TextContent, Textoh, TextoH1 } from "./Apoiador-styler";
import { ImgQRC } from "./Apoiador-styler";
export function Apoiador() {
  return (
    <Container>
      <TextContent>
        <TextoH1>Contribua e Seja um <br /> Doador</TextoH1>
        <Subtitulo>
          Como Sua Doação Faz a Diferença <br />
Sua doação é mais do que um gesto; é um investimento direto na vida de <br /> mulheres que precisam de apoio. Cada real doado é utilizado de forma <br /> estratégica para maximizar o impacto e garantir que os recursos <br /> cheguem a quem mais precisa. Priorizamos
 a eficiência e a transparência <br />em todas as etapas, desde a captação até a aplicação dos recursos.
        </Subtitulo>
        <PixBox>
          <p><span>PIX PARA DOAÇÕES:</span></p>
         <div className="Pix-row">
          <img src={Pixlogo} alt="" />
           <p>Institutosomostodosmarianas@gmail.com</p>
         </div>

          <p>Transforme sua responsabilidade social em ação concreta. <br />Juntos, podemos e vamos acabar com o feminicídio!</p>
        </PixBox>
        <Button>Seja um voluntário</Button>
      </TextContent>

      <div>
        <ImgQRC src={logo} alt="QR Code para doações" />
      </div>
    </Container>
  );
}

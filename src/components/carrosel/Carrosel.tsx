// src/pages/Acoes/index.tsx (por exemplo)
import React from "react";

// importa TODOS os styled components que você criou
import {
  ContainerPai,
  Title,
  Cards,
  Card,
  AcoesImagem,
  Legenda,
  BotaoVoluntario,
} from "./CarroselStyle"; // ajuste o caminho conforme seu projeto

// IMPORT das imagens dos cards
import foto1 from "../../../src/assets/AcaoCriancas.png";
import foto2 from "../../../src/assets/AcaoMulheres.png";
import foto3 from "../../../src/assets/AcaoPresentes.png";
import foto4 from "../../../src/assets/AcaoPcd.png";


const AcoesSection: React.FC = () => {
  // (opcional) array para facilitar manutenção dos cards
  const acoes = [
    {
      id: 1,
      imagem: foto1,
      alt: "Ação com crianças em evento",
      legenda: "Evento especial para crianças da comunidade.",
    },
    {
      id: 2,
      imagem: foto2,
      alt: "Encontro de mulheres em roda",
      legenda: "Encontro de mulheres para orientação e apoio.",
    },
    {
      id: 3,
      imagem: foto3,
      alt: "Distribuição de presentes",
      legenda: "Evento especial para crianças da comunidade.",
    },
    {
      id: 4,
      imagem: foto4,
      alt: "Ação com pessoas na cadeira de rodas",
      legenda: "Ação de inclusão social com cadeirantes.",
    },
  ];

  return (
    <ContainerPai>
      <Title>Ações dos Somos Todos Marianas</Title>

      <Cards>
        {acoes.map((acao) => (
          <Card key={acao.id}>
            <AcoesImagem src={acao.imagem} alt={acao.alt} />
            <Legenda>{acao.legenda}</Legenda>
          </Card>
        ))}
      </Cards>

      <BotaoVoluntario>Seja um voluntário</BotaoVoluntario>
    </ContainerPai>
  );
};

export default AcoesSection;

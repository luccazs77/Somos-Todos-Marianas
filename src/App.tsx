
// src/App.tsx
/*import React from "react";
import { GlobalStyle } from "../src/components/carrosel/CarroselStyle"; // ou de onde você declarou
import AcoesSection from "../src/components/carrosel/Carrosel";    // caminho até o arquivo TSX
import { Justica } from "./components/JusticaTransformacao/JusticaTransformacao";
import { MainHeader } from "../src/components/MainHeader/MainHeader";*/
import { Prevencao } from "./components/TelaPrevencao/Prevencao";
import { Header } from "./components/Header/header2";
import { VoluntarioDadosPessoais } from "./components/CadastroDadosPessoais/CadastroDadosPessoais";
import { VoluntarioInformacoesGerais } from "./components/CadastroInfoGerais/InfoGerais";
import { VoluntarioAreasInteresse } from "./components/CadastroAreaInteresse/AreaInteresse";
import { VoluntarioDisponibilidade } from "./components/CadastroDisponibilidade/Disponibilidade";
import { VoluntarioCertificado } from "./components/CadastroCertificado/Emissao";
import { VoluntarioDeclaracao } from "./components/CadastroTermos/Termos";
import AcoesSection from "./components/Carrosel/Carrosel";
import { MainHeader } from "./components/TelaInicio/MainHeader";




function App() {
  return (
    <>
    <MainHeader/>
   </>
  );
}

export default App;

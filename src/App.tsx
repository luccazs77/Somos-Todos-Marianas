import { Routes, Route } from "react-router-dom";
import { Header } from "./presentation/shared/Header/header";
import { Apoiador } from "./components/SejaUmApoiador/Apoiador";
import { MainHeader } from "./components/MainHeader/MainHeader";
import { Dor } from "./components/nossaDor/nossa-dor";
import { Prevencao } from "./components/TelaPrevencao/Prevencao";
import { SaibaMaisQuemSomos } from "./components/SaibaMaisQuemSomos/saiba-mais-quem-somos";
import { Contato } from "./components/contato/contato";


function App() {
  return (
    <>
      <Header />

     <Contato/>
    </>
  );
}

export default App;

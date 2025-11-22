import { Apoiador } from "./components/SejaUmApoiador/Apoiador";
import { Routes, Route } from "react-router-dom";
import { Header } from "./presentation/shared/Header/header";
import { Dor } from "./components/nossaDor/nossa-dor";
import { Contato } from "./components/contato/contato";
import { Prevencao } from "./components/TelaPrevencao/Prevencao";
import { MainHeader } from "./components/MainHeader/MainHeader";



function App() {
  return (

    <>
      <Header />
      <Routes>
        <Route path="/quem-somos" element={<Dor />} />
        <Route path="/" element={<MainHeader />} />
        <Route path="/inicio" element={<MainHeader />} />
        <Route path="/prevencao" element={<Prevencao />} />
        <Route path="/apoiador" element={<Apoiador />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </>

  );
}

export default App;

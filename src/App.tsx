import { Routes, Route } from "react-router-dom";
import { Header } from "./presentation/shared/Header/header";
import { Apoiador } from "./components/SejaUmApoiador/Apoiador";
import { MainHeader } from "./components/MainHeader/MainHeader";
import { Dor } from "./components/nossaDor/nossa-dor";
import { Prevencao } from "./components/TelaPrevencao/Prevencao";
import { SaibaMaisQuemSomos } from "./components/SaibaMaisQuemSomos/saiba-mais-quem-somos";


function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/inicio" element={<MainHeader />} />
        
        <Route path="/apoiador" element={<Apoiador />} />
        <Route path="/quem-somos" element={<Dor />} />
        <Route path="/prevencao" element={<Prevencao />} />
         <Route path="/sobre" element={<SaibaMaisQuemSomos/>} />
       
       

       quem-somos
      </Routes>
    </>
  );
}

export default App;

import { Header } from "./components/Header/header2";
import { Routes, Route } from "react-router-dom";
import { Apoiador } from "./components/SejaUmApoiador/Apoiador";
import { MainHeader } from "./components/TelaInicio/MainHeader";
import { Dor } from "./components/nossaDor/nossa-dor";
import AcoesSection from "./components/carrosel/Carrosel";
import { SejaVoluntario } from "./components/Seja Voluntário/SejaVoluntario";
import { Contato } from "./components/contato/contato";
import { VoluntarioDadosPessoais } from "./presentation/shared/form/CadastroDadosPessoais/CadastroDadosPessoais";
import { SaibaMaisQuemSomos } from "./components/SaibaMaisSobreNos/saiba_mais_quem_somos";
import { Prevencao } from "./components/TelaPrevencao/Prevencao";
import { SaibaMaisProfissionalizante } from "./components/SaibaMaisPrevenção/saibaprevencao";



function App() {
  return (
   <>
    <Header />
    <Routes>
      <Route path="/" element={<MainHeader />} />
      <Route path="/apoie" element={<Apoiador />} />
      <Route path="/sobre" element={<Dor />} />
      <Route path="/acoes" element={<AcoesSection />} />
      <Route path="/voluntario" element={<SejaVoluntario />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="/formulario" element={<VoluntarioDadosPessoais />} />
      <Route path="/sobrenos" element={<SaibaMaisQuemSomos />} />
      <Route path="/prevencao" element={<Prevencao />} />
      <Route path="/saibaPrevencao" element={<SaibaMaisProfissionalizante/>} />
     
    </Routes>
   </>

  );
}
AcoesSection
export default App;

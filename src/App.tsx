import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainHeader } from "./components/MainHeader/MainHeader";

// SUAS PÁGINAS
import { Dor } from "./components/nossaDor/nossa-dor";


function App() {
  return (
    <BrowserRouter>
      {/* HEADER FIXO */}
      <MainHeader />

      {/* ROTAS */}
      <Routes>
   
        <Route path="/nossa-dor" element={<Dor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

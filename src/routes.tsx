import { Routes, Route } from 'react-router-dom';

import { SaibaMaisQuemSomos } from './components/SaibaMaisQuemSomos/saiba-mais-quem-somos';
import { Apoiador } from './components/SejaUmApoiador/Apoiador';

// Criando componentes 


export function App() {
  return (
    <div>
      <Routes>
        <Route path="/quem-somos" element={<SaibaMaisQuemSomos/>} />
        <Route path="/" element={<Apoiador/>} />
     
      </Routes>
    </div>
  );
}
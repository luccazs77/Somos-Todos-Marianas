// src/App.tsx
import { Routes, Route } from "react-router-dom";
import { Apoiador } from "./components/SejaUmApoiador/Apoiador";


function App() {
  return (
    <Routes>
      <Route path="/seja-um-apoiador" element={<Apoiador />} />
      
    </Routes>
  );
}

export default App;

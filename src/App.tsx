import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/statics/navbar/Navbar";
import Footer from "./components/statics/footer/Footer";

import "./App.css";
import Home from "./paginas/home/Home";
import Login from "./paginas/login/Login";
import CadastroUsuario from "./paginas/cadastroUsuario/CadastroUsuario";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Login />} />;
          <Route path="/home" element={<Home />} />;
          <Route path="/cadastro" element={<CadastroUsuario/>}/>
          
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;

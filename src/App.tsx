import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/statics/navbar/Navbar";
import Footer from "./components/statics/footer/Footer";

import "./App.css";
import Home from "./paginas/home/Home";
import Login from "./paginas/login/Login";
import CadastroUsuario from "./paginas/cadastroUsuario/CadastroUsuario";
import ListaTema from "./components/temas/listatema/ListaTema";
import ListaPostagem from "./components/postagens/listapostagem/ListaPostagem";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Login />} />;
        <Route path="/login" element={<Login />} />;
          <Route path="/home" element={<Home />} />;
          <Route path="/cadastro" element={<CadastroUsuario/>}/>
          <Route path="/posts" element={<ListaPostagem/>}/>
          <Route path="/temas" element={<ListaTema/>}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;

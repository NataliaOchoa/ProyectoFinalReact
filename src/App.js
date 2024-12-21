import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Seccion from "./components/Seccion";
import Footer from "./components/Footer";
import Formulario from "./components/Formulario";
import './Estilos.css';

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Seccion titulo="Bienvenida" contenido="Descubre los mejores productos de maquillaje." />} />
          <Route path="/productos" element={<Seccion titulo="Productos" contenido="Explora nuestra gama de marcas." />} />
          <Route path="/ofertas" element={<Seccion titulo="Ofertas" contenido="Aprovecha nuestras increíbles ofertas." />} />
          <Route path="/contacto" element={<Formulario />} />{/* Ruta para el formulario */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;

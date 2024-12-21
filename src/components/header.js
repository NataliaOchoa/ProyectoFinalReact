import React from "react";
import Menu from "./Menu";
import logo from "../assets/logo.png";
import carritoImg from "../assets/carrito.png"; 
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo de Maquillaje" className="logo-img" />
      </div>
      <Menu />
      <div className="acciones-header">

        <div className="busqueda">
          <input
            type="text"
            className="busqueda-input"
            placeholder="Buscar productos..."
          />
          <button className="busqueda-boton">Buscar</button>
        </div>
        <div className="carrito">
          <img src={carritoImg} alt="Carrito de compras" className="carrito-img" />
        </div>
      </div>
    </header>
  );
};

export default Header;

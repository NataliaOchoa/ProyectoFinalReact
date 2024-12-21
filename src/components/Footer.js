import React from "react";
import "./Footer.css"; 

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2024 Makeup Store. Todos los derechos reservados.</p>
      <div className="social">
        <a href="#">Facebook</a> | <a href="#">Instagram</a> | <a href="#">Twitter</a>
      </div>
    </footer>
  );
};

export default Footer;

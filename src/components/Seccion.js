import React from "react";
import inicio1 from "../assets/inicio1.png";
import inicio2 from "../assets/inicio2.png";
import inicio3 from "../assets/inicioo.png";
import producto1 from "../assets/Producto1.png";
import producto2 from "../assets/Producto2.png";
import producto3 from "../assets/Producto3.png";
import producto4 from "../assets/Producto4.png";
import producto5 from "../assets/Producto5.png";
import producto6 from "../assets/Producto6.png";
import oferta1 from "../assets/oferta1.png"; 
import oferta2 from "../assets/oferta2.png";


const Seccion = ({ titulo, contenido }) => {
  return (
    <section className="seccion">
      <h2>{titulo}</h2>
      <p>{contenido}</p>

      {titulo === "Bienvenida" && (
        <div className="inicio-imagenes">
          <div className="producto">
            <img src={inicio1} alt="Producto 1" />
            <p>SETS PARA REGALAR</p>
          </div>
          <div className="producto">
            <img src={inicio2} alt="Producto 2" />
            <p>LO MEJOR PARA ESTAS FECHAS</p>
          </div>
          <div className="producto">
            <img src={inicio3} alt="Producto 3" />
            <p>SKINCARE</p>
          </div>
        </div>
      )}

      {titulo === "Productos" && (
        <div className="productos-imagenes">
          <div className="producto">
            <img src={producto1} alt="Producto 1" />
            <p>Benefit</p>
          </div>
          <div className="producto">
            <img src={producto2} alt="Producto 2" />
            <p>CHANEL</p>
          </div>
          <div className="producto">
            <img src={producto3} alt="Producto 3" />
            <p>Rare Beauty</p>
          </div>
          <div className="producto">
            <img src={producto4} alt="Producto 4" />
            <p>DIOR</p>
          </div>
          <div className="producto">
            <img src={producto5} alt="Producto 5" />
            <p>e.l.F</p>
          </div>
          <div className="producto">
            <img src={producto6} alt="Producto 6" />
            <p>ANASTASIA</p>
          </div>
        </div>
      )}

      {titulo === "Ofertas" && (
        <div className="ofertas-imagenes">
          <div className="oferta">
            <img src={oferta1} alt="Oferta 1" />
            <p>¡50% de descuento en productos seleccionados!</p>
          </div>
          <div className="oferta">
            <img src={oferta2} alt="Oferta 2" />
            <p>¡20% de descuento!</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Seccion;

function Formulario() {
  const [email, setEmail] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Gracias por suscribirte, ${email}!`);
  };

  return (
    <form onSubmit={handleSubmit} className="formulario">
      <input 
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        placeholder="Introduce tu correo"
        required
      />
      <button type="submit">Suscribirse</button>
    </form>
  );
}





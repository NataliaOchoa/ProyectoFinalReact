import React, { useState } from "react";
import "./Formulario.css"; // Importa los estilos del formulario

const Formulario = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Formulario enviado con los datos:\nNombre: ${formData.nombre}\nEmail: ${formData.email}`);
  };

  return (
    <div className="formulario-container">
      <h2>Formulario de Contacto</h2>
      <form onSubmit={handleSubmit} className="formulario">
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Formulario;

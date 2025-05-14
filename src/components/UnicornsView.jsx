import React, { useState } from "react";

const UnicornsView = ({ onAddUnicorn }) => {
  const [nombre, setNombre] = useState("");
  const [color, setColor] = useState("");
  const [poder, setPoder] = useState("");
  const [edad, setEdad] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUnicorn = { nombre, color, poder, edad };
    onAddUnicorn(newUnicorn);  // Llamar la función para agregar el unicornio

    setNombre("");
    setColor("");
    setPoder("");
    setEdad("");
  };

  return (
    <div>
      <h2>Agregar Unicornio</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          type="text"
          placeholder="Color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          type="text"
          placeholder="Poder"
          value={poder}
          onChange={(e) => setPoder(e.target.value)}
        />
        <input
          type="number"
          placeholder="Edad"
          value={edad}
          onChange={(e) => setEdad(e.target.value)}
        />
        <button type="submit">Agregar Unicornio</button>
      </form>
    </div>
  );
};

export default UnicornsView;

import React, { useState } from "react";

const UnicornsView = ({ onAddUnicorn }) => {
  const [nombre, setNombre] = useState("");
  const [color, setColor] = useState("");
  const [poder, setPoder] = useState("");
  const [edad, setEdad] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nombre || !color || !poder || !edad) {
      alert("Por favor completa todos los campos");
      return;
    }

    const newUnicorn = { nombre, color, poder, edad };
    onAddUnicorn(newUnicorn);

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

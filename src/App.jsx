import React, { useState, useEffect } from "react";
import UnicornsView from "./components/UnicornsView";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

function App() {
  const [unicorns, setUnicorns] = useState([]);

  useEffect(() => {
    const storedUnicorns = JSON.parse(localStorage.getItem("unicorns")) || [];
    setUnicorns(storedUnicorns);
  }, []);

  const handleAddUnicorn = (newUnicorn) => {
    const updatedUnicorns = [...unicorns, newUnicorn];
    localStorage.setItem("unicorns", JSON.stringify(updatedUnicorns));
    setUnicorns(updatedUnicorns);
  };

  // ✅ FUNCIÓN EXPORTAR A PDF
  const handleExportToPDF = () => {
    const doc = new jsPDF();
    doc.text("Lista de Unicornios", 14, 10);

    const tableColumn = ["Nombre", "Color", "Poder", "Edad"];
    const tableRows = unicorns.map((unicorn) => [
      unicorn.nombre,
      unicorn.color,
      unicorn.poder,
      unicorn.edad,
    ]);

    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY: 20,
    });

    doc.save("unicornios.pdf");
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Registro de Unicornios</h1>
      <UnicornsView onAddUnicorn={handleAddUnicorn} />

      <div style={{ marginTop: "30px" }}>
        <h2>Lista de Unicornios</h2>
        {unicorns.length === 0 ? (
          <p>No hay unicornios registrados.</p>
        ) : (
          <>
            <table border="1" cellPadding="8" style={{ width: "100%", marginBottom: "10px" }}>
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Color</th>
                  <th>Poder</th>
                  <th>Edad</th>
                </tr>
              </thead>
              <tbody>
                {unicorns.map((unicorn, index) => (
                  <tr key={index}>
                    <td>{unicorn.nombre}</td>
                    <td>{unicorn.color}</td>
                    <td>{unicorn.poder}</td>
                    <td>{unicorn.edad}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <button onClick={handleExportToPDF} style={{ padding: "10px 20px", cursor: "pointer" }}>
              Exportar a PDF
            </button>
          </>
        )}
      </div>
       <button
      onClick={() => {
        if (window.confirm("¿Estás seguro de que deseas borrar todos los unicornios?")) {
          localStorage.removeItem("unicorns");
          setUnicorns([]);
        }
      }}
      style={{ padding: "10px 20px", backgroundColor: "#e74c3c", color: "white", cursor: "pointer" }}
    >
      Borrar Lista
    </button>
  </div>
   
  );
}

export default App;

import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import "jspdf-autotable";

export const UnicornContext = createContext();

export const UnicornProvider = ({ children }) => {
  const [unicorns, setUnicorns] = useState([]);

  // Cargar unicornios desde API con axios
  const getUnicorns = async () => {
    try {
      const response = await axios.get("/api/unicorns"); // Cambiar URL a la correcta
      setUnicorns(response.data);
    } catch (error) {
      console.error("Error al cargar unicornios:", error);
    }
  };

  // Exportar a PDF
  const exportToPDF = () => {
    const doc = new jsPDF();
    const tableColumn = ["Nombre", "Color", "Poder", "Edad"];
    const tableRows = unicorns.map((unicorn) => [
      unicorn.nombre,
      unicorn.color,
      unicorn.poder,
      unicorn.edad,
    ]);

    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 20,
    });
    doc.text("Listado de Unicornios", 14, 15);
    doc.save("unicorns-list.pdf");
  };

  useEffect(() => {
    getUnicorns();
  }, []);

  return (
    <UnicornContext.Provider value={{ unicorns, exportToPDF }}>
      {children}
    </UnicornContext.Provider>
  );
};

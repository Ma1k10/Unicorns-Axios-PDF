import react from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";

const UnicornsContext = ({ unicorns }) => {
  
  const exportToPDF = () => {
    const doc = new jsPDF();
    const tableColumn = ["Nombre", "Color", "Poder", "Edad"];
    const tableRows = unicorns.map((unicorn) => [
      unicorn.nombre,
      unicorn.color,
      unicorn.poder,
      unicorn.edad,
    ]);

    doc.autoTable(tableColumn, tableRows, { startY: 20 });
    doc.text("Listado de Unicornios", 14, 15);
    doc.save("unicorns-list.pdf");
  };

  return (
    <div>
      <h2>Lista de Unicornios</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Color</th>
            <th>Poder</th>
            <th>Edad</th>
          </tr>
        </thead>
        <tbody>
          {unicorns.length > 0 ? (
            unicorns.map((unicorn, index) => (
              <tr key={index}>
                <td>{unicorn.nombre}</td>
                <td>{unicorn.color}</td>
                <td>{unicorn.poder}</td>
                <td>{unicorn.edad}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No hay unicornios disponibles</td>
            </tr>
          )}
        </tbody>
      </table>
      <button onClick={exportToPDF}>Exportar PDF</button>
    </div>
    
  );
};

export default UnicornsContext;

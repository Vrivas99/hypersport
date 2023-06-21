import axios from 'axios';
import React, { useEffect, useState } from 'react'


const Tablahistorial = ({ pago }) => {
  // Estado para almacenar las filas expandidas
  const [expandedRows, setExpandedRows] = useState([]);

  // Función para manejar la expansión de una fila
  const handleExpandRow = (row) => {
    if (expandedRows.includes(row)) {
      {/* Filas adicionales si la fila principal está expandida */ }
      setExpandedRows(expandedRows.filter((r) => r !== row));
    } else {
      {/* Si la fila no está expandida, la agregamos al estado de filas expandidas*/ }
      setExpandedRows([...expandedRows, row]);
    }
  };



  // Función para verificar si una fila está expandida
  const isRowExpanded = (row) => {
    return expandedRows.includes(row);
  };


  return (

    <tr className='border bg-white border-gray-700 hover:bg-gray-200 hover:text-white'>
      <td scope='row' className='px-4 py-1 font-medium text-black text-center'>
        {pago.buyOrder}
      </td>

      <td scope='row' className='text-center px-4 py-1 font-medium text-black'>
        ${pago.PRECIO}
      </td>

      <td scope='row' className='text-center px-4 py-1 font-medium text-black'>
        {pago.fecha}
      </td>
      <td scope='row' className='text-center px-4 py-1 font-medium text-black'>
        <button
          className='text-purple-500 hover:underline focus:outline-none' onClick={() => handleExpandRow(0)}>
          {isRowExpanded(0) ? 'Menos Detalles' : 'Mas Detalles'}
        </button>
      </td>
    </tr>
  )
}
export default Tablahistorial


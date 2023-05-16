import React, { useState } from 'react'


const Tablahistorial = () => {
  // Estado para almacenar las filas expandidas
  const [expandedRows, setExpandedRows] = useState([]);

  // Función para manejar la expansión de una fila
  const handleExpandRow = (row) => {
    if (expandedRows.includes(row)) {
      {/* Filas adicionales si la fila principal está expandida */}
      setExpandedRows(expandedRows.filter((r) => r !== row));
    } else {
      {/* Si la fila no está expandida, la agregamos al estado de filas expandidas*/}
      setExpandedRows([...expandedRows, row]);
    }
  };

  // Función para verificar si una fila está expandida
  const isRowExpanded = (row) => {
    return expandedRows.includes(row);
  };

  return (
    <>
    <tr className='border bg-white border-gray-700 hover:bg-gray-200 hover:text-white'>
      
      <td scope='row' className='px-4 py-1 font-medium text-black text-center'>
        10 Productos
      </td>
      
      <td scope='row' className='text-center px-4 py-1 font-medium text-black'>
        89000$
      </td>
      
      <td scope='row' className='text-center px-4 py-1 font-medium text-black'>
        13-05-2023
      </td>
      
      <td scope='row' className='text-center px-4 py-1 font-medium text-black'>
        <button
          className='text-purple-500 hover:underline focus:outline-none' onClick={() => handleExpandRow(0)}>
          {isRowExpanded(0) ? 'Menos Detalles' : 'Mas Detalles'}
        </button>
      </td>

    </tr>
    {/* Filas adicionales si la fila principal está expandida */}
    {isRowExpanded(0) && (
        <>
          {/* Fila con encabezados adicionales */}
          <tr className='border bg-gray-300'>
            <td className='px-4 py-2 text-black font-bold text-center'>ID</td>
            <td className='px-4 py-2  text-black font-bold text-center'>NOMBRE</td>
            <td className='px-4 py-2 text-black font-bold text-center'>CANTIDAD</td>
            <td className='px-4 py-2 text-black font-bold text-center'>PRECIO</td>
          </tr>

          {/* Fila con información adicional */}
          <tr className='border bg-gray-200'>
            <td className='px-4 py-2 text-gray-700  text-center'>8</td>
            <td className='px-4 py-2 text-gray-700  text-center'>Bicicleta</td>
            <td className='px-4 py-2 text-gray-700  text-center'>10</td>
            <td className='px-4 py-2 text-gray-700  text-center'>8640</td>
          </tr>
        </>
    )}
  </>
  )
}

export default Tablahistorial


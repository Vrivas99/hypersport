import React, { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'
import Tablahistorial from '@/components/Tablahistorial'
import { getPagos, getPagitos } from '@/services/itemService'
import Pagitos from '@/components/Pagitos'

const historial = ({ pagos, pagitos }) => {

  const [user, setUser] = useState()

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
    <div>
      <div>
        <Navbar />
      </div>
      <div className='m-11 relative overflow-x-auto sm:rounded-xl'>
        <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
          <thead className='text-xs text-gray-700 uppercase bg-black dark:text-gray-400'>
            <tr>
              <th scope='col' className='text-white px-6 py-3 text-center'>
                ORDEN DE COMPRA
              </th>
              <th scope='col' className='text-white px-6 py-3 text-center'>
                PRECIO
              </th>
              <th scope='col' className='text-white px-6 py-3 text-center'>
                FECHA DE COMPRA
              </th>
              <th scope='col' className='text-white px-6 py-3 text-center'>
                Detalles
              </th>
            </tr>
          </thead>
          <tbody>

              {pagos && pagos.map((pago) => (
                <>
                  <Tablahistorial pago={pago} key={pago.buyOrder} />
                </>
              ))}
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
                  {pagitos && pagitos.map((pagito) => (
                    <Pagitos pagito={pagito} key={pagito.ide} />
                  ))}
                </tr>
              </>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default historial

export async function getStaticProps() {
  const res = await getPagos()
  const res2 = await getPagitos()
  return {
    props: {
      pagos: res,
      pagitos: res2,
    }
  }

}

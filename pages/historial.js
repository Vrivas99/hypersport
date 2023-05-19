import React, { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'
import Tablahistorial from '@/components/Tablahistorial'
import { getPagos } from '@/services/itemService'
const historial = ({ pagos }) => {

  const [user, setUser] = useState()
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
                PRODUCTOS
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
              <Tablahistorial pago={pago} key={pago.buyOrder} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default historial
export async function getStaticProps() {
  const res = await getPagos()
  return {
    props: {
      pagos: res,
    }
  }

}

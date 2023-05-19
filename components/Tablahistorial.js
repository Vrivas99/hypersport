import axios from 'axios';
import React, { useEffect, useState } from 'react'


const Tablahistorial = ({ pago }) => {

  return (
    <>
      <td scope='row' className='px-4 py-1 font-medium text-black text-center'>
        {pago.buyOrder}
      </td>

      <td scope='row' className='text-center px-4 py-1 font-medium text-black'>
        ${pago.PRECIO}
      </td>

      <td scope='row' className='text-center px-4 py-1 font-medium text-black'>
        {pago.fecha}
      </td>
    </>
  )
}

export default Tablahistorial


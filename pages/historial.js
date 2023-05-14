import React from 'react'
import Navbar from '@/components/Navbar'
import Tablahistorial from '@/components/Tablahistorial'

const historial = () => {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            
            <div className='m-11 relative overflow-x-auto sm:rounded-xl'>
                <table className='w-full  text-sm text-left text-gray-500 dark:text-gray-400'>
                    <thead className='text-xs text-gray-700 uppercase bg-purple-500 dark:text-gray-400'>
                        <tr className=''>
                            <th scope='col' className='text-white px-6 py-3 text-center'>PRODUCTOS</th>
                            <th scope='col' className='text-white px-6 py-3 text-center'>CANTIDAD PRODUCTOS</th>
                            <th scope='col' className='text-white px-6 py-3 text-center'>PRECIO</th>
                            <th scope='col' className='text-white px-6 py-3 text-center'>FECHA DE COMPRA</th>
                        </tr>
                    </thead>
                        <Tablahistorial />
                    </table>
            </div>
            
        </div>
    )
}

export default historial
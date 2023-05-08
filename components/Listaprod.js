import React from 'react'
/* import { getItems } from '@/services/itemService' */

function Listaprod({item}) {
    return (
        
            <tr>
                <td class='border border-gray-400 px-4 py-1'>{item.id}</td>

                <td class='border border-gray-400 px-4 py-1'>{item.title}</td>

                <td class='border border-gray-400 px-4 py-1'>{item.price}</td>

                <td class='border border-gray-400 px-4 py-1'>{item.descripcion}</td>

                <td class='border border-gray-400 px-4 py-1'><div className='container'><button className='bg-purple-600 rounded-lg px-4 py-2'>MODIFICAR</button></div><br /><div className='container'><button className='bg-purple-600 rounded-lg px-6 py-2'>ELIMINAR</button></div> </td>
            </tr>
        
    )
}

export default Listaprod



/* function Listaprod() {
    return (
        <div>
            <table className='w-full'>
                <thead>
                    <tr>
                        <th class='border border-gray-400 px-4 py-1 w-0'>ID</th>

                        <th class='border border-gray-400 px-4 py-1 w-50'>PRODUCTO</th>

                        <th class='border border-gray-400 px-4 py-1 w-2'>PRECIO</th>

                        <th class='border border-gray-400 px-4 py-1 w-auto'>DESCRIPCION</th>

                        <th class='border border-gray-400 px-4 py-1 w-50'>OPCIONES</th>
                    </tr>
                </thead>
                <tbody>
                    {items && items.map((item)=> (
                    <tr>
                        <td class='border border-gray-400 px-4 py-1'>{item.id}</td>

                        <td class='border border-gray-400 px-4 py-1'>{item.title}</td>

                        <td class='border border-gray-400 px-4 py-1'>{item.price}</td>

                        <td class='border border-gray-400 px-4 py-1'>{item.descripcion}</td>

                        <td class='border border-gray-400 px-4 py-1'><div className='container'><button className='bg-purple-600 rounded-lg px-4 py-2'>MODIFICAR</button></div><br /><div className='container'><button className='bg-purple-600 rounded-lg px-6 py-2'>ELIMINAR</button></div> </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Listaprod

export async function getStaticProps() {
  const res = await getItems()
  return {
    props: {
      items: res,
    }
  }
} */
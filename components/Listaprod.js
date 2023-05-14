import Link from 'next/link'
import React, { useEffect, useState } from 'react'
/* import { getItems } from '@/services/itemService' */

export default function Listaprod({ item }) {
    function lockData(e) {
        var ide = item.id
        var tit = item.title
        var pre = item.price
        const undersc = "\n----------------------------"
        console.log(`${undersc}\nID: ` + ide, "\nTIT: " + tit, "\nPRE: " + pre + `${undersc}`)
    }
    useEffect(() => {
    }, [])

    return (
        <tr className=' border-b bg-gray-900 border-gray-700 hover:bg-gray-700 hover:text-white'>
            <th scope='row' className='px-4 py-1 font-medium text-white text-center'>{item.id}</th>

            <td scope='row' className='px-4 py-1 font-medium text-white'>{item.title}</td>

            <td scope='row' className='px-4 py-1 text-end'>{item.price}$</td>

            <td scope='row' className='px-4 py-1'>{item.descripcion}</td>

            <td className='px-6 py-4'>
                <Link onClick={lockData} href={{
                    query: {
                        id: item.id,
                        titulo: item.title,
                        descripcion: item.descripcion,
                        precio: item.originalPrice,
                        descu: item.descu,
                        stock: item.cantidad,
                        categoria: item.categoria,
                        img: item.img
                    }, pathname: '/modifprod',
                }}
                    className='cursor-pointer p-2 font-medium text-blue-600 hover:underline'>MODIFICAR</Link>
                <Link href='#' className='cursor-pointer p-2 font-medium text-red-500 hover:underline'>ELIMINAR</Link>
            </td>
        </tr>
    )
}


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
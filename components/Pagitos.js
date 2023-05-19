import React from 'react'

const Pagitos = ({ pagito }) => {
    return (
        <>
            <td className='px-4 py-2 text-gray-700  text-center'>{pagito.ide}</td>
            <td className='px-4 py-2 text-gray-700  text-center'>{pagito.titulo}</td>
            <td className='px-4 py-2 text-gray-700  text-center'>{pagito.qty}</td>
            <td className='px-4 py-2 text-gray-700  text-center'>{pagito.precio}</td>
        </>
    )
}

export default Pagitos
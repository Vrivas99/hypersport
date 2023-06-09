import React from 'react'
import { useAppContext } from './StateWrapper'

const Cardbtn = ({item}) => {
    const cart = useAppContext()
    function handlerClick(){
        cart.addItemToCart(item)
    }
    return (
        <a onClick={handlerClick} className="cursor-pointer max-h-20 flex inset-x-0 bottom-0 items-center justify-center rounded-md bg-purple-600 px-5 py-2.5 text-center text-xs md:text-sm font-medium text-white hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-blue-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-4 w-4 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Agregar al carrito
        </a>
    )
}

export default Cardbtn
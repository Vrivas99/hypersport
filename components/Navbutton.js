import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Carrito from '../public/img/carrito.png'
import { useAppContext } from './StateWrapper'
const Navbutton = () => {
    const cart = useAppContext()

    function handleOpenCart(){
        cart.openCart();
    }

    return (
        <div className='flex justify-center space-x-3'>
            <Link href='login' className='bg-purple-600 hover:bg-purple-900 text-white px-6 py-2 rounded-full font-sans'>Ingresar</Link>
            <Link onClick={handleOpenCart} href='#' className='bg-white flex justify-items-center align-middle rounded-full px-4 py-3 hover:bg-slate-300 text-black'>
                <Image src={Carrito} className='w-5 h-5' alt='carrito'></Image>
                ({cart.getNumberOfItems()})
            </Link>
        </div>


    )
}

export default Navbutton
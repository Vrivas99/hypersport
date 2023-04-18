import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Carrito from '../public/img/carrito.png'

const Navbutton = () => {
    return (
        <div className='flex justify-center space-x-3'>
            <Link href='login' className='text-white bg-purple-600 px-6 py-2 rounded-full hover:bg-purple-900'>Ingresar</Link>
            <Link href='/' className='bg-white flex justify-items-center align-middle rounded-full px-4 py-3 hover:bg-slate-300'>
                <Image src={Carrito} className='w-5 h-5'></Image>
            </Link>
        </div>


    )
}

export default Navbutton
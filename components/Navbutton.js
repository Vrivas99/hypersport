import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Carrito from '../public/img/carrito.png'
import { useAppContext } from './StateWrapper'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

const Navbutton = () => {
    const cart = useAppContext()
    function handleOpenCart() {
        cart.openCart();
    }


    const [result, setResult] = useState([])
    const [user, setUser] = useState()
  
    const router = useRouter()
  
    const getProfile = async () => {
      try{ 
      const response = await axios.get('api/profile')
      console.log(response.data.user)
      setUser(response.data.user)
      } catch(error){
       setUser('') 
      }
    }
  
    const logout = async () => {
      try {
        const response = await axios.post('api/auth/logout')
        console.log(response.data)
        router.push('/login')
      } catch (error) {
        router.push('/login')
      }
    }
    useEffect(() => {
      getProfile();
   }, []);

    return (
        <div className='flex justify-center space-x-3'>
            <div>{user === '' ?<Link href='login' className='text-center bg-purple-600 align-middle hover:bg-purple-900 text-white px-6 py-2 rounded-full font-sans'>Ingresar</Link>:<Link onClick={() => logout()} href='' className='text-center bg-purple-600 align-middle hover:bg-purple-900 text-white px-6 py-2 rounded-full font-sans'>Cerrar Sesion</Link>}</div>
            <Link onClick={handleOpenCart} href='#' className='relative bg-white inline-flex items-center rounded-full px-4 py-3 hover:bg-slate-300 text-black'>
                <Image src={Carrito} className='w-5 h-5' alt='carrito'></Image>
                {cart.getNumberOfItems() > 0 && (
                    <span className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">
                        {cart.getNumberOfItems()}
                    </span>
                )}
            </Link>
        </div>


    )
}

export default Navbutton
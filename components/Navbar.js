
import Logo from '../public/img/logo-hyper.jpg'
import Image from 'next/image'
import Link from 'next/link'
import Navlinks from './Navlinks'
import Navbutton from './Navbutton'
import { React, useState } from "react";
import Carrito from './Carrito'

const Navbar = ({ children }) => {
  const [open, setOpen] = useState(false)
  return (
    <div className='md:sticky md:top-0 z-50'>
      <nav className='bg-black'>
        <div className='flex items-center font-medium justify-around'>
          <div className='z-50 md:w-auto w-full flex justify-between'>
            <Link href='/'>
              <Image src={Logo} className='md:cursor-pointer h-24 w-24' alt='Imagen Prod'></Image>
            </Link>
            <div className='p-7 md:hidden' onClick={() => setOpen(!open)}>
              <button className='bg-purple-600 text-white px-6 py-2 rounded-full font-sans' name={`${open}`}>Menu</button>
            </div>
          </div>
          <ul className='md:flex hidden uppercase items-center gap-5 font-sans text-white'>
            <li>
              <Link href='/' className='py-7 px-3 inline-block hover:text-purple-600'>Home</Link>
            </li>
            <Navlinks />
          </ul>
          <div className='md:block hidden'>
            <Navbutton />
          </div>
          {/* nav mobil */}
          <ul className={`z-40 md:hidden absolute w-full h-full bottom-0 py-24 pl-4 uppercase text-white bg-black duration-500 ${open ? 'left-0' : 'left-[-100%]'}`}>
            <li>
              <Link href='/' className=' z-50 py-7 px-3 inline-block hover:text-purple-600'>Home</Link>
            </li>
            <Navlinks />
            <div className='py-5'>
              <Navbutton />
            </div>
          </ul>
        </div>
      </nav>
      {children}
      <Carrito />
    </div>

  )

}

export default Navbar

import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';


const Footer = () => {
    return (
        <div className='bg-black mt-14'>
            <div className='bg-gray-60 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-10'>
                <div className='p-5 pt-10'>
                    <ul>
                        <p className='text-white font-bold text-3xl pb-6'>
                            Hyper<span className='text=blue-600'>Sport</span>
                        </p>
                        <div className='flex gap-6 pb-5'>
                            {/* Section for icons */}
                            <FaInstagram className='text-white text-2xl cursor-pointer hover:text-violet-600' />
                            <FaTwitter className='text-white text-2xl cursor-pointer hover:text-blue-600' />
                            <FaLinkedin className='text-white text-2xl cursor-pointer hover:text-blue-600' />
                            <FaYoutube className='text-white text-2xl cursor-pointer hover:text-red-600' />
                        </div>
                    </ul>
                </div>
                <div className='p-5'>
                    <ul>
                        <p className='text-white font-bold text-2xl pb-4'>Deportes</p>
                        <li className='text-white text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Futbol</li>
                        <li className='text-white text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Basquetbol</li>
                        <li className='text-white text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Ciclismo</li>
                        <li className='text-white text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Voleibol</li>
                    </ul>
                </div>
                <div className='p-5'>
                    <ul>
                        <p className='text-white font-bold text-2xl pb-4'>Productos</p>
                        <li className='text-white text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Zapatillas</li>
                        <li className='text-white text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Ropa</li>
                        <li className='text-white text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Balones</li>
                        <li className='text-white text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Accesorios</li>
                    </ul>
                </div>
                <div className='p-5'>
                    <ul>
                        <p className='text-white font-bold text-2xl pb-4'>Soporte</p>
                        <li className='text-white text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Ayuda</li>
                        <li className='text-white text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Contacto</li>
                        <li className='text-white text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Acerca de Nosotros</li>
                    </ul>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center text-center p-5'>
                <h1 className='text-white font-semibold'>© 2023 Todos los derechos reservados | Creado por HyperSport</h1>
            </div>
        </div>
    );
}

export default Footer;

import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaMailBulk } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import Link from 'next/link';

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
                        <li className='text-white text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'><Link href="/pagesCat/futbol">Futbol</Link></li>
                        <li className='text-white text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'><Link href="/pagesCat/basquet">Basquetbol</Link></li>
                        <li className='text-white text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'><Link href="/pagesCat/ciclismo">Ciclismo</Link></li>
                        <li className='text-white text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'><Link href="/pagesCat/volei">Voleibol</Link></li>
                    </ul>
                </div>
                <div className='p-5'>
                    <ul className='pt-12'>
                        <li className='text-white text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'><Link href="/pagesCat/tenis">Tenis</Link></li>
                        <li className='text-white text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'><Link href="/pagesCat/golf">Golf</Link></li>
                        <li className='text-white text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'><Link href="/pagesCat/hockey">Hockey</Link></li>
                        <li className='text-white text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'><Link href="/pagesCat/baseball">Baseball</Link></li>
                    </ul>
                </div>
                <div className='p-5'>
                    <ul>
                        <p className='text-white font-bold text-2xl pb-4'>Soporte</p>
                        <li className='text-white text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Contactanos</li>
                        <p className='text-white pb-1'><FaPhone className='text-2xl cursor-pointer hover:text-red-600  pr-1 float-left' />56-9-6284-1124</p>
                        <p className='text-white pb-2'><FaMailBulk className='text-2xl cursor-pointer hover:text-red-600 pr-1 float-left' />soporte@hypersport.com</p>
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

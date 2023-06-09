import React, { useState } from 'react'
import Link from 'next/link'

const Navlinks = () => {
    const links = [
        {
            name: 'Deportes', submenu: true, sublink: [{
                sublink: [
                    { name: 'Futbol', link: '/futbol' },
                    { name: 'Tenis', link: '/tenis' },
                    { name: 'Basquetbol', link: '/basquet' },
                    { name: 'Voleibol', link: '/volei' },
                    { name: 'Golf', link: '/golf' },
                    { name: 'Hockey', link: '/hockey' },
                    { name: 'Ciclismo', link: '/ciclismo' },
                    { name: 'Baseball', link: '/baseball' },
                ]

            }]
        },
        {
            name: 'Otros', submenu: true, sublink: [{
                sublink: [
                    { name: 'Ofertas', link: '/ofertas' },
                ]
            }]
        }]
    const [sblink, setSblink] = useState('')

    return <>
        {links.map(link => (
            <div key={link.name}>
                <div className='px-3 text-left md:cursor-pointer hover:text-purple-600 group'>
                    <h1 className='py-7 flex justify-between items-center' onClick={() => sblink !== link.name ? setSblink(link.name) : setSblink('')}>
                        {link.name}
                        <span className='md:hidden'>
                            <svg className='w-6' fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
                            </svg>
                        </span>
                    </h1>

                    {link.submenu && (<div>
                        <div className=' z-50 absolute top-20 hidden group-hover:md:block hover:md:block'>
                            <div className='py-3'>
                                <div className='w-4 h-4 left-3 absolute mt-1 bg-black rotate-45'></div>
                            </div>
                            <div className='bg-black p-7 rounded-md'>
                                {
                                    link.sublink.map((mysublinks) => (
                                        <div key={mysublinks.sublink}>
                                            {mysublinks.sublink.map((slink) => (
                                                <li key={slink.name} className='text-sm text-gray-300 my-4'>
                                                    <Link href={slink.link} className='hover:text-purple-600'>{slink.name}</Link>
                                                </li>
                                            ))}
                                        </div>))
                                }
                            </div>
                        </div>
                    </div>)}
                </div>
                {/*menu movil */}
                <div className={`md:hidden ${sblink === link.name ? 'md:hidden' : 'hidden'}`}>
                    {link.sublink.map((mysublinks) => (
                        <div key={mysublinks.sublink}>
                            {mysublinks.sublink.map((slink) => (
                                <li key={slink.name} className='py-3 pl-14 text-sm text-gray-300'>
                                    <Link href={slink.link} className='hover:text-purple-600'>{slink.name}</Link>
                                </li>
                            ))}
                        </div>))}
                </div>
            </div>
        ))
        }
    </>
}

export default Navlinks
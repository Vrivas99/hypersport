import React from 'react'
import Link from 'next/link'

const Navlinks = () => {
    const links = [
    {name:'Deportes', submenu:true,sublink:[{
        sublink:[
            {name:'Futbol', link:'/'},
            {name:'Tenis', link:'/'},
            {name:'Basquetbol', link:'/'},
            {name:'Voleibol', link:'/'},
        ]
        
    }]},
    {name:'Vestuario', submenu:true,sublink:[{
        sublink:[
            {name:'Poleras', link:'/'},
            {name:'Guantes', link:'/'},
            {name:'Short', link:'/'},
            {name:'Zapatillas', link:'/'},
        ]
    }]},
    {name:'Accesorios', submenu:true,sublink:[{
        sublink:[
            {name:'Poleras', link:'/'},
            {name:'Guantes', link:'/'},
            {name:'Short', link:'/'},
            {name:'Zapatillas', link:'/'},
        ]
    }]}]
    return <>
        {
            links.map(link=>(
                <div>
                    <div className='px-3 text-left md:cursor-pointer hover:text-purple-600 group'>
                        <h1 className='py-7'>
                            {link.name}
                        </h1>
                        {link.submenu && (<div>
                            <div className='absolute top-20 hidden group-hover:block hover:block'>
                                <div className='py-3'>
                                    <div className='w-4 h-4 left-3 absolute mt-1 bg-black rotate-45'></div>
                                </div>
                                <div className='bg-black p-7 rounded-md'>
                                    {
                                    link.sublink.map((mysublinks)=>(
                                    <div>
                                        {mysublinks.sublink.map((slink)=>(
                                            <li className='text-sm text-gray-300 my-4'>
                                                <Link href={slink.link} className='hover:text-purple-600'>{slink.name}</Link>
                                            </li>
                                        ))}
                                    </div>))
                                    }
                                </div>
                            </div>
                        </div>)}
                    </div>
                </div>
            ))
        }
    </>
}

export default Navlinks
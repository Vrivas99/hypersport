import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Formularioprod from '@/components/Formularioprod';
import LeftAside from '@/components/LeftAside';

const adminPage = () => {
    const router = useRouter();
    const query = router.query;
    const ab = [query.id,
    query.titulo,
    query.descripcion,
    query.precio,
    query.descu,
    query.stock,
    query.categoria,
    query.img]
    console.log(ab)
    return (
        <div className="bg-gray-900 antialiased h-screen">
            <button data-drawer-target="sidebar-multi-level-sidebar" data-drawer-toggle="sidebar-multi-level-sidebar" aria-controls="sidebar-multi-level-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>

            <LeftAside/>
            
            <div className="p-4 sm:ml-64 h-screen flex flex-col justify-center items-center">
                <Formularioprod data={ab}></Formularioprod>
            </div>
        </div>
    )
}

export default adminPage

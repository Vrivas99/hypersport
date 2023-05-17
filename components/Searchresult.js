import React from 'react'
import Link from 'next/link'
import { convertToPath } from '@/lib/utils'

export const Searchresult = ({ result }) => {
    return (
        <div className='absolute top-48 z-10 bg-gray-100 rounded-lg mt-5 shadow-lg w-[47%] flex flex-col max-h-80 overflow-y-auto'>
            {
                result.map((results, id) => {
                    return <div key={id} className='flex hover:bg-gray-200 items-center'>
                        <img src={results.img} width={100} height={100} className=' max-h-[100px] min-w-[100px]'></img>
                        <Link href={`/${convertToPath(results.title)}`} className='pl-3 font-semibold text-lg'>{results.title}</Link>
                    </div>
                })
            }
        </div >
    )
}

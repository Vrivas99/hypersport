import Catbanners from '@/components/Catbanners'
import Navbar from '@/components/Navbar'
import Prodcards from '@/components/Prodcards'
import { getItems } from '@/services/itemService'
import { useEffect, useState } from 'react'


export default function Home({items}) {
  return (
    <div>
      <Navbar/>
      <Catbanners/>
      <div className="-z-50 grid grid-cols-2 md:flex md:flex-wrap justify-center justify-items-center">
        {items && items.map((item)=> (
            <Prodcards key={item.id} item={item} showAs='default'/>
          ))}
         </div>
      
    </div>
  )
}

export async function getStaticProps(){
  const res = await getItems()
  return {
    props:{
      items: res,
    }
  }
}


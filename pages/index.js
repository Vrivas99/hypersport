import Catbanners from '@/components/Catbanners'
import Navbar from '@/components/Navbar'
import Prodcards from '@/components/Prodcards'
import { getItemsINDEX } from '@/services/itemService'
import Footer from '@/components/footer'
import { Searchbar } from '@/components/Searchbar'
import { useState } from 'react'
import { Searchresult } from '@/components/Searchresult'
import { Banner } from '@/components/Banner'



export default function Home({ items }) {

  const [result, setResult] = useState([])

  return (
    <div>
      <Navbar />
      <div className='-z-50 m-8 flex flex-col align-middle items-center'>
        <Searchbar setResult={setResult} />
        <Searchresult result={result} />
      </div>
      <div className='flex justify-center'>
        <Banner />
      </div>
      <Catbanners />
      <div className="-z-50 grid grid-cols-2 md:flex md:flex-wrap justify-center justify-items-center">
        {items && items.map((item) => (
          <Prodcards key={item.id} item={item} showAs='default' />
        ))}
      </div>
      <div className=' bottom-0'>
        <Footer />
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const res = await getItemsINDEX()
  return {
    props: {
      items: res,
    }
  }
}


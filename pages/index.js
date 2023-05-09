import Catbanners from '@/components/Catbanners'
import Navbar from '@/components/Navbar'
import Prodcards from '@/components/Prodcards'
import { getItemsINDEX } from '@/services/itemService'
import Footer from '@/components/footer'
import axios from 'axios'


export default function Home({ items }) {
  return (
    <div>
      <Navbar />
      <Catbanners />
      <div className="-z-50 grid grid-cols-2 md:flex md:flex-wrap justify-center justify-items-center">
        {items && items.map((item) => (
          <Prodcards key={item.id} item={item} showAs='default' />
        ))}
      </div>
      <Footer />
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


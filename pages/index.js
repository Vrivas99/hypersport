import Navbar from '@/components/Navbar'
import Prodcards from '@/components/Prodcards'
import { getItems } from '@/services/itemService'

export default function Home({items}) {
  return (
    <div>
      <Navbar/>
      <div className="xl:mx-40 p-10 -z-50 grid justify-items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
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
import Navbar from '@/components/Navbar'
import Prodcards from '@/components/Prodcards'
import { getItems } from '@/services/itemService'

export default function Home({items}) {
  return (
    <div>
      <Navbar/>
      <div className="xl:mx-40 -z-50 flex flex-wrap justify-center justify-items-center">
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
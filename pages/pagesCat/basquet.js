import React from 'react'
import Navbar from '@/components/Navbar'
import Prodcards from '@/components/Prodcards'
import { getItems } from '@/services/itemService'
import Footer from '@/components/footer'


const basquet = ({ items }) => {
    const filtroBasquetball = items.filter(item => item.idcategoria === 6)
    return (
        <div>
            <Navbar />
            <div className="-z-50 grid grid-cols-2 md:flex md:flex-wrap justify-center justify-items-center">
                {filtroBasquetball && filtroBasquetball.map((item) => (
                    <Prodcards key={item.id} item={item} showAs='default' />
                ))}
            </div>
            <div className=' bottom-0'>
                <Footer />
            </div>
        </div>
    )
}

export default basquet

export async function getStaticProps() {
    const res = await getItems()
    return {
        props: {
            items: res,
        }
    }
}
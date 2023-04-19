import { useAppContext } from "./StateWrapper"
import Prodcards from './Prodcards'
import Image from 'next/image'
import Sad from '../public/img/sadcartman.png'
import Link from "next/link"


export default function Carrito() {
    const cart = useAppContext()

    function handleCloseCart() {
        cart.closeCart()
    }
    function getTotal(){
        const total = cart.items.reduce((acc,item) => acc + item.qty * item.price,0)
        return total
    }


    return (
        <div style={{ display: cart.isOpen ? 'block' : 'none' }} className="z-50 fixed right-0 top-0 bg-white w-screen md:w-3/6 xl:w-4/12 h-screen p-6 shadow-2xl shadow-slate-950 flex flex-col">
            <button className=' cursor-pointer bg-purple-600 hover:bg-purple-900 text-white px-6 py-2 rounded-full font-sans' onClick={handleCloseCart}>Cerrar</button>
            {cart.items.length === 0 ? <div className=" h-full flex items-center justify-center flex-col"><Image className=" w-56" src={Sad}></Image><div className="text-3xl font-bold text-slate-900">Carrito vacio</div></div> : 
            <div className="grid gap-5">
                <div className="relative text-2xl font-bold text-slate-900 mb-2 mt-2">Tus productos</div>
                <div>
                    {cart.items.map((item) => (
                        <div className="">
                            <Prodcards key={item.id} item={item} showAs='ListItem' qty={item.qty} />
                        </div>
                        
                    ))}
                </div>
                <div className='grid gap-7 justify-center'>
                    <div className=" w-full font-bold font-sans text-2xl flex justify-center">
                        Total: ${getTotal()}
                    </div>
                    <div>
                        <Link href='#' className=" w-72 flex justify-center cursor-pointer bg-green-600 hover:bg-green-900 text-white px-6 py-2 rounded-md font-sans">Ir a pagar</Link>
                    </div>
                </div>
            </div>}
        </div>
    )
}
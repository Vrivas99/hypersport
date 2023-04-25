import { useAppContext } from "./StateWrapper"
import Prodcards from './Prodcards'
import Image from 'next/image'
import Sad from '../public/img/sadcartman.png'
import { useEffect, useState } from 'react'



export default function Carrito() {
    const cart = useAppContext()
    const [tokenResponse, setToken] = useState([]);
    const [urlResponse, setUrl] = useState([]);

    function handleCloseCart() {
        cart.closeCart()
    }
    function getTotal() {
        const total = cart.items.reduce((acc, item) => acc + item.qty * item.price, 0)
        return total
    }
    useEffect(()=>{
        async function getToken() {
            console.log("consoleLog token")
            const response = await fetch('http://localhost:3000/api/webpay');
            const res = await response.json()
            console.log(res.token)
            setToken(res.token)
        }
        async function getUrl() {
            console.log("consoleLog url")
            const response = await fetch('http://localhost:3000/api/webpay');
            const res = await response.json()
            console.log(res.url)
            setUrl(res.url)
        }

        getToken();
        getUrl();
    },[]);


    return (
        <div style={{ display: cart.isOpen ? 'block' : 'none' }} className="z-50 fixed right-0 top-0 bg-white w-screen md:w-3/6 xl:w-4/12 h-screen p-6 shadow-2xl shadow-slate-950 flex flex-col">
            <button className=' cursor-pointer bg-purple-600 hover:bg-purple-900 text-white px-6 py-2 rounded-full font-sans' onClick={handleCloseCart}>Cerrar</button>
            {cart.items.length === 0 ? <div className=" h-full flex items-center justify-center flex-col"><Image className=" w-56" src={Sad} alt="carritoimg"></Image><div className="text-3xl font-bold text-slate-900">Carrito vacio</div></div> :
                <div className="grid gap-5">
                    <div className="relative text-2xl font-bold text-slate-900 mb-2 mt-2">Tus productos</div>
                    <div>
                        {cart.items.map((item) => (
                            <div key={item.id}>
                                <Prodcards key={item.id} item={item} showAs='ListItem' qty={item.qty} />
                            </div>

                        ))}
                    </div>
                    <div className='grid gap-7 justify-center'>
                        <div className=" w-full font-bold font-sans text-2xl flex justify-center">
                            Total: ${getTotal()}
                        </div>
                        <form action={urlResponse} method="POST">
                            <input type="hidden" name="token_ws" value={tokenResponse} />
                            <input type="submit" value="Pagar" className=" w-72 flex justify-center cursor-pointer bg-green-600 hover:bg-green-900 text-white px-6 py-2 rounded-md font-sans" />
                        </form>
                    </div>
                </div>}
        </div>
    )
}
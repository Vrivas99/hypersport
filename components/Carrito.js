import { useAppContext } from "./StateWrapper"
import Prodcards from './Prodcards'
import Image from 'next/image'
import Sad from '../public/img/sadcartman.png'
import React, { useEffect, useState } from 'react'
import axios from "axios"

export default function Carrito() {
    const cart = useAppContext()
    const [tokenResponse, setToken] = useState([]);
    const [urlResponse, setUrl] = useState([]);
    const [tot,settot] = React.useState(0);


    const handleSubmit = async e => {
        e.preventDefault()
        console.log('posteando datos')
        //POST a WEBPAY para generar transacccion
        const res = await axios.post('api/webpay', {buyO: "O-" + Math.floor(Math.random() * 10000) + 1, sessID: "S-" + Math.floor(Math.random() * 10000) + 1, amt: tot, retUrl: 'http://localhost:3000',})
             .then((response) => {
                console.log("data post:" + response);
                console.log(response.data.token)
                console.log(response.data.url)
                setToken(response.data.token)
                setUrl(response.data.url)
            },(error) =>{
                console.log(error);
         });

        //Llenado de las variables para form de la TRANSACCION 
        console.log("setToken: "+ tokenResponse)
        console.log("setUTL:" + urlResponse )
    }

    function getForm(){
        const web = document.getElementById("web").submit
        console.log(web) 
    }

    function doit(){
        handleSubmit
        getForm()
        
    }


    function handleCloseCart() {
        cart.closeCart()
    }
    function getTotal() {
        const total = cart.items.reduce((acc, item) => acc + item.qty * Math.floor(item.originalPrice - item.originalPrice * item.Descu/100), 0)
        return total
    }

    useEffect(()=>{    
        settot(getTotal())
        console.log("Valorl de tot: "+ tot)
    })
    return (
        <div style={{ display: cart.isOpen ? 'block' : 'none' }} className="overflow-y-auto z-50 fixed right-0 top-0 bg-white w-screen md:w-3/6 xl:w-4/12 h-screen p-6 shadow-2xl shadow-slate-950 flex flex-col">
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
                        <div id="este" className=" w-full font-bold font-sans text-2xl flex justify-center">
                            Total: ${getTotal()}
                        </div>
                        <form id="hola" onSubmit={handleSubmit}>
                            <button className=" w-72 flex justify-center cursor-pointer bg-green-600 hover:bg-green-900 text-white px-6 py-2 rounded-md font-sans" >Apretar este primero</button>
                        </form>
                        <form id="web" action={urlResponse} method="POST">
                            <input type="hidden" name="token_ws" value={tokenResponse} />
                            <input type="submit" value="Apretar este despues" className=" w-72 flex justify-center cursor-pointer bg-green-600 hover:bg-green-900 text-white px-6 py-2 rounded-md font-sans" />
                        </form>
                    </div>
                </div>}
        </div>
    )
}
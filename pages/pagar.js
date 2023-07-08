import Carrito from "@/components/Carrito";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import aprobado from '../public/img/aprobado.png'
import rechazado from '../public/img/rechazado.png'
import Image from "next/image";




const pagar = () => {
    const [token, setToken] = useState()
    const [rp_code, setRPCODE] = useState()
    const [badtoken, setBToken] = useState()
    const [finish, setFinish] = useState(false);
    //conts [nombrevariable, funcionquelasetea] = useState(siquierespuedesponervaloresdefault)
    const [buy_order, setbuy_order] = useState();
    const [amount, setamount] = useState();
    const [transaction_date, settransaction_date] = useState();
    const router = useRouter()

    async function hola() {
        //GET

    }

    async function estado(Tkn) {
        console.log('Tkn Estado:' + Tkn)
        try {
            const response = await axios.put('/api/webpay', { Tkn: Tkn })
            console.log('--------------------------')
            console.log('RESPONSE DEL ESTADO')
            console.log(response)
            console.log('codigo tran: ' + response.data.response_code)
            console.log('buy_order: ' + response.data.buy_order)
            console.log('amount: ' + response.data.amount)
            console.log('fecha transaccion: ' + response.data.transaction_date)

            setRPCODE(response.data.response_code)
            setbuy_order(response.data.buy_order)
            setamount(response.data.amount)
            settransaction_date(response.data.transaction_date)

            const resp2 = await axios.put('/api/historial', { buyOr: response.data.buy_order })
        } catch (error) {
            console.log('XXXXXXXXX SE CALLO LA AAAAA XXXXXXXXXXX')
        }
    }

    useEffect(() => {
        const urlQuery = new URLSearchParams(window.location.search)
        const Tkn = urlQuery.get("token_ws")
        const bTkn = urlQuery.get("TBK_TOKEN")
        console.log(`Token: ${Tkn}`)
        console.log(`TokenMalo: ${bTkn}`)
        setToken(Tkn)
        setBToken(bTkn)
        console.log(urlQuery)

        console.log('aaa: ' + finish)
        if (bTkn == null && finish == false) {
            estado(Tkn)
            setFinish(true);//A veces el proceso entra en bucle
        } else {
            //router.push('/')
            console.log('se anulo la compra')
        }
    }, []);

    return (
        <div className='bg-gray-600 antialiased h-screen w-screen flex justify-center items-center'>
            <div className=" px-16 py-20 bg-gray-100 border border-gray-300 w-auto h-auto rounded-lg shadow-lg">
                {rp_code == -1 &&
                    <div className="flex flex-col justify-center items-center">
                        <div className=" font-bold text-justify text-lg">Orden de compra: {buy_order}</div>
                        <Image src={rechazado} width={300}></Image>
                        <div className="mb-2 font-extrabold text-justify text-2xl">Pago rechazado</div>
                        <div className="mb-2 font-extrabold text-justify text-xl">No se realizaron cargos a su tarjeta</div>
                        <Link className="mt-3 w-auto flex justify-center cursor-pointer bg-red-600 hover:bg-red-900 text-white px-6 py-2 rounded-md font-sans" href={'/'}>Ir a inicio</Link>
                    </div>
                }

                {rp_code == 0 &&
                    <div className="flex flex-col justify-center items-center">
                        <div className=" font-bold text-justify text-lg">Orden de compra: {buy_order}</div>
                        <Image src={aprobado} width={300}></Image>
                        <div className="mb-2 font-extrabold text-justify text-2xl">Pago realizado</div>
                        <div className="mb-2 font-extrabold text-justify text-xl">Monto: ${amount}</div>
                        <div className="mb-2 font-extrabold text-justify text-xl">Fecha: {transaction_date}</div>
                        <Link className="mt-3 w-auto flex justify-center cursor-pointer bg-green-600 hover:bg-green-900 text-white px-6 py-2 rounded-md font-sans" href={'/'}>Ir a inicio</Link>
                    </div>
                }
                {badtoken !== null &&
                    <div className="flex flex-col justify-center items-center">
                        <div className=" font-bold text-justify text-lg">Orden de compra: {buy_order}</div>
                        <Image src={rechazado} width={300}></Image>
                        <div className="mb-2 font-extrabold text-justify text-2xl">Pago anulado</div>
                        <div className="mb-2 font-extrabold text-justify text-xl">Se ha anulado la compra exitosamente</div>
                        <Link className="mt-3 w-auto flex justify-center cursor-pointer bg-red-600 hover:bg-red-900 text-white px-6 py-2 rounded-md font-sans" href={'/'}>Ir a inicio</Link>
                    </div>
                }
            </div>
        </div>
    )

}

export default pagar;
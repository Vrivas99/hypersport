import Carrito from "@/components/Carrito";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";




const pagar = () =>{
    const [token,setToken] = useState()
    const [rp_code,setRPCODE] = useState()
    const [badtoken,setBToken] = useState()
    const [finish, setFinish] = useState(false);
    //conts [nombrevariable, funcionquelasetea] = useState(siquierespuedesponervaloresdefault)
    const [buy_order,setbuy_order] = useState();    
    const [amount,setamount] = useState();
    const [transaction_date,settransaction_date] = useState();   
    const router = useRouter()

    async function hola (){
        //GET

    }

    async function estado(Tkn){
        console.log('Tkn Estado:'+Tkn)
        try {
            const response = await axios.put('/api/webpay',{Tkn: Tkn})
            console.log('--------------------------')
            console.log('RESPONSE DEL ESTADO')
            console.log(response)
            console.log('codigo tran: ' + response.data.response_code)
            console.log('buy_order: ' + response.data.buy_order)
            console.log('amount: '+ response.data.amount)
            console.log('fecha transaccion: '+response.data.transaction_date)
            
            setRPCODE(response.data.response_code)
            setbuy_order(response.data.buy_order)
            setamount(response.data.amount)
            settransaction_date(response.data.transaction_date)

        } catch (error) {
            console.log('XXXXXXXXX SE CALLO LA AAAAA XXXXXXXXXXX')
        }
    }

    useEffect(() => {
        const urlQuery= new URLSearchParams(window.location.search)
        const Tkn = urlQuery.get("token_ws")
        const bTkn = urlQuery.get("TBK_TOKEN")
        console.log(`Token: ${Tkn}`)
        console.log(`TokenMalo: ${bTkn}`)
        setToken(Tkn)
        setBToken(bTkn)
        console.log(urlQuery)
        
        console.log('aaa: '+ finish)
        if (bTkn == null && finish == false) {
            estado(Tkn)
            setFinish(true);//A veces el proceso entra en bucle
        }else{
            router.push('/')
        }
     }, []);
    
    return (
        <div> 
        <div>{rp_code == -1 && <div>Transaccion abortada al final</div>}
             {rp_code == 0 && <div>Transaccion correcta</div>}
             {badtoken !== null && <div>Transaccion anulada al comienzo</div>}
        <div>Border: {buy_order}</div>
        <div>Monto: {amount}</div>
        <div>Fecha: {transaction_date}</div>
        </div>
        <div><Link href={'/'}>Volver a index</Link></div>
        </div>
    )

}

export default pagar;
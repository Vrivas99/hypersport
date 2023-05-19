import Carrito from '@/components/Carrito';
import { useAppContext } from '@/components/StateWrapper';
import { WebpayPlus } from 'transbank-sdk'; // ES6 Modules
import { Options, IntegrationApiKeys, Environment, IntegrationCommerceCodes } from 'transbank-sdk'; // ES6 Modules

export default async function handler(req, res) {
    switch (req.method) {
        case 'PUT':
            return await verTransaccion(req,res)
        case 'POST':
            return await crearTransaccion(req,res)
    }
}
const crearTransaccion = async (req, res) => {
    console.log('creating a token')
    console.log(req.body)
    const { buyO, sessID, amt, retUrl } = req.body
    var buyOrder = buyO;
    var sessionId = sessID;
    var amount = amt;
    var returnUrl = retUrl;
    const tx = new WebpayPlus.Transaction(new Options(IntegrationCommerceCodes.WEBPAY_PLUS, IntegrationApiKeys.WEBPAY, Environment.Integration));
    const response = await tx.create(buyOrder, sessionId, amount, returnUrl);
    return res.status(200).json(response)//url y el token de la transaccion
}

const verTransaccion = async(req,res) =>{
    console.log([req.body])
    const {Tkn} = req.body
    console.log('SERVIDOR: '+Tkn)
    const bx = new WebpayPlus.Transaction(new Options(IntegrationCommerceCodes.WEBPAY_PLUS, IntegrationApiKeys.WEBPAY, Environment.Integration));
    console.log("--------------------------------")
    console.log("Se hizo un bx.commit()")
    const response = await bx.commit(Tkn);
    
    return res.status(200).json(response)
}
import Carrito from '@/components/Carrito';
import { useAppContext } from '@/components/StateWrapper';
import { WebpayPlus } from 'transbank-sdk'; // ES6 Modules
import { Options, IntegrationApiKeys, Environment, IntegrationCommerceCodes } from 'transbank-sdk'; // ES6 Modules

export default async function handler(req, res) {
    switch (req.method) {
        case 'GET':
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
    return res.status(200).json(response)
}

const verTransaccion = async(req,res) =>{
    return res.status(200).json('Get para token')
}
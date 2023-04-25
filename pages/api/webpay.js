import { WebpayPlus } from 'transbank-sdk'; // ES6 Modules
import { Options, IntegrationApiKeys, Environment, IntegrationCommerceCodes } from 'transbank-sdk'; // ES6 Modules


export default async function handler(req,res) {
    var buyOrder = "O-" + Math.floor(Math.random() * 10000) + 1;
    var sessionId = "S-" + Math.floor(Math.random() * 10000) + 1;
    var amount = Math.floor(Math.random() * 1000) + 1001;
    var returnUrl = 'http://localhost:3000/';
    const tx = new WebpayPlus.Transaction(new Options(IntegrationCommerceCodes.WEBPAY_PLUS, IntegrationApiKeys.WEBPAY, Environment.Integration));
    const response = await tx.create(buyOrder, sessionId, amount, returnUrl);
    res.send(response)
}



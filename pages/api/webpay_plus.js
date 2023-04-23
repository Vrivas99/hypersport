// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { WebpayPlus } from 'transbank-sdk'; // ES6
import { Options, IntegrationApiKeys, Environment, IntegrationCommerceCodes } from 'transbank-sdk'; // ES6 Modules
import asyncHandler from '@/utils/async_handler';

/* export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
 */
/* export default async function handler(req,res) {
  //Variables
  let buyOrder = "O-" + Math.floor(Math.random() * 10000) + 1;
  let sessionId = "S-" + Math.floor(Math.random() * 10000) + 1;
  let amount = Math.floor(Math.random() * 1000) + 1001;
  let returnUrl = "http://localhost:3000/";
  //funcion
  const createResponse = await(new WebpayPlus.Transaction()).create(
    buyOrder,
    sessionId,
    amount,
    returnUrl
  );
} */
export default async function handler(req,res) {
  let buyOrder = "O-" + Math.floor(Math.random() * 10000) + 1;
  let sessionId = "S-" + Math.floor(Math.random() * 10000) + 1;
  let amount = Math.floor(Math.random() * 1000) + 1001;
  let returnUrl = "http://localhost:3000/";

  const tx = new WebpayPlus.Transaction(new Options(IntegrationCommerceCodes.WEBPAY_PLUS, IntegrationApiKeys.WEBPAY, Environment.Integration));
  const response = await tx.create(buyOrder, sessionId, amount, returnUrl);
  console.log(response);
  res.send(response);
}
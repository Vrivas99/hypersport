import Link from 'next/link'
import Navbar from '@/components/Navbar'
import { useEffect, useState } from 'react'

export default function Home() {
  const [tokenResponse, setToken] = useState([]);
  const [dataResponse, setdataResponse] = useState([]);
  useEffect(() => {
    async function getPageData() {
      const apiUrlEndpoint = 'http://localhost:3000/api/getdata'
      const response = await fetch(apiUrlEndpoint);
      const res = await response.json();
      console.log(res.productos);
      setdataResponse(res.productos);
    }

    async function getToken() {
      console.log("esta wea esta funcionando o no")
      const response = await fetch('http://localhost:3000/api/webpay_plus');
      const res = await response.json()
      console.log(res.token)
      setToken(res.token)
    }

    getPageData();
    getToken();
  }, []);
  return (
    <div>
      <Navbar />
      <h1>CHANCHITO FELIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIZ</h1>
      {dataResponse.map((productos) => { return (<div>nombre: {productos.NOMBRE}</div>) })}
      <div><form action="https://webpay3gint.transbank.cl/webpayserver/initTransaction" method="POST">
        <input type="hidden" name="token_ws" value= {tokenResponse} />
        <input type="submit" value="Pagar" />
      {tokenResponse}
      </form></div>
    </div>
  )
}

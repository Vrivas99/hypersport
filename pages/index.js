import Link from 'next/link'
import Navbar from '@/components/Navbar'
import { useEffect,useState } from 'react'

export default function Home() {
  const[dataResponse,setdataResponse] = useState([]);
  useEffect(() =>{
    async function getPageData(){
      const apiUrlEndpoint = 'http://localhost:3000/api/getdata'
      const response = await fetch(apiUrlEndpoint);
      const res = await response.json();
      console.log(res.productos);
      setdataResponse(res.productos);
    }
    getPageData();
  },[]);
  return (
    <div>
      <Navbar/>
      <h1>CHANCHITO FELIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIZ</h1>
      {dataResponse.map((productos)=>{return(<div>nombre: {productos.NOMBRE}</div>)})}
    </div>
  )
}

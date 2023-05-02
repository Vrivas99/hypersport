import Logo from '../public/img/fondoanime.jpg'
import Image from 'next/image'
import { React } from "react";

const BannersLogin = () => {
  return (

    <div className='flex flex-col md:flex-row h-screen items-center'>

      {/* Lado Izquierdo */}
      <div className='h-screen bg-blue-600 lg:block md:w-1/2 xl:w-2/3 h-screen'>
            <Image src={Logo} className='w-full h-full objet-cover'></Image>
      </div>

      {/* Lado derecho */}
      <div className='bg-white items-center justify-center flex md:mx-auto md:max-0 md:max-w-md lg:max-w-full w-full md:w-1/2 xl:w-1/3 px-6 lg:px-16 xl:px-12'>
        <div className='w-full h-100'>
          <h1 className='text-xl md:text-2x1  font-bold leanding-tight mt-12'>Registrate Aqui</h1> 

        {/* Formulario */}
          <form className='mt-6' action='#' method='POST'>

            <div>
              <label className='block text-gray-700'>Correo electronico</label>
              <input type='email' placeholder='Ingresa tu correo electronico' className='w-full bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none rounded-lg px-4 py-2' autocomplete autofocus required></input>
            </div>
            
            <div className='mt-4'>
              <label className='block text-gray-700'>Contrasena</label>
              <input type='password' minLength="6" placeholder='Ingresa tu contrasena' className='w-full bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none rounded-lg px-4 py-2' required></input>
            </div>

            <div className='mt-4'>
              <label className='block text-gray-700'>Confirmar Contrasena</label>
              <input type='password' minLength="6" placeholder='Confirmar contrasena' className='w-full bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none rounded-lg px-4 py-2' required></input>
            </div>

            <div className='text-right mt-2'>
              <a href='#' className='text-sm font-semibold text-gray-700 hover:text-blue-700'>Olvidaste tu contrasena?</a>
            </div>

            <button className='w-full block bg-blue-500 hover:bg-blue-400 px-4 py-3 mt-6 rounded-lg font-semibold text-white focus:bg-blue-400' type="submit">Registrarte</button>

            <hr className='my-6 border-gray-300 w-full'></hr>

            <div className='text-center mt-2'>
              <a href='login' className='text-sm font-semibold text-gray-700 hover:text-blue-700'>Ya tienes cuenta? Inicia Sesion Aqui!</a>
            </div>

          </form>

        </div>
      </div>
    </div>

  )
  
}

export default BannersLogin

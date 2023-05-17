import React from 'react'
import Logo from '../public/img/fondoanime.jpg'
import Image from 'next/image'
import Link from 'next/link';

const Registro = () => {
    function creteAcount() {

    }
    return (
        <div>

            <div className='flex flex-col md:flex-row items-center'>

                {/* Lado Izquierdo */}
                <div className='h-screen bg-blue-600 lg:block md:w-1/2 xl:w-2/3'>
                    <Image src={Logo} className='w-full h-full objet-cover' alt='imgReg'></Image>
                </div>

                {/* Lado derecho */}
                <div className='relative bg-white items-center justify-center flex md:mx-auto md:max-0 md:max-w-md lg:max-w-full w-full md:w-1/2 xl:w-1/3 px-6 lg:px-16 xl:px-12'>
                    <div className='cursor-pointer absolute -top-10 left-10 m-2 rounded-xl bg-purple-600 p-3 hover:bg-purple-800'>
                        <Link className=' text-white font-bold' href='/'>volver</Link>
                    </div>
                    <div className='w-full h-100'>
                        <h1 className='text-xl md:text-2x1  font-bold leanding-tight mt-12'>Registrate Aqui</h1>

                        {/* Formulario */}
                        <form className='mt-6' action='#' method='POST'>

                            <div>
                                <label className='block text-gray-700'>Correo electronico</label>
                                <input autoComplete='off' type='email' placeholder='Ingresa tu correo electronico' className='w-full bg-gray-200 mt-2 border focus:border-purple-500 focus:bg-white focus:outline-none rounded-lg px-4 py-2' autoFocus required></input>
                            </div>

                            <div className='mt-4'>
                                <label className='block text-gray-700'>Contrasena</label>
                                <input autoComplete='off' type='password' minLength="6" placeholder='Ingresa tu contrasena' className='w-full bg-gray-200 mt-2 border focus:border-purple-500 focus:bg-white focus:outline-none rounded-lg px-4 py-2' required></input>
                            </div>

                            <div className='mt-4'>
                                <label className='block text-gray-700'>Confirmar Contrasena</label>
                                <input autoComplete='off' type='password' minLength="6" placeholder='Confirmar contrasena' className='w-full bg-gray-200 mt-2 border focus:border-purple-500 focus:bg-white focus:outline-none rounded-lg px-4 py-2' required></input>
                            </div>

                            <button className='w-full block bg-purple-500 hover:bg-purple-400 px-4 py-3 mt-10 rounded-lg font-semibold text-white focus:bg-purple-400' type="submit">Registrarte</button>

                            <hr className='my-6 border-gray-300 w-full'></hr>

                            <div className='text-center mt-2'>
                                <Link href='login' className='text-sm font-semibold text-gray-700 hover:text-purple-600'>Ya tienes cuenta? Inicia Sesion Aqui!</Link>
                            </div>

                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Registro
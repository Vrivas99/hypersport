import Navbar from '@/components/Navbar'
import React from 'react'
import Link from 'next/link';

const errorMessage = {
    message: 'Falta ingreso de datos aqui'
}

const ResetPassword = () => {

    return (
        <div>
            <Navbar />
            <div className='flex flex-col md:flex-row h- items-center'>
                {/* Lado Izquierdo */}
                {/* Lado derecho */}
                <div className='relative bg-white items-center justify-center flex md:mx-auto md:max-0 md:max-w-md lg:max-w-full w-full md:w-1/2 xl:w-1/3 px-6 lg:px-16 xl:px-12 mt-20'>
                    {/* <div className='cursor-pointer absolute -top-10 left-10 m-2 rounded-xl bg-purple-600 p-3 hover:bg-purple-800'>
                    <Link className=' text-white font-bold' href='/'>volver</Link>
                </div> */}
                    <div className='w-full h-auto'>
                        <h1 className='text-xl md:text-2x1  font-bold leanding-tight mt-12'>¿Olvidaste tu contraseña?</h1>
                        <p className='mt-5'>
                            En este apartado puedes cambiar tu contraseña, necesitas ingresar tu usuario y la nueva contraseña que deseas.
                        </p>
                        {/* Formulario */}
                        <form  /* onSubmit={handleSumbit()} */ className='mt-6' action='#' method='POST'>
                            {/* Input Usuario */}
                            <div>
                                <label className='block text-gray-700'>Usuario</label>
                                <input type='' placeholder='Ingresa tu usuario'
                                    className='w-full bg-gray-200 mt-2 border focus:border-purple-500 focus:bg-white focus:outline-none rounded-lg px-4 py-2'
                                    autoComplete='true' autoFocus required>
                                </input>
                                <span className='text-red-500 hidden'>{errorMessage.message}</span>
                            </div>
                            {/* Input Contraseña */}
                            <div>
                                <label className='block text-gray-700'>Nueva contraseña</label>
                                <input type='password' placeholder='Ingresa la nueva contraseña'
                                    className='w-full bg-gray-200 mt-2 border focus:border-purple-500 focus:bg-white focus:outline-none rounded-lg px-4 py-2'
                                    autoComplete='true' autoFocus required>
                                </input>
                                <span className='text-red-500 hidden'>{errorMessage.message}</span>
                            </div>
                            <button className='w-full block bg-purple-500 hover:bg-purple-400 px-4 py-3 mt-6 rounded-lg font-semibold text-white focus:bg-purple-400' type="submit">Restablecer contraseña</button>
                            <hr className='my-6 border-gray-300 w-full'></hr>
                            <div className='text-center mt-2'>
                                <Link href='registro' className='text-sm font-semibold text-gray-700 hover:text-purple-600'>¿No tienes cuenta? Registrate Aqui!</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>



    )
}

export default ResetPassword

/* <div className='mt-4'>
                            <label className='block text-gray-700'>contraseña</label>
                            <input type='password' minLength="6"
                                placeholder='Ingresa tu contraseña'
                                className='w-full bg-gray-200 mt-2 border focus:border-purple-500 focus:bg-white focus:outline-none rounded-lg px-4 py-2'
                                required autoComplete='true'></input>
                        </div>
                        <div className='text-right mt-2'>
                            <Link href='#' className='text-sm font-semibold text-gray-700 hover:text-purple-600'>Olvidaste tu contraseña?</Link>
                        </div>
             https://www.youtube.com/watch?v=QrVYLLpoyMw
            async function handleSubmit(e) {
            e.preventDefault();
            const formData = {}
            Array.from(e.currentTarget.elements)
            https://www.youtube.com/watch?v=Sscmll9lqDc
        } 
    import {
    Container,
    FormControl,
    FormLabel,
    Heading,
    Input,
} from '@chakra-ui/react'; 
         
        */
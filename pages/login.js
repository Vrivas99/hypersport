import React, { useRef, useState } from 'react'
import Logo from '../public/img/fondoanime.jpg'
import Image from 'next/image'
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/router';
import { Alert } from "reactstrap";


/* import probando from '../pages/api/mysql/probando' */
const errorMessage = {
    message: 'Falta ingreso de datos aqui'
}


export default function Login() {
    const router = useRouter();
    const emailInput = useRef();
    const passwordInput = useRef();
    const [showAlert, setShowAlert] = useState(false);


    const handleSumbit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/auth/login', { email: emailInput.current.value, cont: passwordInput.current.value })
            console.log(response)
            router.push('/')
        } catch (error) {
            setShowAlert(true);
            router.push('/login')

        }
        /*    const email = emailInput.current.value;
        const password = passwordInput.current.value;
        
        const response = await fetch('./api/session', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({email,password})
        });

        if (response.ok){

            return router.push("/");
        } */
    }

    return (
        <div className='flex flex-col md:flex-row items-center align-middle'>
            {/* Lado Izquierdo */}
            <div className='hidden lg:block h-screen lg:w-1/2 xl:w-2/3 '>
                <Image src={Logo} className='w-full h-full object-center' alt='imgLog'></Image>
            </div>
            {/* Lado derecho */}
            <div className=' bg-white items-center justify-center h-screen flex flex-col md:mx-auto md:max-0 md:max-w-md lg:max-w-full w-full md:w-1/2 xl:w-1/3 px-6 lg:px-16 xl:px-12'>
                <div className='relative w-full h-auto'>
                    <Link href='/' className='absolute -top-10 -left-2 cursor-pointer m-2 rounded-xl bg-purple-600 p-3 hover:bg-purple-800'>
                        <p className=' text-white font-bold'>volver</p>
                    </Link>
                    <h1 className='text-xl md:text-2x1  font-bold leanding-tight mt-12'>Inicia sesion con tu cuenta</h1>

                    {showAlert && (
                        <div className='bg-red-300 flex justify-center p-2 mt-2 rounded-lg'>
                            <Alert color="danger" className=''>
                                <strong>Correo o contraseña incorrecta</strong>
                            </Alert>
                        </div>
                    )}
                    {/* Formulario */}
                    {/*           <div><button className= 'w-full block bg-green-500' onClick={hola}>dame usuarios</button></div>*/}
                    <form onSubmit={handleSumbit} className='mt-3'>
                        <div>
                            <label className='block text-gray-700'>Correo electronico</label>
                            <input ref={emailInput} id="mail" type='email' placeholder='Ingresa tu correo electronico'
                                className='w-full bg-gray-200 mt-2 border focus:border-purple-500 focus:bg-white focus:outline-none rounded-lg px-4 py-2'
                                autoComplete='true' autoFocus required
                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$">
                            </input>
                            <span className='text-red-500 hidden'>{errorMessage.message}</span>
                        </div>
                        <div className='mt-4'>
                            <label className='block text-gray-700'>Contraseña</label>
                            <input ref={passwordInput} id='passw' type='password' minLength="6"
                                placeholder='Ingresa tu contrasena'
                                className='w-full bg-gray-200 mt-2 border focus:border-purple-500 focus:bg-white focus:outline-none rounded-lg px-4 py-2'
                                required autoComplete='true'></input>
                        </div>
                        <div className='text-right mt-2'>
                            <Link href='resetPassword' className='text-sm font-semibold text-gray-700 hover:text-purple-600'>Olvidaste tu contraseña?</Link>
                        </div>
                        <button className='w-full block bg-purple-500 hover:bg-purple-400 px-4 py-3 mt-6 rounded-lg font-semibold text-white focus:bg-purple-400' type="submit" href="/">Ingresar</button>
                        <hr className='my-6 border-gray-300 w-full'></hr>
                        <div className='text-center mt-2'>
                            <Link href='registro' className='text-sm font-semibold text-gray-700 hover:text-purple-600'>¿No tienes cuenta? Registrate Aqui!</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>


    )
}

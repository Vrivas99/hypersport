import React, { useState, useRef } from 'react'
import Logo from '../public/img/fondoanime.jpg'
import Image from 'next/image'
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/router';
import { Alert } from "reactstrap";



const Registro = () => {

    const router = useRouter();
    const emailInput = useRef();
    const passwordInput = useRef();
    const passwordInput2 = useRef();
    const [showAlertpas, setShowAlertPas] = useState(false);
    const [showAlertCor, setShowAlertCor] = useState(false);




    /*     async function creteAcount() {
            if (contrasenna == contrasenna2) {
                const [res] = await axios.post('/api/usuario', {
                    correo: correo,
                    contrasenna: contrasenna
                })
    
            } else {
                console.log('contrasenas no coinciden')
            }
        }
    
        function lockData() {
            setCorreo(document.getElementById('mail').value);
            setContrasenna(document.getElementById('pas').value);
            setContrasenna2(document.getElementById('pas2').value);
        } */

    async function creteAcount(e) {
        e.preventDefault();
        try {
            const response = await axios.post('/api/auth/registro', { correo: emailInput.current.value })
            if (passwordInput.current.value === passwordInput2.current.value) {
                const res = await axios.post('/api/usuario', {
                    correo: emailInput.current.value,
                    contrasenna: passwordInput.current.value
                })
                console.log(res)
                router.push('/login')
            } else {
                console.log('contrasenas no coinciden')
                console.log(passwordInput.current.value)
                console.log(passwordInput2.current.value)
                setShowAlertPas(true);
                setShowAlertCor(false);
            }
        } catch (e) {
            console.log(e)
            setShowAlertCor(true);
            setShowAlertPas(false);
        }
    }

    return (
        <div>
            <div className='flex flex-col md:flex-row items-center align-middle'>
                {/* Lado Izquierdo */}
                <div className='hidden lg:block h-screen lg:w-1/2 xl:w-2/3 '>
                    <Image src={Logo} className='w-full h-full objet-cover' alt='imgReg'></Image>
                </div>
                {/* Lado derecho */}
                <div className='  bg-white items-center justify-center h-screen flex flex-col md:mx-auto md:max-0 md:max-w-md lg:max-w-full w-full md:w-1/2 xl:w-1/3 px-6 lg:px-16 xl:px-12'>
                    <div className='relative w-full h-auto'>
                        <Link href='/' className='absolute -top-10 -left-2 cursor-pointer m-2 rounded-xl bg-purple-600 p-3 hover:bg-purple-800'>
                            <p className=' text-white font-bold'>volver</p>
                        </Link>
                        <h1 className='text-xl md:text-2x1  font-bold leanding-tight mt-12'>Registrate Aqui</h1>
                        {/* Formulario */}
                        {showAlertpas && (
                            <div className='bg-red-300 flex justify-center p-2 mt-3 rounded-lg'>
                                <Alert color="danger" className=''>
                                    <strong>Las contraseñas deben ser iguales</strong>
                                </Alert>
                            </div>
                        )}
                        {showAlertCor && (
                            <div className='bg-red-300 flex justify-center p-2 mt-3 rounded-lg'>
                                <Alert color="danger" className=''>
                                    <strong>Este usuario ya existe</strong>
                                </Alert>
                            </div>
                        )}
                        <form onSubmit={creteAcount} className='mt-3' method='POST'>
                            <div>
                                <label className='block text-gray-700'>Correo electronico</label>
                                <input ref={emailInput} id='mail' autoComplete='off' type='email' placeholder='Ingresa tu correo electronico' className='w-full bg-gray-200 mt-2 border focus:border-purple-500 focus:bg-white focus:outline-none rounded-lg px-4 py-2' autoFocus required></input>
                            </div>
                            <div className='mt-4'>
                                <label className='block text-gray-700'>Contraseña</label>
                                <input ref={passwordInput} id='pas' autoComplete='off' type='password' minLength="6" placeholder='Ingresa tu contrasena' className='w-full bg-gray-200 mt-2 border focus:border-purple-500 focus:bg-white focus:outline-none rounded-lg px-4 py-2' required></input>
                            </div>
                            <div className='mt-4'>
                                <label className='block text-gray-700'>Confirmar Contraseña</label>
                                <input ref={passwordInput2} id='pas2' autoComplete='off' type='password' minLength="6" placeholder='Confirmar contrasena' className='w-full bg-gray-200 mt-2 border focus:border-purple-500 focus:bg-white focus:outline-none rounded-lg px-4 py-2' required></input>
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
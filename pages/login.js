import React from 'react'
import Logo from '../public/img/fondoanime.jpg'
import Image from 'next/image'
import Link from 'next/link';
import axios from 'axios';
import Cookies from 'js-cookie';
import Router from 'next/router';

/* import probando from '../pages/api/mysql/probando' */
const errorMessage = {
    message: 'Falta ingreso de datos aqui'
}

const logout = () => {
    Cookies.remove('loggedin');
    Router.push('/') // cambiar el router por 
};


async function hola(){
    try {
        const ax = await axios.get('api/mysql/probando?'); // conexion api mysql
        const data = ax.data; // se pasa a la variable 'data' los datos de mysql
        const correoForm = document.getElementById("logcorreo").value; // recupera el dato del campo 'correo electronico'
        const contraForm = document.getElementById("logcontra").value; // recupera el dato del campo 'contrasenna'
        console.log('Element correo: ' + correoForm + ', contraseña: ' + contraForm); // muestra input correo y contrasena
        
        for (let i = 0; i < data.length; i++) {
          const correoData = data[i].CORREO; // pasa los datos de la variable correo a una variable llamada correo
          const contraData = data[i].CONTRASENNA; // pasa los datos de la variable correo a una variable llamada correo

            if (correoForm.toLowerCase() == correoData.toLowerCase()) // variables string a LoweCase para comparar mejor
                console.log('Correo encontrado en la mase de datos: ' + correoData);
                    if (contraForm == contraData) // Verificar contrasenna
                        console.log('Contraseña encontrada en la mase de datos: ' + contraData);
        }
      } catch (error) {
        console.log(error);
      }
}

const Login = () => {

    return (
        <div className='flex flex-col md:flex-row h- items-center'>
            {/* Lado Izquierdo */}
            <div className='h-screen md:w-1/2 xl:w-2/3 '>
                <Image src={Logo} className='w-full h-full object-center' alt='imgLog'></Image>
            </div>
            {/* Lado derecho */}
            <div className='relative bg-white items-center justify-center flex md:mx-auto md:max-0 md:max-w-md lg:max-w-full w-full md:w-1/2 xl:w-1/3 px-6 lg:px-16 xl:px-12'>
                <div className='cursor-pointer absolute -top-10 left-10 m-2 rounded-xl bg-purple-600 p-3 hover:bg-purple-800'>
                    <Link className=' text-white font-bold' href='/'>volver</Link>
                </div>
                <div className='w-full h-auto'>
                    <h1 className='text-xl md:text-2x1  font-bold leanding-tight mt-12'>Inicia sesion con tu cuenta</h1>
                    {/* Formulario */}  
                    <div><button className= 'w-full block bg-green-500' onClick={hola}>dame usuarios</button></div>
                    <div><button className= 'w-full block bg-purple-500' onClick={logout}>cerrar sesion</button></div>
                    <form className='mt-6' action='#' method='POST'>
                        <div>
                            <label className='block text-gray-700'>Correo electronico</label>
                            <input id="logcorreo" type='email' placeholder='Ingresa tu correo electronico'
                                className='w-full bg-gray-200 mt-2 border focus:border-purple-500 focus:bg-white focus:outline-none rounded-lg px-4 py-2'
                                autoComplete='true' autoFocus required
                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$">
                            </input>
                            <span className='text-red-500 hidden'>{errorMessage.message}</span>
                        </div>
                        <div className='mt-4'>
                            <label className='block text-gray-700'>Contraseña</label>
                            <input id='logcontra' type='password' minLength="6"
                                placeholder='Ingresa tu contrasena'
                                className='w-full bg-gray-200 mt-2 border focus:border-purple-500 focus:bg-white focus:outline-none rounded-lg px-4 py-2'
                                required autoComplete='true'></input>
                        </div>
                        <div className='text-right mt-2'>
                            <Link href='resetPassword' className='text-sm font-semibold text-gray-700 hover:text-purple-600'>Olvidaste tu contraseña?</Link>
                        </div>
                        <button className='w-full block bg-purple-500 hover:bg-purple-400 px-4 py-3 mt-6 rounded-lg font-semibold text-white focus:bg-purple-400' type="submit">Ingresar</button>
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

export default Login
import React from 'react'

const Formarioagregarusuario = () => {
    
  return (
    <div>
            <form onSubmit={agregarValor} action="POST" className='w-full max-w-lg"'>
                <div className="flex flex-wrap -mx-3 mb-6">

                    <div className="w-full px-3">
                        <div className='relative'>
                            <p className="text-red-500 text-xs italic absolute -left-2 -top-1">*</p>
                            <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2" for="grid-correo">Correo</label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-correo" placeholder="user@gmail.com" type='email' required></input>
                        </div>
                    </div>

                    <div className="w-full px-3">
                        <div className='relative'>
                            <p className="text-red-500 text-xs italic absolute -left-2 -top-1">*</p>
                            <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2" for="grid-password">Contraseña</label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" placeholder="Ingrese Contraseña" type='password' minLength="4" maxLength="25" required></input>
                        </div>
                    </div>

                    <div className="w-full px-3">
                        <div className='relative'>
                            <p className="text-red-500 text-xs italic absolute -left-2 -top-1">*</p>
                            <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2" for="grid-passwo-rd">Confirmar Contraseña</label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" placeholder="Repita Su Contraseña" type='password' minLength="4" maxLength="25" required></input>
                        </div>
                    </div>
                </div>
            </form>
        </div>
  )
}

export default Formarioagregarusuario
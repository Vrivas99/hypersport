import React from 'react'

const Formarioagregarusuario = ({ agregarValor }) => {
    return (
        <div>
            <form onSubmit={agregarValor} action="POST" className='w-full max-w-lg"'>
                <div className="flex flex-wrap -mx-3 mb-6">

                    <div className="w-full px-3">
                        <div className='relative'>
                            <p className="text-red-500 text-xs italic absolute -left-2 -top-1">*</p>
                            <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2" htmlFor="grid-correo">Correo</label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-correo" placeholder="user@gmail.com" type='email' required></input>
                        </div>
                    </div>

                    <div className="w-full px-3">
                        <div className='relative'>
                            <p className="text-red-500 text-xs italic absolute -left-2 -top-1">*</p>
                            <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2" htmlFor="grid-password">Contraseña</label>
                            <input autoComplete='off' className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" placeholder="Ingrese Contraseña" type='password' required></input>
                        </div>
                    </div>

                    <div className="w-full px-3">
                        <div className='relative'>
                            <p className="text-red-500 text-xs italic absolute -left-2 -top-1">*</p>
                            <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2" htmlFor="grid-passwo-rd">Confirmar Contraseña</label>
                            <input autoComplete='off' className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password2" placeholder="Repita Su Contraseña" type='password' required></input>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Formarioagregarusuario
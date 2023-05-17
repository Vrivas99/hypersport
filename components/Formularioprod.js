import axios from 'axios'
import React from 'react'

function Formularioprod({ data }) {

    //aca tenemos que hacer el PATCH - mña jspablo
    async function makePUT(event) {
        event.prevenDefault()
        const ab = await axios.patch('', {})
    }
    console.log(data)
    const cat = data[6]
    return (
        <div>
            <form action="POST" className='w-full max-w-lg"'>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <div className='relative'>
                            <p className="text-red-500 text-xs italic absolute -left-2 -top-1">*</p>
                            <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2" htmlFor="grid-nombre">Nombre Producto</label>
                            <input defaultValue={data[1]} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" placeholder="Balon de Futbol" required></input>
                        </div>
                    </div>
                    <div className="w-full px-3">
                        <div className='relative'>
                            <p className="text-red-500 text-xs italic absolute -left-2 -top-1">*</p>
                            <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2" htmlFor="grid-nombre">Url Imagen</label>
                            <input defaultValue={data[7]} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" placeholder="Balon de Futbol" required></input>
                        </div>
                    </div>
                    <div className="w-full px-3">
                        <div className='relative'>
                            <p className="text-red-500 text-xs italic absolute -left-2 -top-1">*</p>
                            <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2" htmlFor="grid-nombre">Descripcion</label>
                            <textarea defaultValue={data[2]} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type='Text' placeholder="Ingrese detalles o datos del producto" cols="30" rows="10" required></textarea>
                        </div>
                    </div>
                    <div className="w-full px-3">
                        <div className='relative'>
                            <p className="text-red-500 text-xs italic absolute -left-2 -top-1">*</p>
                            <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2" htmlFor="grid-categoria">Categoria</label>
                        </div>
                        <div className="relative">
                            <select defaultValue={cat} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                <option>Futbol</option>
                                <option>Tennis</option>
                                <option>Basquetball</option>
                                <option>Volleyball</option>
                                <option>Hockey</option>
                                <option>Ciclismo</option>
                                <option>Baseball</option>
                                <option>Golf</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <div className='relative'>
                            <p className="text-red-500 text-xs italic absolute -left-2 -top-1">*</p>
                            <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2" htmlFor="grid-precio">Precio</label>
                            <input defaultValue={data[3]} className="appearance-none block w-full bg-gray-200 text-gray-400 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-precio" type="number" placeholder="3550" required></input>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <div className='relative'>
                            <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2" htmlFor="grid-descuento">Descuento</label>
                            <input defaultValue={data[4]} className="appearance-none block w-full bg-gray-200 text-gray-400 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-descuento" type="number" placeholder="0"></input>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <div className='relative'>
                            <p className="text-red-500 text-xs italic absolute -left-2 -top-1">*</p>
                            <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2" htmlFor="grid-stock">Stock</label>
                            <input defaultValue={data[5]} className="appearance-none block w-full bg-gray-200 text-gray-400 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-stock" type="number" placeholder="25" required></input>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Formularioprod
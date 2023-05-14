import React, { useState } from 'react';

const Formularioagregarprod = () => {
  const [categoria, setCategoria] = useState('');

  const CambioDeCategoria = (categoria) => {
    console.log(categoria.target.value);
    setCategoria(categoria.target.value);
  };

    return (
    <div>
            <form action="POST" className='w-full max-w-lg"'>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <div className='relative'>
                            <p className="text-red-500 text-xs italic absolute -left-2 -top-1">*</p>
                            <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2" for="grid-nombre">Nombre Producto</label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" placeholder="Balon de Futbol" required></input>
                        </div>
                    </div>
                    <div className="w-full px-3">
                        <div className='relative'>
                            <p className="text-red-500 text-xs italic absolute -left-2 -top-1">*</p>
                            <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2" for="grid-nombre">Url Imagen</label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" placeholder="Balon de Futbol" required></input>
                        </div>
                    </div>
                    <div className="w-full px-3">
                        <div className='relative'>
                            <p className="text-red-500 text-xs italic absolute -left-2 -top-1">*</p>
                            <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2" for="grid-nombre">Descripcion</label>
                            <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type='Text' placeholder="Ingrese detalles o datos del producto" cols="30" rows="5" required></textarea>
                        </div>
                    </div>
                    <div className="w-full px-3">
                        <div className='relative'>
                            <p className="text-red-500 text-xs italic absolute -left-2 -top-1">*</p>
                            <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2" for="grid-categoria">Categoria</label>
                        </div>
                        <div className="relative">
                            <select value={categoria} onChange={CambioDeCategoria} class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                <option selected value>.....</option>
                                <option value="1">Tennis</option>
                                <option value="2">Golf</option>                            
                                <option value="3">Hockey</option>
                                <option value="4">Volleyball</option>
                                <option value="5">Baseball</option>
                                <option value="6">Basquetball</option>
                                <option value="7">Futbol</option>
                                <option value="8">Ciclismo</option>
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
                            <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2" for="grid-precio">Precio</label>
                            <input  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-precio" type="number" placeholder="3550" required></input>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <div className='relative'>
                            <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2" for="grid-descuento">Descuento</label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-descuento" type="number" placeholder="0"></input>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <div className='relative'>
                            <p className="text-red-500 text-xs italic absolute -left-2 -top-1">*</p>
                            <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2" for="grid-stock">Stock</label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-stock" type="number" placeholder="25" required></input>
                        </div>
                    </div>
                </div>
            </form>
        </div>
  )
}


export default Formularioagregarprod


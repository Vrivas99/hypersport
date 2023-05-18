import axios from 'axios';
import Link from 'next/link';
import React, { useState } from 'react';



const Formularioagregarprod = () => {
    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
    const [img, setImg] = useState('');
    const [Descu, setDescu] = useState('');
    const [descripcion, setDescrip] = useState('');
    const [originalPrice, setOPrice] = useState('');
    const [cantidad, setCant] = useState('');
    const [marca, setMarc] = useState('');
    const [categoria, setCategoria] = useState('');

    async function agregarValor(event) {
        console.log('setTitle:', title)
        console.log('setImg:', img)
        console.log('setDescu:', Descu)
        console.log('setDescrip:', descripcion)
        console.log('setOPrice:', originalPrice)
        console.log('setCant:', cantidad)
        console.log('setMarc:', marca)
        console.log('Posteando un producto')
        event.preventDefault()
        const element = await axios.post('api/mysql', {
            nombre: title,
            img: img,
            descu: Descu,
            descri: descripcion,
            prices: originalPrice,
            cantidad: cantidad,
            marca: marca,
            categoria: categoria,
        });
    }

    function lockData() {
        setTitle(document.getElementById('tit').value);
        setImg(document.getElementById('ulr').value);
        setDescu(document.getElementById('desco').value);
        setDescrip(document.getElementById('des').value);
        setOPrice(document.getElementById('prec').value);
        setCant(document.getElementById('stok').value);
        setMarc(document.getElementById('tit').value);
        console.log('--se setiaron las variables--')
    }

    const CambioDeCategoria = (categoria) => {
        console.log(categoria.target.value);
        setCategoria(categoria.target.value);
    };

    return (
        <div>
            <form onSubmit={agregarValor} method="POST" className='w-full max-w-lg"'>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <div className='relative'>
                            <p className="text-red-500 text-xs italic absolute -left-2 -top-1">*</p>
                            <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2" htmlFor="grid-nombre">Nombre Producto</label>
                            <input id='tit' defaultValue={title} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Balon de Futbol" required></input>
                        </div>
                    </div>
                    <div className="w-full px-3">
                        <div className='relative'>
                            <p className="text-red-500 text-xs italic absolute -left-2 -top-1">*</p>
                            <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2" htmlFor="grid-nombre">Url Imagen</label>
                            <input id='ulr' defaultValue={img} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Balon de Futbol" required></input>
                        </div>
                    </div>
                    <div className="w-full px-3">
                        <div className='relative'>
                            <p className="text-red-500 text-xs italic absolute -left-2 -top-1">*</p>
                            <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2" htmlFor="grid-nombre">Descripcion</label>
                            <textarea id='des' defaultValue={descripcion} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type='Text' placeholder="Ingrese detalles o datos del producto" cols="30" rows="5" required></textarea>
                        </div>
                    </div>
                    <div className="w-full px-3">
                        <div className='relative'>
                            <p className="text-red-500 text-xs italic absolute -left-2 -top-1">*</p>
                            <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2" htmlFor="grid-categoria">Categoria</label>
                        </div>
                        <div className="relative">
                            <select value={categoria} onChange={CambioDeCategoria} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
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
                            <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2" htmlFor="grid-precio">Precio</label>
                            <input id='prec' defaultValue={originalPrice} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="number" placeholder="3550" required></input>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <div className='relative'>
                            <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2" htmlFor="grid-descuento">Descuento</label>
                            <input id='desco' defaultValue={Descu} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="number" placeholder="0"></input>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <div className='relative'>
                            <p className="text-red-500 text-xs italic absolute -left-2 -top-1">*</p>
                            <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2" htmlFor="grid-stock">Stock</label>
                            <input id='stok' defaultValue={cantidad} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="number" placeholder="25" required></input>
                        </div>
                    </div>
                </div>
                <div className='items-center'>
                    <Link href="/adminPage" className='mt-10 mr-3 flex float-left justify-center cursor-pointer bg-red-600 hover:bg-red-900 text-white px-6 py-2 rounded-md font-sans' type='submite'>Volver</Link>
                    <button href="/adminPage" onClick={lockData} className='mt-10 ml3 flex float-right justify-center cursor-pointer bg-green-600 hover:bg-green-900 text-white px-6 py-2 rounded-md font-sans' type='submite'>Guardar</button>
                </div>
            </form>

        </div>
    )
}


export default Formularioagregarprod


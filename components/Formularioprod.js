import axios from 'axios'
import Link from 'next/link'
import React, { useState } from 'react'
import { useRouter } from 'next/router'

function Formularioprod({ data }) {
    const [ide, setID] = useState('');
    const [errors, setErrors] = useState({});
    const [product, setProd] = useState({
        titulo: '',
        descripcion: '',
        img: '',
        descuento: '',
        price: '',
        cantidad: '',
        categoria: '',
    });
    const val = data[0]
    const router = useRouter()

    async function handlePatch(e) {
        e.preventDefault()
        if (validateForm()) {
            console.log(product)
            const id = ide
            const res = await axios.put('api/mysql', { id, product });
            router.push('/adminPage')
        }
        
    }
    
    function lockdata() {
        console.log('valor: ' + val)
        const expr = document.getElementById('cate').value
        var place;
        switch (expr) {
            case 'Futbol':
                place = 7
                break;
            case 'Tennis':
                place = 1
                break;
            case 'Basquetball':
                place = 6
                break;
            case 'Volleyball':
                place = 4
                break;
            case 'Hockey':
                place = 3
                break
            case 'Ciclismo':
                place = 8
                break;
            case 'Baseball':
                place = 5
                break;
            case 'Golf':
                place = 2
                break
            default:
                break
        }
        setID(val)
        setProd({
            titulo: document.getElementById(1).value,
            descripcion: document.getElementById(3).value,
            img: document.getElementById(2).value,
            descuento: document.getElementById(5).value,
            price: document.getElementById(4).value,
            cantidad: document.getElementById(6).value,
            categoria: place,
        })
    }
    function validateForm() {
        const errors = {};
        if (!product.titulo) {
            errors.titulo = 'El campo Nombre Producto es obligatorio';
        }
        if (!product.descripcion) {
            errors.descripcion = 'El campo Descripción es obligatorio';
        }
        if (!product.descuento) {
            errors.descuento = 'El campo Descuento es obligatorio';
        }
        if (!product.img) {
            errors.img = 'El campo Url Imagen es obligatorio';
        }
        if (!product.price) {
            errors.price = 'El campo Precio es obligatorio';
        }
        if (!product.cantidad) {
            errors.cantidad = 'El campo Stock es obligatorio';
        }
        setErrors(errors);

        // Retorna true si no hay errores, false en caso contrario
        return Object.keys(errors).length === 0;
    }

    return (
        <div>
            <form onSubmit={handlePatch} className='w-full max-w-lg"'>
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                        <div className='relative'>
                            <p class="text-red-500 text-xs italic absolute -left-2 -top-1">*</p>
                            <label class="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2" for="grid-nombre">Nombre Producto</label>
                            <input id='1' defaultValue={data[1]} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Balon de Futbol" ></input>
                            {errors.titulo && <p className="pt-0 pb-2 text-red-500 text-xs italic">{errors.titulo}</p>}
                        </div>
                    </div>
                    <div class="w-full px-3">
                        <div className='relative'>
                            <p class="text-red-500 text-xs italic absolute -left-2 -top-1">*</p>
                            <label class="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2" for="grid-nombre">Url Imagen</label>
                            <input id='2' defaultValue={data[7]} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Balon de Futbol" ></input>
                            {errors.img && <p className="pt-0 pb-2 text-red-500 text-xs italic">{errors.img}</p>}
                        </div>
                    </div>
                    <div class="w-full px-3">
                        <div className='relative'>
                            <p class="text-red-500 text-xs italic absolute -left-2 -top-1">*</p>
                            <label class="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2" for="grid-nombre">Descripcion</label>
                            <textarea id='3' defaultValue={data[2]} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type='Text' placeholder="Ingrese detalles o datos del producto" cols="20" rows="5" ></textarea>
                            {errors.descripcion && <p className="pt-0 pb-2 text-red-500 text-xs italic">{errors.descripcion}</p>}
                        </div>
                    </div>
                    <div class="w-full px-3">
                        <div className='relative'>
                            <p class="text-red-500 text-xs italic absolute -left-2 -top-1">*</p>
                            <label class="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2" for="grid-categoria">Categoria</label>
                        </div>
                        <div class="relative">
                            <select id='cate' defaultValue={data[6]} class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" >
                                <option>Futbol</option>
                                <option>Tennis</option>
                                <option>Basquetball</option>
                                <option>Volleyball</option>
                                <option>Hockey</option>
                                <option>Ciclismo</option>
                                <option>Baseball</option>
                                <option>Golf</option>
                            </select>
                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-2">
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <div className='relative'>
                            <p class="text-red-500 text-xs italic absolute -left-2 -top-1">*</p>
                            <label class="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2" for="grid-precio">Precio</label>
                            <input id='4' defaultValue={data[3]} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="number" placeholder="3550"></input>
                            {errors.price && <p className="pt-1 pb-2 text-red-500 text-xs italic">{errors.price}</p>}
                        </div>
                    </div>
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <div className='relative'>
                            <label class="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2" for="grid-descuento">Descuento</label>
                            <input id='5' defaultValue={data[4]} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="number" placeholder="0"></input>
                            {errors.descuento && <p className="pt-1 pb-2 text-red-500 text-xs italic">{errors.descuento}</p>}
                        </div>
                    </div>
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <div className='relative'>
                            <p class="text-red-500 text-xs italic absolute -left-2 -top-1">*</p>
                            <label class="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2" for="grid-stock">Stock</label>
                            <input id='6' defaultValue={data[5]} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="number" placeholder="25"></input>
                            {errors.cantidad && <p className="pt-1 pb-2 text-red-500 text-xs italic">{errors.cantidad}</p>}
                        </div>
                    </div>
                    <div className='items-center'>
                        <Link href="/adminPage" className='mt-10 mr-3 flex float-left justify-center cursor-pointer bg-red-600 hover:bg-red-900 text-white px-6 py-2 rounded-md font-sans' type='submite'>Volver</Link>
                        <button onClick={lockdata} className='mt-10 ml3 flex float-right justify-center cursor-pointer bg-green-600 hover:bg-green-900 text-white px-6 py-2 rounded-md font-sans' type='submite'>Guardar</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Formularioprod
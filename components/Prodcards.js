import { convertToPath } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import Cardbtn from "./Cardbtn";
import { useAppContext } from "./StateWrapper"
import remove from '../public/img/delete-icon.svg'
import Image from "next/image";

export default function CardComponent({ item, showAs, qty = 0 }) {
    const cart = useAppContext()

    function removeToCart() {
        cart.delItemToCart(item);
        //Revisar eliminacion de productos en carrito
    }
    if (showAs === 'Page') {
        return (
            <div className="grid grid-cols-1 gap-4 place-items-center xl:mt-[5%] md:mt-[10%]">
                <div className="bg-white p-10 md:flex shadow-2xl max-w-7xl h-full rounded-lg">
                    <div className=" xl:min-w-[800px] xl:w-[800px] md:min-w-[500px] md:w-[500px]">
                        <img className="object-scale-down scale-90 hover:scale-100 ease-in duration-500" src={item.img} alt='Imagen Prod' width={800} height={800} />
                    </div>
                    <div className="grid grid-cols-1 gap-5">
                        <div>
                            <h5 className=" text-3xl text-slate-900" title={item.title}>{item.title}</h5>
                        </div>
                        <div className="font-bold text-3xl m-3">${item.price}</div>
                        <div>{item.descripcion}</div>
                        <Cardbtn item={item} />
                    </div>
                </div>
            </div>
        )
    }
    if (showAs === 'ListItem') {
        return (
            <div className="relative flex gap-2 border rounded-lg mb-2 border-gray-300 shadow-md p-3">
                <div>
                    <img className="scale-90 min-w-[100px]" src={item.img} alt='Imagen Prod' width={100} height={100} />
                </div>
                <div>
                    <div className=" font-bold">{item.title}</div>
                    <div>Precio C/U: ${item.price}</div>
                    {qty === 0 ? '' : <div>Unidades: {qty}</div>}
                    {qty === 0 ? '' : <div className=" font-semibold">Subtotal: ${qty * item.price}</div>}
                </div>
                <button onClick={removeToCart} className="absolute bottom-10 right-10 flex w-8 items-center justify-center rounded bg-red-600">
                    <Image src={remove} alt='removeimg'></Image>
                </button>
            </div>
        )
    }
    return (
        <>
            <div className="relative flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md m-3">
                <Link className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href={`/${convertToPath(item.title)}`}>
                    <img className="object-scale-down scale-90 hover:scale-100 ease-in duration-500" src={item.img} alt='Imagen Prod' />
                    <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">{item.Desc}</span>
                </Link>
                <div className="mt-4 px-5 pb-5">
                    <Link href={`/${convertToPath(item.title)}`}>
                        <h5 className="truncate hover:text-clip text-xl text-slate-900" title={item.title}>{item.title}</h5>
                    </Link>
                    <div className="mt-2 mb-5 flex items-center justify-between">
                        <p>
                            <span className="text-3xl font-bold text-slate-900">${item.price}</span>
                            <span className="text-sm text-slate-900 line-through">${item.originalPrice}</span>
                        </p>
                    </div>
                    <Cardbtn item={item} />
                </div>
            </div>
        </>
    );
    
}
import { convertToPath } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import Cardbtn from "./Cardbtn";
import { useAppContext } from "./StateWrapper"

export default function CardComponent({ price, item, showAs, qty = 0 }) {
    const cart = useAppContext()

    function removeToCart() {
        cart.delItemToCart(item);
        //Revisar eliminacion de productos en carrito
    }
    function addToCart() {
        cart.addItemToCart(item);
    }

    function calPrice() {
        price = Math.floor(item.originalPrice - item.originalPrice * item.Descu / 100)
        return price;
    }
    if (showAs === 'Page') {
        return (
            <div className="grid grid-cols-1 gap-4 place-items-center mt-[3%]">
                <div className="bg-white p-10 md:flex shadow-2xl max-w-7xl h-full rounded-lg">
                    <div className=" xl:min-w-[800px] xl:w-[800px] md:min-w-[500px] md:w-[500px]">
                        <img className="object-scale-down scale-90" src={item.img} alt='Imagen Prod' width={500} height={500} />
                    </div>
                    <div className="grid grid-cols-1 gap-5">
                        <div>
                            <h5 className=" text-3xl text-slate-900" title={item.title}>{item.title}</h5>
                            <p className="">{item.marca}</p>
                        </div>
                        <div className="font-bold text-3xl m-3">${calPrice()}</div>
                        <div className=" text-justify">{item.descripcion}</div>
                        <Cardbtn item={item} />
                    </div>
                </div>
            </div>
        )
    }
    if (showAs === 'ListItem') {
        return (
            <div className="relative grid grid-cols-3 md:flex gap-2 border rounded-lg mb-2 border-gray-300 shadow-md p-3">
                <Link href={`/${convertToPath(item.title)}`}>
                    <img className="scale-90 min-w-[100px]" src={item.img} alt='Imagen Prod' width={100} height={100} />
                </Link>
                <div>
                    <div className="font-bold truncate hover:text-clip">{item.title}</div>
                    <div>Precio C/U: ${calPrice()}</div>

                    {qty === 0 ? '' : <div className=" font-semibold">Subtotal: ${qty * calPrice()}</div>}
                </div>
                <div className="flex items-center absolute bottom-1/3 right-6 md:bottom-1/4 md:right-12 justify-center space-x-3">
                    <button onClick={removeToCart} className="flex w-8 h-8 items-center justify-center rounded bg-red-600">
                        <p className="font-bold text-white">-</p>
                    </button>
                    {qty === 0 ? '' : <div>{qty}</div>}
                    <button onClick={addToCart} className="flex w-8 h-8 items-center justify-center rounded bg-green-600">
                        <p className="font-bold text-white">+</p>
                    </button>
                </div>

            </div>
        )
    }
    return (
        <div className=" md:m-8 relative flex w-44 h-64 md:h-auto md:w-[420px] max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md m-2">
            <Link className="relative justify-center mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href={`/${convertToPath(item.title)}`}>
                <img className="object-scale-down scale-90 hover:scale-100 ease-in duration-500" src={item.img} alt='Imagen Prod' />
                {item.Descu === '0' ? '' :
                    <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">{item.Descu}%</span>
                }
            </Link>
            <div className="mt-4 px-5 pb-5">
                <Link href={`/${convertToPath(item.title)}`}>
                    <h5 className="text-sm truncate hover:text-clip md:text-xl text-slate-900" title={item.title}>{item.title}</h5>
                </Link>
                <div className="mt-2 mb-5 flex items-center justify-between">
                    <p>
                        <span className="text-lg md:text-3xl font-bold text-slate-900">${calPrice()}</span>
                        {item.Descu === '0' ? '' :
                            <span className="text-xs md:text-sm text-slate-900 line-through">${item.originalPrice}</span>
                        }
                    </p>
                </div>
                <Cardbtn item={item} />
            </div>
        </div>
    );

}
import React from "react";

export default function CardComponent() {
    const posts = [
        {
            title: "ZAPATILLA NIKE REVOLUTION 6",
            img: "https://home.ripley.cl/store/Attachment/WOP/D317/2000392857938/2000392857938-2.jpg",
            Desc: "25%",
            price: "25000",
            originalPrice:"30000",
        },
        {
            title: "BICICLETA MTB ALTITUDE ALPES D/M A29 21 VEL ROJ ML",
            img: "//ripleycl.imgix.net/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fim-prod-products-images%2Falpes-f1-c1e2fd45-3ee3-4de5-abbb-498179fceba8.png?w=750&h=555&ch=Width&auto=format&cs=strip&bg=FFFFFF&q=60&trimcolor=FFFFFF&trim=color&fit=fillmax&ixlib=js-1.1.0&s=bbf26a789cdf528cfed633575ee8e823",
            Desc: "50%",
            price: "10000",
            originalPrice:"20000",
        },
        {
            title: "PALA DE PADEL VARLION MAXIMA SUM JR  ",
            img: "https://home.ripley.cl/store/Attachment/WOP/D170/2000392682943/2000392682943_2.jpg",
            Desc: "50%",
            price: "5000",
            originalPrice:"2500",
        },
        {
            title: "MANCUERNA GOLD'S GYM 40 LB",
            img: "https://home.ripley.cl/store/Attachment/WOP/D170/2000380831506/2000380831506_2.jpg",
            Desc: "10%",
            price: "9000",
            originalPrice:"10000",
        },
        {
            title: "TROTADORA ELÉCTRICA E310 PRO",
            img: "https://s3.amazonaws.com/imagenes-sellers-mercado-ripley/2022/09/28101807/1567014803063_1..jpg",
            Desc: "Free",
            price: "0",
            originalPrice:"1000",
        },
    ];
    return (
        <>
            <div className="p-10 -z-50 grid justify-items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {posts.map((items, key) => (
                    <div className="relative flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md mb-3" key={key}>
                        <a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
                            <img className="object-scale-down" src={items.img} alt="product image" />
                            <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">{items.Desc}</span>
                        </a>
                        <div className="mt-4 px-5 pb-5">
                            <a href="#">
                                <h5 className="text-xl text-slate-900">{items.title}</h5>
                            </a>
                            <div className="mt-2 mb-5 flex items-center justify-between">
                                <p>
                                    <span className="text-3xl font-bold text-slate-900">${items.price}</span>
                                    <span className="text-sm text-slate-900 line-through">${items.originalPrice}</span>
                                </p>
                            </div>
                            <a href="#" className="flex inset-x-0 bottom-0 items-center justify-center rounded-md bg-purple-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-blue-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                Agregar al carrito
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
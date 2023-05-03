// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// ESTE ARCHIVO RECIBE SOLO UN RESPONSE DE LOS DATOS ABAJO USAR ESTE COMO PRUEBA SI NO TIENES LA BD
export default function handler(req, res) {
  res.status(200).json([
    {
      id: 0,
      title: "ZAPATILLA NIKE REVOLUTION 6",
      img: "https://home.ripley.cl/store/Attachment/WOP/D317/2000392857938/2000392857938-2.jpg",
      Desc: "25%",
      descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra orci in nisl ultricies, blandit vulputate lorem interdum. Praesent imperdiet id velit at egestas. Nam sagittis, elit sed mattis venenatis, magna diam euismod lacus, non tempor enim ligula sed erat. Maecenas sed felis vel ligula facilisis hendrerit. ',
      price: "25000",
      originalPrice: "30000",
    },
    {
      id: 1,
      title: "BICICLETA MTB ALTITUDE ALPES DM A29 21 VEL ROJ ML",
      img: "//ripleycl.imgix.net/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fim-prod-products-images%2Falpes-f1-c1e2fd45-3ee3-4de5-abbb-498179fceba8.png?w=750&h=555&ch=Width&auto=format&cs=strip&bg=FFFFFF&q=60&trimcolor=FFFFFF&trim=color&fit=fillmax&ixlib=js-1.1.0&s=bbf26a789cdf528cfed633575ee8e823",
      Desc: "50%",
      descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra orci in nisl ultricies, blandit vulputate lorem interdum. Praesent imperdiet id velit at egestas. Nam sagittis, elit sed mattis venenatis, magna diam euismod lacus, non tempor enim ligula sed erat. Maecenas sed felis vel ligula facilisis hendrerit. ',
      price: "10000",
      originalPrice: "20000",
    },
    {
      id: 2,
      title: "PALA DE PADEL VARLION MAXIMA SUM JR  ",
      img: "https://home.ripley.cl/store/Attachment/WOP/D170/2000392682943/2000392682943_2.jpg",
      Desc: "50%",
      descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra orci in nisl ultricies, blandit vulputate lorem interdum. Praesent imperdiet id velit at egestas. Nam sagittis, elit sed mattis venenatis, magna diam euismod lacus, non tempor enim ligula sed erat. Maecenas sed felis vel ligula facilisis hendrerit. ',
      price: "5000",
      originalPrice: "2500",
    },
    {
      id: 3,
      title: "MANCUERNA GOLD'S GYM 40 LB",
      img: "https://home.ripley.cl/store/Attachment/WOP/D170/2000380831506/2000380831506_2.jpg",
      Desc: "10%",
      descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra orci in nisl ultricies, blandit vulputate lorem interdum. Praesent imperdiet id velit at egestas. Nam sagittis, elit sed mattis venenatis, magna diam euismod lacus, non tempor enim ligula sed erat. Maecenas sed felis vel ligula facilisis hendrerit. ',
      price: "9000",
      originalPrice: "10000",
    },
  ])
}

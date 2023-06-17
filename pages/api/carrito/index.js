import { pool } from "@/config/db";

export default async function handler(req, res) {
  //const [rows] = await pool.query('SELECT * from USUARIO')
  const { lis, buyO, amt, user } = req.body;
  var sum = 0;
  for (let index = 0; index < lis.length; index++) {
    const element = lis[index].qty;
    sum += element;
  }
  console.log(sum);
  console.log(`___Boleta___\nbuyO: ${buyO}`);
  console.log(`total: ${amt}`);
  console.log(`cantidad: ${sum}`);
  let date = new Date().toLocaleDateString();
  console.log(date); // 6/17/2022
  console.log("---------------\nDetalle Boleta");
  await pool.query("INSERT INTO PAGO SET ?", {
    buyOrder: buyO,
    precio: amt,
    cantidad: sum,
    fecha: date,
    estado: "pendiente",
    usu: user,
  });
  for (let index = 0; index < lis.length; index++) {
    const element = lis[index];
    console.log(
      `N(${index}): ${element.id} ${element.title} ${element.qty} ${element.price}`
    );
    await pool.query("INSERT INTO PAGOPROD SET ?", {
      ide: element.id,
      bOr: buyO,
      titulo: element.title,
      qty: element.qty,
      precio: element.price,
    });
  }

  //----------------------------------
  /*     const [result] = await pool.query('INSERT INTO PRODUCTO SET ?', {
        //idPRODUCTO: Math.floor(Math.random() * 10000) + 1,
        title: nombre,
        img: img,
        Descu: descu,
        descripcion: descri,
        originalPrice: prices,
        cantidad: cantidad,
        marca: marca,
        idcategoria: categoria
    }); */

  return res.status(200).json("hola");
}

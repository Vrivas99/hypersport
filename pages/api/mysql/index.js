import { pool } from '../../../config/db'

export default async function handler(req, res) {
    switch (req.method) {
        case 'GET':
            return await recuperarProducto(req, res)
        case 'POST':
            return await guardarProducto(req, res)
        case 'PUT':
            return await modificarProducto(req,res)

    }
}

const recuperarProducto = async (req, res) => {
    const [result] = await pool.query('SELECT t1.id,t1.title,t2.nombre as categoria,t1.Descu,t1.descripcion,t1.price,t1.cantidad,t1.originalPrice,t1.img,t1.idcategoria,t1.marca from producto as t1 JOIN CATEGORIA as t2 on t1.idcategoria = t2.id where t1.title IS NOT NULL AND t1.id > 6')
    const resultStringify = JSON.stringify(result)
    const resultParse = JSON.parse(resultStringify)
    //-----------------------------------------------------------------
    //Si quieres comprobar un valor en especifico descomenta esta parte
    //const pos = resultParse.map(val => val.NOMBRE).indexOf('PRUEBA')
    //console.log(resultParse[pos].IMG)
    //-----------------------------------------------------------------
    return res.status(200).json(resultParse)
}


/*
SCRIPT DE POST ACA ABAJO DEBE CAMBIARSE A LA TABLA ACTUALIZADA
LOS ATRIBUTOS SON DISTINTOS A LA FECHA 03-05-2023
*/
const guardarProducto = async (req, res) => {
    //console logs para comprobar proceso post
    console.log('Guardando un producto');
    console.log('xxxxxxxxxxxxxxxxxxxxx');
    console.log(req.body);
    //guardar parametros del request POST en una constante
    const {nombre,img,descu,descri,prices,cantidad,marca,categoria} = req.body
    //llamo una query y le paso en el SET la serie de parametros del request
    const [result] = await pool.query('INSERT INTO PRODUCTO SET ?', {
        //idPRODUCTO: Math.floor(Math.random() * 10000) + 1,
        title: nombre,
        img: img,
        Descu: descu,
        descripcion: descri,
        originalPrice: prices,
        cantidad: cantidad,
        marca: marca,
        idcategoria: categoria
    });

    return res.status(200).json('haciendo post')
}

const modificarProducto = async (req,res) =>{
    console.log('Modificando un producto');
    console.log('xxxxxxxxxxxxxxxxxxxxx');
    console.log(req.body);
    const{id,product} =req.body;
    console.log('--'+id)
    console.log(product.titulo)
    const [result] = await pool.query(`UPDATE PRODUCTO SET 
    title = ?, 
    img = ?, 
    Descu = ?, 
    descripcion = ?,
    originalPrice = ?, 
    cantidad = ?, 
    idcategoria = ?
     WHERE id = ?`,
     [product.titulo,product.img,
        product.descuento,product.descripcion,product.price,
    product.cantidad,product.categoria,id]);
    return res.status(200).json('hacciendo patch')
    
}
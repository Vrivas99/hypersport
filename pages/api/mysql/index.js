import { pool } from '../../../config/db'

export default async function handler(req, res) {
    switch (req.method) {
        case 'GET':
            return await recuperarProducto(req,res)
        case 'POST':
            return await guardarProducto(req,res)

    }
}

const recuperarProducto = async(req,res) =>{
    const [result] = await pool.query('SELECT t1.id,t1.title,t2.nombre as categoria,t1.Descu,t1.descripcion,t1.price,t1.cantidad,t1.originalPrice,t1.img from producto as t1 JOIN CATEGORIA as t2 on t1.idcategoria = t2.id where t1.title IS NOT NULL AND t1.id > 6')
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
    const { NOMBRE, DESCRIPCION, PRECIO, CANTIDAD, MARCA_idMARCA } = req.body
    //llamo una query y le paso en el SET la serie de parametros del request
    const [result] = await pool.query('INSERT INTO PRODUCTOS SET ?', {
        //idPRODUCTO: Math.floor(Math.random() * 10000) + 1,
        NOMBRE,
        DESCRIPCION,
        PRECIO,
        CANTIDAD,
        MARCA_idMARCA,
    });

    return res.statsu(200).json('haciendo post')
}
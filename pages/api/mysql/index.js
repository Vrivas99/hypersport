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
    const [result] = await pool.query('select id,title,img,Descu,descripcion,price,cantidad,originalPrice from producto')
    const resultStringify = JSON.stringify(result)
    const resultParse = JSON.parse(resultStringify)
    //-----------------------------------------------------------------
    //Si quieres comprobar un valor en especifico descomenta esta parte
    //const pos = resultParse.map(val => val.NOMBRE).indexOf('PRUEBA')
    //console.log(resultParse[pos].IMG)
    //-----------------------------------------------------------------
    console.log(resultParse)
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
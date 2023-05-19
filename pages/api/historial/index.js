import { pool } from '../../../config/db'

export default async function handler(req, res) {
    switch (req.method) {
        case 'GET':
            return await recuperarPagos(req, res)
        case 'PUT':
            return await alterarEstado(req, res)
    }
}

const recuperarPagos = async (req, res) => {
    const [result] = await pool.query(`SELECT * FROM PAGO WHERE USU != ''`)
    const resultStringify = JSON.stringify(result)
    const resultParse = JSON.parse(resultStringify)
    //-----------------------------------------------------------------
    //Si quieres comprobar un valor en especifico descomenta esta parte
    //const pos = resultParse.map(val => val.NOMBRE).indexOf('PRUEBA')
    //console.log(resultParse[pos].IMG)
    //-----------------------------------------------------------------
    return res.status(200).json(resultParse)
}

const alterarEstado = async (req, res) => {
    var { buyOr } = req.body;
    buyOr = String(buyOr)
    const taxt = 'completado'
    console.log('modificando estado: '+ buyOr);
    const [result] = await pool.query(`UPDATE pago SET estado = ? WHERE buyOrder = ?`, [taxt, buyOr]);
    console.log(result)
    return res.status(200).json('hacciendo patch')
}
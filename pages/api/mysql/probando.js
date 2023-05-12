import { pool } from "../../../config/db";

export default async function handler(req,res){
    const [rows] = await pool.query('SELECT NOW()')
    const [result] = await pool.query('INSERT INTO PRODUCTOS SET ?', {
        NOMBRE,
        DESCRIPCION,
        PRECIO,
        CANTIDAD,
        MARCA_idMARCA,
    });
    return res.status(200).json(rows[0]['NOW()']);
}


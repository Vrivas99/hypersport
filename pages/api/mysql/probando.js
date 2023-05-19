import { pool } from "../../../config/db";

export default async function handler(req,res){
    const [rows] = await pool.query('SELECT * from usuario')
    for (let index = 0; index < rows.length; index++) {
        console.log(rows.length)
        console.log(rows[index].CORREO)

    }
    return res.status(200).json(rows);
}


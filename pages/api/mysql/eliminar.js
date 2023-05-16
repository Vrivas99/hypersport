import { pool } from "../../../config/db";

export default async function handler(req,res){
    const {ID} = req.body
    const [result] = await pool.query('DELETE FROM PRODUCTO WHERE ID = ?', [ID]);
    return res.status(200).json('haciendo post')
}

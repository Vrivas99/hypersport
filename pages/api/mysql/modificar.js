import { pool } from '../../../config/db'

export default async function handler(req, res) {
    console.log('Modificando un producto');
    console.log('xxxxxxxxxxxxxxxxxxxxx');
    console.log(req.body);
    const { aide } = req.body
    const [result] = await pool.query(`UPDATE PRODUCTO SET title = 'lo logre' WHERE id = ?`, [aide] );
    return res.status(200).json('hacciendo patch')
}
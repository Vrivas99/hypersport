import { pool } from '@/config/db';

export default async function handlerReg(req, res) {
    const { correo } = req.body
    const [rows] = await pool.query('SELECT * from usuario')
    for (let index = 0; index < rows.length; index++) {
        const cor = rows[index].CORREO
        if (cor == correo) {
            return res.status(401).json({ error: 'email ya utilizado' })
        }
    } return res.status(200).json({ message: 'email disponible' })

}
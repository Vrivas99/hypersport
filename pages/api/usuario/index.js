import { pool } from "../../../config/db";

export default async function handler(req, res) {
    const { correo, contrasenna } = req.body
    const [result] = await pool.query('INSERT INTO USUARIO SET ?', { CORREO: correo, CONTRASENNA: contrasenna });
    return res.status(200).json('SE CREO UN USUARIO')
}
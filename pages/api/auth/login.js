import jwt from 'jsonwebtoken';
import { serialize } from 'cookie';
import { pool } from '@/config/db';

export default async function loginHandler(req, res) {
    const { email, cont } = req.body
    const [rows] = await pool.query('SELECT * from usuario')
    for (let index = 0; index < rows.length; index++) {
        const cor = rows[index].CORREO
        const con = rows[index].CONTRASENNA
        if (email == cor && cont == con) {
            const token = jwt.sign({
                exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30,
                email: email,
            }, 'secret')
        
            const serialized = serialize('myTokenName',token,{
                httpONly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
                maxAge:1000*60*60*24*30,
                path:'/'
            })
            res.setHeader('Set-Cookie',serialized)
            return res.json('login succesfully')
        } else {
            continue;
        }
    }
    return res.status(401).json({error: 'invalid email or password'})
}
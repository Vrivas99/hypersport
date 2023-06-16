import jwt from "jsonwebtoken";
import { serialize } from "cookie";
import { pool } from "@/config/db";

export default async function adminHandler(req, res) {
  const { email, cont } = req.body;
  const [rows] = await pool.query("SELECT * FROM USUARIO WHERE IDCAT != 0");
  for (let index = 0; index < rows.length; index++) {
    const cor = rows[index].CORREO;
    const con = rows[index].CONTRASENNA;
    if (email == cor && cont == con) {
      return res.json("login succesfully");
    } else {
      continue;
    }
  }
  return res.status(401).json({ error: "invalid email or password" });
}

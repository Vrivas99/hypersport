import { pool } from "@/config/db";

export default async function userFETCH(req, res) {
  const [rows] = await pool.query("select * from usuario");
}

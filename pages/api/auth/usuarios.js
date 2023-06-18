import { pool } from "@/config/db";

export default async function userFETCH(req, res) {
  const [result] = await pool.query("select * from USUARIO WHERE IDCAT !=0");
  const resultStringify = JSON.stringify(result);
  const resultParse = JSON.parse(resultStringify);
  return res.status(200).json(resultParse);
}

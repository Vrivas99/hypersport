import { pool } from "@/config/db";

export default async function userFETCH(req, res) {
  const { CORREO, CONTRASENNA, IDCAT } = req.body;
  console.log(`REQ-BODY: ${CORREO} + ${CONTRASENNA} + ${IDCAT}`);
  const [result] = await pool.query(
    "INSERT INTO USUARIO(CORREO,CONTRASENNA,IDCAT) VALUES(?,?,?)",
    [CORREO, CONTRASENNA, IDCAT]
  );
  const resultStringify = JSON.stringify(result);
  const resultParse = JSON.parse(resultStringify);
  return res.status(200).json(resultParse);
}

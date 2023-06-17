import { withSessionRoute } from "../../lib/config/withSession";
import { pool } from "../../config/db";

export default withSessionRoute(createSessionRoute);

async function createSessionRoute(req, res) {
  if (req.method === "POST") {
    const [rows] = await pool.query("SELECT * from USUARIO");
    const { email, password } = req.body;
    for (let index = 0; index < rows.length; index++) {
      const cor = rows[index].CORREO;
      const con = rows[index].CONTRASENNA;
      if (email == cor && password == con) {
        console.log(
          `backen: ${rows[index].CORREO} y ${rows[index].CONTRASENNA}`
        );
        console.log(`Del fron: ${email} y ${password}`);
        req.session.user = {
          username: cor,
          isAdmin: true,
        };
        await req.session.save();
        res.send({ ok: true });
        break;
      } else {
        continue;
      }
    }
    return res.status(403).send("");
  }
  return res.status(404).send("");
}

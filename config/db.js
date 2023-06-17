import { createPool } from "mysql2/promise";

//archivo para configurar el packete de mysql2 con la opcion pool en documentacion
const pool = createPool({
  host: "localhost",
  user: "root",
  password: process.env.MYSQL_PWD,
  //hola debes crearte tu archivo {.env.local} en la carpeta 'root' y hay crear tu variable MYSQL_PWD = 'con tu clave'(ej: 20173)
  database: "test",
  port: 3306,
});

export { pool };

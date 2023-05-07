import { createPool } from "mysql2/promise";
//archivo para configurar el packete de mysql2 con la opcion pool en documentacion
const pool = createPool({
    host: "localhost",
    user: "root",
    password: "20173",
    database: "test",
    port: 3306,
});

export {pool};
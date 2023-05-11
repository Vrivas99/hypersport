import mysql from "mysql2/promise";

export default async function handler(req,res) {
    ///////////CODIGO ORIGINAL CON POOL [POOL CONNECTIONS[https://www.npmjs.com/package/mysql2]]//////////////////////////
    ///////// PERO ES MUT LENTO TAMBIEN ///////////////////
    //GET THE CLIENT
    /* const mysql = require('mysql2');

    // create the connection to database
    const config = {
        host: "localhost",
        user: "root",
        password: "20173",
        database: "mydb",
        port: 3306,
        connectionLimit: 100,
    };
    const pool = mysql.createPool(config);
    
    pool.query("SELECT * FROM IMAGEN", (err, data) => {
        if (err) throw(err)
        res.status(200).json({data});
    }); */
    ///////////EL SNIPPET DE ACA ABAJO FUNCIONA DE MANERA MAS SIMPLE [Buscar promise wrapper(https://www.npmjs.com/package/mysql2)]/////////////////////
    const dbconnection = await mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "20173",
        database: "mydb",
        port: 3306,
    });

    try {
        const query = "SELECT * FROM PRODUCTO JOIN IMAGEN ON PRODUCTO.idPRODUCTO=IMAGEN.idPRODUCTO";
        const values = [];
        const [data] = await dbconnection.execute(query,values);
        dbconnection.end();

        res.status(200).json({productos:data});
    } catch(error) {
        //res.status(500).json({error: error.message});
    }
}


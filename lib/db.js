import mysql from "mysql2/promise";

export async function query({query,values = []}) {
    const dbconnection = await mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "20173",
        database: "mydb",
        port: 3306,
    });

    try {
        const [results] = await dbconnection.execute(query,values);
        dbconnection.end();
        return results
    } catch(error) {
        throw Error(error.message);
        return(error);
    }
}


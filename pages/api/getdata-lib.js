import {query} from "../../lib/db";

export default async function handler(req,res) {
    try {
        const querySQL = "SELECT * FROM PRODUCTO JOIN IMAGEN ON PRODUCTO.idPRODUCTO=IMAGEN.idPRODUCTO";
        const valuesParam = [];
        const data = await query({query:querySQL,values:valuesParam});
        console.log(data)
        res.status(200).json({productos:data});
    } catch(error) {
        //res.status(500).json({error: error.message});
    }
}


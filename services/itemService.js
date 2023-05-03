
// Este servicio administra los fetch de las APIS y Responses para productos
export async function getItems(){
    // JSON LOCAL: Esta linea hace fetch del json local por si no tienes la bd
    // const request = await fetch('http://localhost:3000/api/test_items/items')
    // BASE DE DATOS: Esta linea usa la API para la bd (necesitas mysql)
    const request = await fetch('http://localhost:3000/api/mysql')
    const items = await request.json()

    return items
}

export async function getLatestsItems(){
    const items =await getItems()

    return items.slice(0,3)
}
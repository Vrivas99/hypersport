function getMultipleRandom(arr,num){
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0,num);
}
// Este servicio administra los fetch de las APIS y Responses para productos
export async function getItemsINDEX(){
    // JSON LOCAL: Esta linea hace fetch del json local por si no tienes la bd
    // const request = await fetch('http://localhost:3000/api/test_items/items')
    // BASE DE DATOS: Esta linea usa la API para la bd (necesitas mysql)
    const request = await fetch('http://localhost:3000/api/mysql')
    const items = await request.json()
    return getMultipleRandom(items,8);
}

export async function getItems(){
    const request = await fetch('http://localhost:3000/api/mysql')
    const items = await request.json()
    return items;
}


export async function getLatestsItems(){
    const items =await getItems()

    return items.slice(0,3)
}
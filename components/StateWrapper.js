import React, { createContext, useContext, useState } from 'react'



const AppContext = createContext ({
    isOpen: true,
    items: [],
    openCart: () => { },
    closeCart: () => { },
    delItemToCart: (item) => { },
    addItemToCart: (item) => { },
    getNumberOfItems: () => { },
})

const StateWrapper = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [items, setItems] = useState([]);
    //abre carrito
    function handleOpenCart() {
        setIsOpen(true)
    }
    //cierra carrito
    function handleCloseCart() {
        setIsOpen(false)
    }
    //funcion agregar producto de carrito
    function handleAddItemToCart(item) {
        const temp = [...items]
        const found = temp.find(product => product.id === item.id)

        if (found) {
            found.qty++
        } else {
            item.qty = 1
            temp.push(item)
        }

        setItems([...temp])
    }
    //funcion eliminar producto de carrito
    function handleRemoveItemToCart(item) {
        const temp = [...items];
        const found = temp.find((i) => i.id === item.id);
        const indexDos = temp.indexOf(item);
        if (found) {
            if (found.qty <= 1) {
                temp.splice(indexDos, 1);
            } else {
                found.qty--;
            }
        }
        setItems([...temp]);
    }


    // total entre todos los productos de carrito
    function handleNumberOfItems() {
        const total = items.reduce((acc, item) => acc + item.qty, 0)
        console.log("state wrap count: "+ total)
        return total
    }
    
    return (
        <AppContext.Provider value={{
            isOpen,
            items,
            openCart: handleOpenCart,
            closeCart: handleCloseCart,
            addItemToCart: handleAddItemToCart,
            delItemToCart: handleRemoveItemToCart,
            getNumberOfItems: handleNumberOfItems,
        }}>{children}</AppContext.Provider>
    )
}

export function useAppContext() {
    return useContext(AppContext)
}

export default StateWrapper
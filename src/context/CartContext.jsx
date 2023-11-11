import { createContext, useState } from "react";

export const Context = createContext()

// eslint-disable-next-line react/prop-types
export default function CartContext({defaultValue = [], children}) {
    const [cart, setCart] = useState(defaultValue)

    function getFromCart(id) {
        return cart.find(obj => obj.id === id)
    }

    function isInCart(id) {
        return id === undefined ? false : getFromCart(id) !== undefined
    }

    function addToCart(prod, quantity) {
        prod.quantity = quantity
        setCart([...cart.filter(obj => obj.id != prod.id), prod])
    }

    function removeItem(id) {
        setCart(cart.filter(obj => obj.id != id))
    }

    function clearCart() {
        setCart([])
    }

    return (
        <Context.Provider value={{cart, addToCart, removeItem, isInCart, clearCart}}>
            {children}
        </Context.Provider>
    )
}
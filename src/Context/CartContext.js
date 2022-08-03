import React, { useContext } from "react";
import { useState } from "react";


const CartContext = React.createContext()

export const useCartContext = () => useContext(CartContext)

const CartProvider = ({ children }) => {


    const [cart, setCart] = useState([])

    const addProduct = (item, newQuantity) => {

        const newCart = cart.filter(prod => prod.id !== item.id)
        newCart.push({ ...item, quantity: newQuantity })
        setCart(newCart)

    }
    
console.log(cart)

    const inCart = (id) => cart.filter(res => res.id === id) ? 'inCart' : 'outCart'

    const cartClear = () => setCart([])

    const productRemove = (id) => cart.find(res => res.id !== id ) 


    return(
        
        <>
            <CartContext.Provider value={{
                addProduct,
                inCart,
                cartClear,
                productRemove
            }}>
                {children}
            </CartContext.Provider>
        </>

    )

}

export default CartProvider;
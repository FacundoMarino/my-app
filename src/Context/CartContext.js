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
    
    const inCart = (id) => cart.find(res => res.id === id) ? 'inCart' : 'outCart'

    const cartClear = () => setCart([])

    const productRemove = (id) => setCart(cart.filter(product => product.id !== id)) 

    const totalProduct = () => { return cart.reduce((acc, actualProduct ) => acc + actualProduct.quantity, 0)}

    const totalPrice = () => {
        return cart.reduce((prev, act) => prev + act.quantity * act.price, 0)
    }

    return(
        
        <>
            <CartContext.Provider value={{
                addProduct,
                inCart,
                cartClear,
                productRemove,
                totalPrice,
                totalProduct,
                cart
            }}>
                {children}
            </CartContext.Provider>
        </>

    )

}

export default CartProvider;
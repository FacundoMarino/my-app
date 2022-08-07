import React from "react"
import "./Cart.css"
import { useCartContext } from "../../Context/CartContext"
import { Link } from "react-router-dom"
import ItemCart from "../ItemCart/ItemCart"

const Cart = () => {

const { cart, totalPrice } = useCartContext()
 
if (cart.length === 0) {
    return (
        <>
            <p>No hay productos en el carrito</p>
            <Link to="/">Segui comprando</Link> 
        </>
    )
}

    return(
        <>
            
        <div className="cart">
            {cart.map(product => <ItemCart key={product.id} product={product}  />)}
            
        </div>
        
        <p className="total-price">Total: {totalPrice()} </p>
           
        </>
    )
}

export default Cart
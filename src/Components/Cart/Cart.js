import React from "react"
import "./Cart.css"
import { useCartContext } from "../../Context/CartContext"
import { Link } from "react-router-dom"
import ItemCart from "../ItemCart/ItemCart"
import { addDoc, collection, getFirestore } from "firebase/firestore"


const Cart = () => {

const { cart, totalPrice } = useCartContext()


const order = {

    buyer: {
        name: 'Facundo',
        email: 'algo@algo.com',
        phone: '12354565',
        address: 'direccion'
    },
    items: cart.map(product => ({ id: product.id, title: product.title, price: product.price, quantity: product.quantity })),
    totalPrice: totalPrice(),
}

const clickHandler = () => {
    const db = getFirestore()
    const orderCollection = collection(db, 'orders');
    addDoc(orderCollection, order)
}


 
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
        <button onClick={clickHandler}>Finalizar compra</button>           
        </>
    )
}

export default Cart
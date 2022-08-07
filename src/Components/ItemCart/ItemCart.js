import React from 'react';
import { useCartContext } from '../../Context/CartContext';

const ItemCart = ({ product }) => {
    
    const { productRemove } = useCartContext();

    return (
        <div className='card'>
            <img className='portada-img card-img-top' src={product.img} alt={product.title} />
            <div className='card-body'>
                <h5 className='card-title'>
                    Titulo: {product.title}
                </h5>
                <p className='card-text'>
                    Cantidad: {product.quantity}                 
                </p>
                <p className='card-text'>
                    Precio: {product.price}
                </p>
                <p className='card-text'>
                    Subtotal: ${product.quantity * product.price}
                </p>
               <button className='btn btn-danger' onClick={() => productRemove(product.id)}>Eliminar</button>
            </div>            
        </div>
    );
}

export default ItemCart;

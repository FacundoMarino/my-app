import './ItemCount.css'
import { useState } from 'react'

const ItemCount = ({ stock, initial, onAdd}) => {

const [count, addCount] = useState(initial)

const agregarCount = () => {
    addCount(count + 1)    
}

const restarCount = () => {   
    addCount(count - 1)
}



    return ( 
            <div className='container-itemcount'>

                <button disabled={(count <= initial )} className='btn btn-danger itm-button' onClick={restarCount}>-</button>
                 
                <p className='itemcount-parrafo'>{ count }</p>
                
                <button disabled={(count >= stock )} className='btn btn-success itm-button' onClick={agregarCount}>+</button>
                
                <button className='btn btn-primary btn-agregar' onClick={() => onAdd(count)}>Agregar al Carrito</button>


            </div>
           )

}

export default ItemCount;
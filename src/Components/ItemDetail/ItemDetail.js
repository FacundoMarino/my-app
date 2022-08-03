import { Link } from "react-router-dom";
import { useState } from "react";
import { useCartContext } from "../../Context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css"

const ItemDetail = ({ data }) => {

    const [goToCart, setGotToCart] = useState(false)

    const {addProduct} = useCartContext()

    const onAdd = (quantity) => {
        setGotToCart(true)
        addProduct(data, quantity)
    }    

    return (

            <div className="container-itemdetail">
                
                <img className="portada-img" src={data.img} alt={data.title} />
                <p>{data.title}</p>
                <p>{data.detail}</p>
                {
                    goToCart ? <Link to="/cart">Terminar la compra</Link> : <ItemCount stock={5} initial={1} onAdd={onAdd} />
                }
        </div>
    )


}

export default ItemDetail;
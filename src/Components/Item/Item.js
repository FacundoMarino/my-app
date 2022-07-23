import "./Item.css"
import ItemCount from "../ItemCount/ItemCount"

const Item = ({ data }) => {

    
const onAdd = (totalCart) => {
    console.log(totalCart)
}

    return (
    
            <div className="container-portada">
                <img className="portada-img" src={data.img} alt={data.title} />
                <p>{data.title}</p>
                <p>{data.detail}</p>
                <ItemCount stock={5} initial={1} onAdd={onAdd} />
            </div>

                
    )
}

export default Item
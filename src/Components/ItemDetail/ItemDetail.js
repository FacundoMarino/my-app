import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css"

const ItemDetail = ({ data }) => {

    const onAdd = (totalCart) => {
        console.log(totalCart)
    }
    
    console.log(data.title)

    return (

            <div className="container-itemdetail">
                <img className="portada-img" src={data.img} alt={data.title} />
                <p>{data.title}</p>
                <p>{data.detail}</p>
                <ItemCount stock={5} initial={1} onAdd={onAdd} />
        </div>
    )


}

export default ItemDetail;
import "./Item.css"
import { Link } from "react-router-dom"

const Item = ({ data }) => {


    return (
    
        <div className="container-portada">
            <Link to={`${data.id}`}>
                <img className="portada-img" src={data.img} alt={data.title} />
            </Link>

                <p>{data.title}</p>
                <p>{data.detail}</p>

        </div>

                
    )
}

export default Item
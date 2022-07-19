import "./Item.css"

const Item = ({ data }) => {

    return (
    
            <div className="container-portada">
                <img className="portada-img" src={data.img} alt={data.title} />
                <p>{data.title}</p>
            </div>

                
    )
}

export default Item 
import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {

    const producto = [
        {   
        id: 1,
        img: "https://cache.escapistmagazine.com/2020/03/chronotriggerhappy.jpg",
        title: "Chrono Trigger",
        detail: "aca va una descripcion"
    }
]

    const [data, setData] = useState([])

useEffect (() => {
    const promesa = new Promise(resolve => {
        setTimeout(() => {
            resolve(producto)
        }, 3000);
    })

    promesa.then(res => setData(res))

    
}, [])


    return (

    data.map(element => <ItemDetail key={element.id} data={element} />)        

    )
}

export default ItemDetailContainer;
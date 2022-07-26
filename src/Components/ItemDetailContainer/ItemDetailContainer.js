/* eslint-disable react-hooks/exhaustive-deps */
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
    const prom = new Promise(resolve => {
        setTimeout(() => {
            resolve(producto)
        }, 3000);
    })

    prom.then(res => setData(res))

    
}, [])


    return (

    data.map(element => <ItemDetail key={element.id} data={element} />)        

    )
}

export default ItemDetailContainer;
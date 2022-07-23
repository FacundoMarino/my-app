import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";

export const products = [
    {   
        id: 1,
        img: "https://cache.escapistmagazine.com/2020/03/chronotriggerhappy.jpg",
        title: "Chrono Trigger",
        detail: "aca va una descripcion"
    },    
    {
        id: 2,
        img: "https://th.bing.com/th/id/OIP.5uyX8AVfOyegNi3T39dkEAHaFR?pid=ImgDet&rs=1",
        title: "Xenoblade Chronicles",
        detail: "aca va una descripcion"
    },    
    {
        id: 3,
        img: "https://1.bp.blogspot.com/-fpos1X05JpI/Xkx0VR17D6I/AAAAAAAAIdM/_mApsMLmSoEAaiZ4wGyAZ6-ueIsOxZbvgCNcBGAsYHQ/s1600/vagrant-story-wallpaper.jpg",
        title: "Vagrant History",
        detail: "aca va una descripcion"
    }
]



function ItemListContainer(){

const [data, setData] = useState([])

useEffect (() => {
    const promesa = new Promise(resolve => {
        setTimeout(() => {
            resolve(products)
        }, 3000);
    })

    promesa.then(res => setData(res))

}, [])
 

    return(
        <div className="d-flex justify-content-around">
            <ItemList data={data} />
        </div>
    )

}


export default ItemListContainer;
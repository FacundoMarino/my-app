import { useState, useEffect } from "react";
import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";

 const products = [
    {
        id: 1,
        img: "https://cache.escapistmagazine.com/2020/03/chronotriggerhappy.jpg",
        title: "Chrono Trigger"
    },    
    {
        id: 2,
        img: "https://th.bing.com/th/id/OIP.5uyX8AVfOyegNi3T39dkEAHaFR?pid=ImgDet&rs=1",
        title: "Xenoblade Chronicles"
    },    
    {
        id: 3,
        img: "https://1.bp.blogspot.com/-fpos1X05JpI/Xkx0VR17D6I/AAAAAAAAIdM/_mApsMLmSoEAaiZ4wGyAZ6-ueIsOxZbvgCNcBGAsYHQ/s1600/vagrant-story-wallpaper.jpg",
        title: "Vagrant History"
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
 

const onAdd = (totalCart) => {
    console.log(totalCart)
}

    return(
        <div>
            <ItemCount stock={5} initial={1} onAdd={onAdd} />
            <ItemList data={data} />
        </div>
    )

}

export default ItemListContainer;
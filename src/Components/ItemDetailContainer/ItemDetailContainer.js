/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {

    const products = [
        {   
            id: 1,
            category: "jrpg",
            img: "https://cache.escapistmagazine.com/2020/03/chronotriggerhappy.jpg",
            title: "Chrono Trigger",
            detail: "aca va una descripcion"
        },    
        {
            id: 2,
            category: "jrpg",
            img: "https://th.bing.com/th/id/OIP.5uyX8AVfOyegNi3T39dkEAHaFR?pid=ImgDet&rs=1",
            title: "Xenoblade Chronicles",
            detail: "aca va una descripcion"
        },    
        {
            id: 3,
            category: "jrpg",
            img: "https://1.bp.blogspot.com/-fpos1X05JpI/Xkx0VR17D6I/AAAAAAAAIdM/_mApsMLmSoEAaiZ4wGyAZ6-ueIsOxZbvgCNcBGAsYHQ/s1600/vagrant-story-wallpaper.jpg",
            title: "Vagrant History",
            detail: "aca va una descripcion"
        },    
        {
            id: 4,
            category: "arpg",
            img: "https://images.saymedia-content.com/.image/c_limit%2Ccs_srgb%2Cq_auto:eco%2Cw_700/MTc0NDU2NTk1ODQzOTgyOTgy/top-5-action-role-playing-games-for-the-pc.webp",
            title: "The Incredible Adventures of Van Helsing",
            detail: "aca va una descripcion"
        },    
        {
            id: 5,
            category: "arpg",
            img: "https://images.saymedia-content.com/.image/c_limit%2Ccs_srgb%2Cq_auto:eco%2Cw_953/MTc0NDU2NTk1ODQ0MDQ4NTE4/top-5-action-role-playing-games-for-the-pc.webp",
            title: "Path of Exile",
            detail: "aca va una descripcion"
        },    
        {
            id: 6,
            category: "arpg",
            img: "https://images.saymedia-content.com/.image/c_limit%2Ccs_srgb%2Cq_auto:eco%2Cw_638/MTc0NDU2NTk1ODQzOTE3NDQ2/top-5-action-role-playing-games-for-the-pc.webp",
            title: "Nox",
            detail: "aca va una descripcion"
        }
    
    ]
    


    const [data, setData] = useState([])
    
    const {detailId} = useParams()

    useEffect (() => {
        const prom = new Promise(resolve => {
        setTimeout(() => {
            resolve(products)
        }, 1000);
    })

 detailId ? prom.then(res => setData(res.find(game => game.id === Number(detailId)))) : prom.then(res => setData(res))
    
    
}, [detailId])


    return (

    <ItemDetail data={data} />

    )
}

export default ItemDetailContainer;
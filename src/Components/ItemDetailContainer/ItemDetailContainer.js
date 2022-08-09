/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react"
import { getFirestore, doc, getDoc } from "firebase/firestore"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {

    const [data, setData] = useState([])
    
    const {detailId} = useParams()

        useEffect (() => {
            const db = getFirestore()
            const queryDb = doc(db, "items", detailId)
            getDoc(queryDb)
            .then(res => setData({id: res.id, ...res.data()}))
            }, [detailId])




    return (

    <ItemDetail data={data} />

    )
}

export default ItemDetailContainer;
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom"
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore"

function ItemListContainer(){

const [ data, setData ] = useState([])
const { categoryId } = useParams()

//
useEffect (() => {
 const db = getFirestore()
 const queryCollection = collection(db, 'items');

 if (categoryId) {
    const queryCategoryId = query(queryCollection, where("category", "==", categoryId))
    getDocs(queryCategoryId)
    .then(resp => setData(resp.docs.map(item => ({id: item.id, ...item.data() }))))
}
else{
    getDocs(queryCollection)
    .then(resp => setData(resp.docs.map(item => ({id: item.id, ...item.data() })))) 
}

    }, [categoryId])
        

    return(
        <div className="d-flex justify-content-around">
            <ItemList data={data} />
        </div>
    )

}


export default ItemListContainer;
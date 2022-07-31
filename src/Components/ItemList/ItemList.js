import React from "react";
import Item from "../Item/Item"


const ItemList = ({ data }) => {


    return (
        
        data.map(element => <Item key={element.id} data={element} />)       
            
        )
}

export default ItemList;
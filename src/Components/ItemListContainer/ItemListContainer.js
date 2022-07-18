import ItemCount from "../ItemCount/ItemCount";

function ItemListContainer(){

const onAdd = (totalCart) => {
    console.log(totalCart)
}

    return(
        <div>
            <ItemCount stock={5} initial={1} onAdd={onAdd} />
        </div>
    )

}

export default ItemListContainer;
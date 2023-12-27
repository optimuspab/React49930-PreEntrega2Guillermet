import { useEffect, useState } from "react";
import getProducts from "../utils/asyncMock"
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts
            .then((respuesta) => {
                setProducts(respuesta)
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                console.log("finalizó");
            })
    }, [])

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products={ products }/>
        </div>
    )
}

export default ItemListContainer
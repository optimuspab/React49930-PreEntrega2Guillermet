import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getProducts from "../utils/asyncMock";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([])

    const { categoria } = useParams();

    useEffect(() => {
        getProducts
            .then((respuesta) => {
                if(categoria){
                    const filteredProducts = respuesta.filter(
                        (product) => product.category === categoria
                      );
                      setProducts(filteredProducts);
                }else{
                    setProducts(respuesta);
                }
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                console.log("finalizó");
            })
    }, [categoria])

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products={ products }/>
        </div>
    )
}

export default ItemListContainer
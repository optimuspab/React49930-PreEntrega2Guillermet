import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getProducts from "../utils/asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();

    useEffect(()=>{
        getProducts
          .then((respuesta)=> {
            const productFound = respuesta.find( (prod)=> prod.id === id)
            setProduct(productFound)
          })
          .catch((err)=>{
            console.log(err)
          })
    
      }, [])

    return (
        <div>
            <ItemDetail product={product} />
        </div>
    );
};

export default ItemDetailContainer;

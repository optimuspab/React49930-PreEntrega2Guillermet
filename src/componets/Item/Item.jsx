import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
    return (
        <div className="item">
            <img className="image" src={product.thumbnail} alt={product.title}></img>
            <p className="titulo">{product.title}</p>
            <p className="precio">{product.price}</p>
            <Link to={`/detalle/${product.id}`} className="link">Ver detalles</Link>
        </div>
    )
}
export default Item
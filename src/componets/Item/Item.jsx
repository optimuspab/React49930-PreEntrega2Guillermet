import "./Item.css";

const Item = ({ product }) => {
    return (
        <div className="item">
            <img className="image" src={product.thumbnail} alt={product.title}></img>
            <p className="titulo">{product.title}</p>
            <p className="precio">{product.price}</p>
        </div>
    )
}
export default Item
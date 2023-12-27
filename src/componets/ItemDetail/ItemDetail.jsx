import "./ItemDetail.css";

const ItemDetail = ({ product }) => {
  return (
    <div className="item-detail">
      <img className="imagen" src={product.thumbnail} alt={product.title} />
      <div className="texto">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>${product.price}</p>
      </div>
    </div>
  );
};
export default ItemDetail;

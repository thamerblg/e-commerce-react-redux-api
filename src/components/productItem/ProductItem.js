import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./ProductItem.css";

const ProductItem = ({ product }) => {
  return (
    /* Single Product */
    <div className="col-md-4 my-4">
      <div className="card item p-2">
        <div className="image">
          <img src={product.image} alt={product.name} />
          <div className="rate">
            <FaStar className="iconSatr" />
            <span>{product.rating}</span>
          </div>
          <button type="button" className="btn view">
            <Link to={`/product/${product.id}`}>view Details</Link>
          </button>
        </div>
        <div className="card-body d-flex justify-content-between align-items-center px-1">
          <h4 className="card-title mb-0">{product.name}</h4>
          <p className="card-text">{product.price}$</p>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;

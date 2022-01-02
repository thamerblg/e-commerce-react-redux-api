import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toggleLoveProduct } from "../../redux/actions/productActions";
import "./ProductItem.css";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  const toggleLove = (e) => {
    dispatch(toggleLoveProduct(product.id));
  };

  return (
    /* Single Product */
    <div className="col-md-4 my-4">
      <div className="card item p-2">
        <div className="image">
          <img src={product.posterImage} alt={product.name} />
          <div className="rate">
            <FaStar className="iconSatr" />
            <span>{product.rating}</span>
          </div>
          <div className="love-it" onClick={toggleLove}>
            <FaRegHeart
              className={`iconLove text-danger ${
                product.inLove && "displayNone"
              }`}
            />
            <FaHeart
              className={`iconLove text-danger ${
                !product.inLove && "displayNone"
              }`}
            />
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

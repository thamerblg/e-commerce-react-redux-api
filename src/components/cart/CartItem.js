import { FaMinus, FaPlus, FaTrashAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {
  addItem,
  deleteItem,
  deleteProductFromCart,
} from "../../redux/actions/cartActions";
import "./CartItem.css";

const CartItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleAdd = (product) => {
    dispatch(addItem(product));
  };

  const handleDel = (product) => {
    dispatch(deleteItem(product));
  };

  const handleDelete = (e) => {
    dispatch(deleteProductFromCart(product.id));
  };

  return (
    <>
      <tr key={product.id}>
        <td>
          <img
            src={product.posterImage}
            alt={product.name}
            height="200px"
            width="180px"
          />
        </td>
        <td>{product.name}</td>
        <td> (For {product.gender} )</td>
        <td>{product.price} $</td>
        <td>
          <FaMinus
            className="btn-counter"
            onClick={() => {
              handleDel(product);
            }}
          />
          <span className="px-1">{product.quantity}</span>
          <FaPlus
            className="btn-counter"
            onClick={() => {
              handleAdd(product);
            }}
          />
        </td>
        <td>{product.price * product.quantity} $</td>
        <td className="delete-btn text-center">
          <FaTrashAlt onClick={handleDelete} className="delete-icon" />
        </td>
      </tr>
      {/*
      <li className="list-unstyled bg-light py-2 px-2">
        <div className="d-flex justify-content-between align-items-center">
          <div className="col-md-2">
            <img
              src={product.image}
              alt={product.name}
              height="200px"
              width="180px"
            />
          </div>
          <div className="col-md-5 px-2 ">
            <strong className="fs-4">{product.name}</strong>
            <span className="fs-8"> (For {product.gender} )</span>
            <p className="mb-0">{product.subTitle}</p>
          </div>
          <div className="col-md-1 text-center">
            <h3 className="mb-0">{product.price} $</h3>
          </div>
          <div className="col-md-2 btns text-center">
            <FaMinus
              className="btn-counter"
              onClick={() => {
                handleDel(product);
              }}
            />
            <span className="px-1">{product.quantity}</span>
            <FaPlus
              className="btn-counter"
              onClick={() => {
                handleAdd(product);
              }}
            />
          </div>
          <div className="col-md-1 text-center">
            <h3 className="mb-0">{product.price * product.quantity} $</h3>
          </div>
          <span className="col-md-1 delete-btn text-center">
            <FaTrashAlt onClick={handleDelete} className="delete-icon" />
          </span>
        </div>
      </li>*/}
    </>
  );
};

export default CartItem;

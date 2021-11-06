import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearCart } from "../../redux/actions/cartActions";
import CartItem from "./CartItem";

const Cart = () => {
  const [productCart, setProductCart] = useState([]);
  const products = useSelector((state) => state.cart.productsCart);

  const totalPrice = products.reduce((a, b) => a + b.price * b.quantity, 0);

  const dispatch = useDispatch();

  useEffect(() => {
    setProductCart(products);
  }, [products]);

  const hundelClick = () => {
    dispatch(clearCart());
  };

  const emptyCart = () => {
    return (
      <div className="px-4 my-5 bg-light rounded-3 py-5">
        <div className="container py-4">
          <div className="row">
            <h3 className="text-center">Your Cart is Empty</h3>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {productCart.length === 0 && emptyCart()}

      {productCart.length !== 0 && (
        <>
          <ul className="px-0 mb-0 rounded">
            {productCart.map((product) => (
              <CartItem product={product} key={product.id} />
            ))}
          </ul>

          <div className="p-4 d-flex justify-content-end">
            <button
              className="btn return-link btn-light btn-sm "
              onClick={hundelClick}
            >
              Clear Cart
            </button>
          </div>

          <div className="d-flex justify-content-end mb-4">
            <div className="col-md-3 bg-light p-3 d-flex justify-content-between">
              <strong className="mb-0 fs-6 text-uppercase">Total price:</strong>
              <span>{totalPrice} $</span>
            </div>
          </div>
        </>
      )}
      <div className="text-center">
        <Link to="/" className="text-white">
          <button className="btn return-link btn-secondary btn-sm ">
            Return to the shop
          </button>
        </Link>
      </div>
    </>
  );
};

export default Cart;

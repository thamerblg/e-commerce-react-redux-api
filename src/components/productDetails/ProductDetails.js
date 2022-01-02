import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import "./ProductDetails.css";
import { FaStar } from "react-icons/fa";
import { addProductToCart } from "../../redux/actions/cartActions";
import { getProductByID } from "../../redux/actions/productActions";
import { useEffect } from "react";
import ImageGallery from "react-image-gallery";
import Swal from "sweetalert2";
import "react-image-gallery/styles/css/image-gallery.css";

const ProductDetails = () => {
  const selected = useSelector((state) => state.product.currentItem);
  const listInCart = useSelector((state) => state.cart.productsCart);
  //console.log(selected);
  const { id } = useParams();
  //console.log(id);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClick = () => {
    history.goBack();
  };

  const opensweetalert = () => {
    Swal.fire({
      title: "Confirmation",
      text: "This product has been successfully added to cart",
      type: "success",
    });
  };
  const opensweetalertdanger = () => {
    Swal.fire({
      title: "Oops",
      text: "This product already existed in your cart",
      type: "warning",
    });
  };

  useEffect(() => {
    dispatch(getProductByID(id));
    // eslint-disable-next-line
  }, []);

  const addProduct = (selectedItem) => {
    //dispatch(addProductToCart(selectedItem));
    //listInCart.map((item) => item.id === selectedItem.id && alertMsg());
    let inCart = listInCart.find((item) => item.id === selectedItem.id)
      ? true
      : false;
    if (inCart === true) {
      opensweetalertdanger();
    } else {
      dispatch(addProductToCart(selectedItem));
      opensweetalert();
    }

    console.log(inCart);
  };

  if (!selected) {
    return <div>loading...</div>;
  }

  return (
    <div className="row ">
      <div className="card flex-row align-items-center my-3">
        <div className="col-md-4">
          {/*<img src={selected.image} className="card-img" alt={selected.name} />*/}
          <ImageGallery
            items={selected.images}
            showBullets={true}
            showThumbnails={true}
            lazyLoad={true}
            showPlayButton={false}
            showFullscreenButton={false}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <div className="card-title text-uppercase">
              <strong className="fs-4">{selected.name}</strong>
              <span className="fs-10"> (For {selected.gender} )</span>
            </div>
            <div className="d-flex justify-content-between">
              <span>{selected.subTitle}</span>
              <h5>
                <strong className="fs-4">{selected.price} $</strong>
              </h5>
            </div>
            <div className="d-flex align-items-center">
              <FaStar className="iconSatr" />
              <span className="fs-6">{selected.rating} Stars / 5</span>
            </div>
            <hr />
            <div className="card-text">
              <p>{selected.description}</p>
              <div className="d-flex align-items-center align-content-center mb-3">
                <h6 className="mb-0">Size: </h6>
                <ul className="m-0 d-flex">
                  {selected.size.map((item, i) => (
                    <li className="tag size" key={i}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="d-flex align-items-center align-content-center mb-4">
                <h6 className="mb-0">Color: </h6>
                {
                  <p className="mb-0 px-3 d-flex">
                    {Object.entries(selected.color).map(([color, value], i) => (
                      <span
                        title={color}
                        style={{ ...colorStyle, background: value }}
                        key={i}
                      ></span>
                    ))}
                  </p>
                }
              </div>
            </div>
            <button
              type="button"
              className="btn btn-outline-success"
              onClick={() => addProduct(selected)}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>

      <div className="text-center">
        <button
          className="btn return-link btn-secondary btn-sm"
          onClick={handleClick}
        >
          Return
        </button>
      </div>
    </div>
  );
};

const colorStyle = {
  display: "inline-block",
  border: "1px solid black",
  borderRadius: "50%",
  width: "1.5rem",
  height: "1.5rem",
  margin: "0 0.2rem",
};

export default ProductDetails;

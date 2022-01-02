import ProductItem from "./productItem/ProductItem";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../redux/actions/productActions";

const ProductList = () => {
  const [listProduct, setListProduct] = useState([]);
  const products = useSelector((state) => state.product.products);
  const filtredProducts = useSelector((state) => state.product.filtredProducts);
  const dispatch = useDispatch();
  //console.log(ListOfProduct);

  useEffect(() => {
    dispatch(getProduct());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    setListProduct(products);
  }, [products]);
  useEffect(() => {
    setListProduct(filtredProducts);
  }, [filtredProducts]);

  return (
    <div className="row">
      {listProduct &&
        listProduct.length > 0 &&
        listProduct.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
    </div>
  );
};

export default ProductList;

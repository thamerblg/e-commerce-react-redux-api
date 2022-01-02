import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { ignoreFilter } from "../redux/actions/productActions";
import FilterByGender from "./filter/FilterByGender";
import FilterByName from "./filter/FilterByName";
import FilterByPrice from "./filter/FilterByPrice";
import FilterByRating from "./filter/FilterByRating";
import ProductList from "./ProductList";

const Home = () => {
  // eslint-disable-next-line
  const initialList = useSelector((state) => state.product.products);

  const dispatch = useDispatch();

  const handleIgnore = () => {
    dispatch(ignoreFilter());
    //console.log("ignore filter");
  };

  return (
    <div className="container">
      <div className="col-md-6 my-5 d-flex justify-content-center flex-column m-auto text-center">
        <h1 className="text-uppercase fs-1 text-light">The best of Air max</h1>
        <p className="text-white">
          Shoes that are always forward-facing and future embracing.
        </p>
      </div>
      <div className="row">
        <div className="col-md-3 mt-4 ">
          <h2 className="text-center text-uppercase fs-4 fw-normal text-white mb-5">
            Filters
          </h2>
          <FilterByName />
          <hr className="bg-white" />
          <FilterByRating />
          <hr className="bg-white" />
          <FilterByGender />
          <hr className="bg-white" />
          <FilterByPrice />
          <hr className="bg-white" />
          <div className="text-center ">
            <button
              className="btn btn-secondary btn-sm "
              onClick={handleIgnore}
            >
              Ignore filter
            </button>
          </div>
        </div>
        <div className="col-md-9">
          <ProductList />
        </div>
      </div>
    </div>
  );
};

export default Home;

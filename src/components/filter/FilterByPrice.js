import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { filterProductByPrice } from "../../redux/actions/productActions";

const FilterByPrice = () => {
  const allProducts = useSelector((state) => state.product.products);
  const dispatch = useDispatch();

  const handleFilter = (e) => {
    dispatch(filterProductByPrice(e.target.value));
  };

  const getNbrProducts = (min, max) => {
    const newList = allProducts.filter(
      (item) => item.price >= min && item.price <= max
    );
    return newList.length;
  };

  return (
    <div className="mb-4 d-flex flex-column justify-content-center">
      <h2 className="text-uppercase fs-6 fw-normal text-white">
        Filter by Price
      </h2>
      <div className="d-flex flex-column px-2 py-3 bg-light rounded">
        <div className="form-check form-check-inline mr-3">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value="50"
            onClick={handleFilter}
          />
          <label className="form-check-label">Under 50$</label>
          <span className="fs-12 px-2">({getNbrProducts(0, 50)})</span>
        </div>

        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio2"
            value="50-100"
            onClick={handleFilter}
          />
          <label className="form-check-label">From 50$ to 100$</label>
          <span className="fs-12 px-2">({getNbrProducts(50, 100)})</span>
        </div>

        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio2"
            value="100-150"
            onClick={handleFilter}
          />
          <label className="form-check-label">From 100$ to 150$</label>
          <span className="fs-12 px-2">({getNbrProducts(100, 150)})</span>
        </div>

        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio2"
            value="150-200"
            onClick={handleFilter}
          />
          <label className="form-check-label">From 150$ to 200$</label>
          <span className="fs-12 px-2">({getNbrProducts(150, 200)})</span>
        </div>

        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio3"
            value="200"
            onClick={handleFilter}
          />
          <label className="form-check-label">Over than 200$</label>
          <span className="fs-12 px-2">({getNbrProducts(200, 999)})</span>
        </div>
      </div>
    </div>
  );
};

export default FilterByPrice;

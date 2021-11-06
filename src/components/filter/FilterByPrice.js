import { useDispatch } from "react-redux";
import { filterProductByPrice } from "../../redux/actions/productActions";

const FilterByPrice = () => {
  const dispatch = useDispatch();

  const handleFilter = (e) => {
    dispatch(filterProductByPrice(e.target.value));
    console.log(filterProductByPrice(e.target.value));
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
        </div>
      </div>
    </div>
  );
};

export default FilterByPrice;

import { useDispatch, useSelector } from "react-redux";
import { filterProductByGender } from "../../redux/actions/productActions";

const FilterByGender = () => {
  const allProducts = useSelector((state) => state.product.products);
  const dispatch = useDispatch();

  const handleFilter = (e) => {
    dispatch(filterProductByGender(e.target.value));
  };
  // eslint-disable-next-line
  const getNbrProducts = (gender) => {
    const newList = allProducts.filter((item) => item.gender === gender);
    return newList.length;
  };

  return (
    <div className="mb-4 d-flex flex-column justify-content-center">
      <h2 className="text-uppercase fs-6 fw-normal text-white">
        Filter by gender
      </h2>
      <div className="d-flex flex-column px-2 py-3 bg-light rounded">
        <div className="form-check form-check-inline mr-3">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value="all"
            onClick={handleFilter}
          />
          <label className="form-check-label">All</label>
          <span className="fs-12 px-2">({allProducts.length})</span>
        </div>

        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio2"
            value="men"
            onClick={handleFilter}
          />
          <label className="form-check-label">Men</label>
          <span className="fs-12 px-2">({getNbrProducts("men")})</span>
        </div>

        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio3"
            value="women"
            onClick={handleFilter}
          />
          <label className="form-check-label">Women</label>
          <span className="fs-12 px-2">({getNbrProducts("women")})</span>
        </div>

        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio3"
            value="unisex"
            onClick={handleFilter}
          />
          <label className="form-check-label">Unisex</label>
          <span className="fs-12 px-2">({getNbrProducts("unisex")})</span>
        </div>

        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio3"
            value="kids"
            onClick={handleFilter}
          />
          <label className="form-check-label">Kids</label>
          <span className="fs-12 px-2">({getNbrProducts("kids")})</span>
        </div>
      </div>
    </div>
  );
};

export default FilterByGender;

import { FormControl } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { filterProductByName } from "../../redux/actions/productActions";

const FilterByName = () => {
  const dispatch = useDispatch();

  const handleFilter = (e) => {
    dispatch(filterProductByName(e.target.value));
    console.log(e.target.value);
  };
  return (
    <div className="mb-4 d-flex flex-column justify-content-center">
      <h2 className="text-uppercase fs-6 fw-normal text-white">
        Filter by Name of product
      </h2>
      <div className="d-flex flex-column px-2 py-3 bg-light rounded">
        <FormControl
          type="search"
          placeholder="Enter name here"
          className="mr-2"
          aria-label="Search"
          onChange={handleFilter}
        />
      </div>
    </div>
  );
};

export default FilterByName;

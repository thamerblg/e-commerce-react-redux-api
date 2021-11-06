import { useDispatch } from "react-redux";
import { useState } from "react";
import ReactStars from "react-stars";
import { filterProductByRating } from "../../redux/actions/productActions";

const FilterByRating = () => {
  // eslint-disable-next-line
  const [rating, setRating] = useState();
  const dispatch = useDispatch();

  const handleFilter = (e) => {
    dispatch(filterProductByRating(e));
    console.log(filterProductByRating(e));
  };

  return (
    <div className="mb-4 d-flex flex-column justify-content-center">
      <h2 className="text-uppercase fs-6 fw-normal text-white">
        Filter by Rating
      </h2>
      <div className="d-flex flex-column px-2 py-3 bg-light rounded">
        <ReactStars
          value={rating}
          isHalf={true}
          starRatedColor="#fe0"
          onChange={handleFilter}
          numberOfStars={5}
          size={45}
          name="rating"
        />
      </div>
    </div>
  );
};

export default FilterByRating;

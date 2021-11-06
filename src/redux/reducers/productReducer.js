import { ActionsTypes } from "../actions/actionsTypes";

const initialState = {
  products: [],
  currentItem: null,
  filtredProducts: [],
};

// eslint-disable-next-line
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionsTypes.GET_PRODUCT:
      return {
        ...state,
        products: payload,
      };

    case ActionsTypes.GET_PRODUCT_BY_ID:
      return {
        ...state,
        currentItem: payload,
      };

    case ActionsTypes.FILTER_PRODUCT_BY_GENDER:
      return {
        ...state,
        filtredProducts:
          payload.toLowerCase() === "men"
            ? state.products.filter((product) => product.gender === "men")
            : payload.toLowerCase() === "women"
            ? state.products.filter((product) => product.gender === "women")
            : payload.toLowerCase() === "unisex"
            ? state.products.filter((product) => product.gender === "unisex")
            : payload.toLowerCase() === "kids"
            ? state.products.filter((product) => product.gender === "kids")
            : state.products,
      };

    case ActionsTypes.FILTER_PRODUCT_BY_PRICE:
      return {
        ...state,
        filtredProducts:
          payload === "50"
            ? state.products.filter((product) => product.price <= 50)
            : payload === "50-100"
            ? state.products.filter(
                (product) => product.price >= 50 && product.price <= 100
              )
            : payload === "100-150"
            ? state.products.filter(
                (product) => product.price >= 100 && product.price <= 150
              )
            : payload === "150-200"
            ? state.products.filter(
                (product) => product.price >= 150 && product.price <= 200
              )
            : payload === "200"
            ? state.products.filter((product) => product.price >= 200)
            : state.products,
      };

    case ActionsTypes.FILTER_PRODUCT_BY_RATING:
      return {
        ...state,
        filtredProducts: state.products.filter(
          (product) => product.rating >= payload
        ),
      };

    case ActionsTypes.FILTER_PRODUCT_BY_NAME:
      return {
        ...state,
        filtredProducts: state.products.filter((product) =>
          product.name.toLowerCase().startsWith(payload.toLowerCase().trim())
        ),
      };

    default:
      return state;
  }
};

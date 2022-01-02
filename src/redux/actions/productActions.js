import axios from "axios";
import { ActionsTypes } from "./actionsTypes";

export const getProduct = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("http://localhost:5000/products");
      dispatch({
        type: ActionsTypes.GET_PRODUCT,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: ActionsTypes.ERROR_PRODUCT,
        payload: err.message,
      });
    }
  };
};
export const getProductByID = (id) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`http://localhost:5000/products/${id}`);
      dispatch({
        type: ActionsTypes.GET_PRODUCT_BY_ID,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: ActionsTypes.ERROR_PRODUCT,
        payload: err.message,
      });
    }
  };
};

export const toggleLoveProduct = (payload) => {
  return {
    type: ActionsTypes.TOGGLE_LOVE_PRODUCT,
    payload,
  };
};
export const filterProductByGender = (payload) => {
  return {
    type: ActionsTypes.FILTER_PRODUCT_BY_GENDER,
    payload,
  };
};

export const filterProductByPrice = (payload) => {
  return {
    type: ActionsTypes.FILTER_PRODUCT_BY_PRICE,
    payload,
  };
};

export const filterProductByRating = (payload) => {
  return {
    type: ActionsTypes.FILTER_PRODUCT_BY_RATING,
    payload,
  };
};

export const filterProductByName = (payload) => {
  return {
    type: ActionsTypes.FILTER_PRODUCT_BY_NAME,
    payload,
  };
};

export const ignoreFilter = (payload) => {
  return {
    type: ActionsTypes.IGNORE_FILTER,
    payload,
  };
};

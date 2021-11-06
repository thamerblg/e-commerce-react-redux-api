import { ActionsTypes } from "./actionsTypes";

// For Add Product to Cart
export const addProductToCart = (product) => {
  return {
    type: ActionsTypes.ADD_PRODUCT_TO_CART,
    payload: product,
  };
};

// For Delete Product From Cart
export const deleteProductFromCart = (product) => {
  return {
    type: ActionsTypes.DELETE_PRODUCT_FROM_CART,
    payload: product,
  };
};

// For Add one-item to Product in Cart
export const addItem = (product) => {
  return {
    type: ActionsTypes.ADD_ITEM,
    payload: product,
  };
};

// For Delete one-item to Product in Cart
export const deleteItem = (product) => {
  return {
    type: ActionsTypes.DELETE_ITEM,
    payload: product,
  };
};

// Get the total price of product in cart
export const getTotalPrice = (product) => {
  return {
    type: ActionsTypes.GET_TOTAL_PRICE,
    payload: product,
  };
};

// Clear cart
export const clearCart = (product) => {
  return {
    type: ActionsTypes.CLEAR_CART,
    payload: product,
  };
};

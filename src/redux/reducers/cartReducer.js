const initialState = {
  productsCart: [],
};

// eslint-disable-next-line
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_PRODUCT_TO_CART":
      // Great Item data from products array
      const inCart = state.productsCart.find(
        (product) => product.id === payload.id
      )
        ? true
        : false;
      //console.log(inCart);
      if (!inCart) {
        var newPayload = { ...payload, inCart: "true" };
        return {
          ...state,
          productsCart: [...state.productsCart, newPayload],
        };
      }
    // eslint-disable-next-line
    case "DELETE_PRODUCT_FROM_CART":
      return {
        ...state,
        productsCart: state.productsCart.filter((prod) => prod.id !== payload),
      };

    case "ADD_ITEM":
      return {
        ...state,
        productsCart: state.productsCart.map((prod) =>
          prod.id === payload.id
            ? { ...prod, quantity: prod.quantity + 1 }
            : prod
        ),
      };

    case "DELETE_ITEM":
      return {
        ...state,
        productsCart: state.productsCart.map((prod) =>
          prod.id === payload.id && prod.quantity > 1
            ? { ...prod, quantity: prod.quantity - 1 }
            : prod
        ),
      };

    case "CLEAR_CART":
      return {
        ...state,
        productsCart: [],
      };

    default:
      return state;
  }
};

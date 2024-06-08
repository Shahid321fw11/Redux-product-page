// src/redux/reducers.js
import {
  FETCH_PRODUCTS,
  FETCH_PRODUCT_BY_ID,
  ADD_PRODUCT,
  UPDATE_PRODUCT,
} from "./action";

const initialState = {
  products: [],
  selectedProduct: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { ...state, products: action.payload };
    case FETCH_PRODUCT_BY_ID:
      return { ...state, selectedProduct: action.payload };
    case ADD_PRODUCT:
      return { ...state, products: [...state.products, action.payload] };
    case UPDATE_PRODUCT:
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload.id ? action.payload : product
        ),
        selectedProduct: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;

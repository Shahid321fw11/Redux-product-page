// src/redux/actions.js
import axios from "axios";

export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const FETCH_PRODUCT_BY_ID = "FETCH_PRODUCT_BY_ID";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";

export const fetchProducts = () => async (dispatch) => {
  const response = await axios.get("/product.json");
  dispatch({ type: FETCH_PRODUCTS, payload: response.data });
};

export const fetchProductById = (id) => async (dispatch) => {
  const response = await axios.get("/product.json");
  console.log("res", response);
  const product = response.data.find((p) => p.id === parseInt(id));
  console.log("pro", product);
  dispatch({ type: FETCH_PRODUCT_BY_ID, payload: product });
};

export const addProduct = (product) => ({
  type: ADD_PRODUCT,
  payload: product,
});

export const updateProduct = (product) => ({
  type: UPDATE_PRODUCT,
  payload: product,
});

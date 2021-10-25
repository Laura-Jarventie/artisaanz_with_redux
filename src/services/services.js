import axios from "axios";

const baseUrl = "https://artisaanz.herokuapp.com";

export const getAllProducts = async () => {
  const response = await axios.get(baseUrl + "/product/all");
  return response.data;
};

export const getMakers = async () => {
  const response = await axios.get(baseUrl + "/seller/all");
  return response.data;
};

export const getSingleProduct = async (id) => {
  const response = await axios.get(baseUrl + "/product/find/" + id);
  return response.data;
};

export const getCart = async () => {
  const response = await axios.get(baseUrl + "/cart/all");
  return response.data;
};

export const sendToCart = async (product) => {
  const response = await axios.post(baseUrl + "/cart/add", product);
  return response.data;
};

export const removeFromCart = async (id) => {
  const response = await axios.delete(baseUrl + "/cart/remove/" + id);
  return response.data;
};

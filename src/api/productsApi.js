import axios from "axios";

const API_URL = "http://localhost:5000/products";

export const fetchProductsApi = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};
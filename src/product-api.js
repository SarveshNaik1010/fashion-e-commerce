import axios from 'axios';

const BASE_URL = 'https://fakestoreapi.com/products';

export async function getProducts(query) {
  const res = await axios.get(`${BASE_URL}`);
  return res.data;
}

export async function getProductById(id) {
  const res = await axios.get(`${BASE_URL}/${id}`);
  return res;
}

export async function getProductsByCategory(category) {
  if (category === 'all products') return await getProducts();
  const res = await axios.get(`${BASE_URL}/category/${category}`);
  return res.data;
}

export async function getCategories() {
  const res = await axios.get(`${BASE_URL}/categories`);
  return res.data;
}

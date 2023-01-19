const API_URL = process.env.REACT_APP_API_URL;

function getproducts() {
  return fetch(`${API_URL}/api/products`).then((response) => response.json());
}

export default getproducts;

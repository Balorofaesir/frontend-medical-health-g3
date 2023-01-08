const API_URL = process.env.REACT_APP_API_URL;

function getDoctors() {
  return fetch(`${API_URL}/doctors`).then((response) => response.json());
}

export default getDoctors;

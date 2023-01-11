const API_URL =  "https://top-25-grupo-3333.onrender.com/api";

function getDoctors() {
  return fetch(`${API_URL}/doctors`).then((response) => response.json());
}

export default getDoctors;

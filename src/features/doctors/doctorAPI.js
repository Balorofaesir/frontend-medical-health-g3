const API_URL = process.env.REACT_APP_API_URL;

function getDoctors() {
  return fetch(`${API_URL}/api/doctors`).then((response) => response.json());
}

export default getDoctors;

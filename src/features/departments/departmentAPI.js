const API_URL = process.env.REACT_APP_API_URL;

function getDepartments() {
  return fetch(`${API_URL}/departments`).then((response) => response.json());
}

export default getDepartments;

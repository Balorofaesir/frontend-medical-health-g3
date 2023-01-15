const API_URL = process.env.REACT_APP_API_URL;

export function getDoctors() {
  return fetch(`${API_URL}/doctors`).then((response) => response.json());
}
export function getEspecificDoctor(id) {
  return fetch(`${API_URL}/doctors/${id}`).then((response) => response.json());
}

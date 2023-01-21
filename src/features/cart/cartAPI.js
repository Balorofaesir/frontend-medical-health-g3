const API_URL = process.env.REACT_APP_API_URL;
const token = localStorage.getItem('token');

export function getcarts() {
  return fetch(`${API_URL}/api/users`).then((response) => response.json());
}

export function sendCartList(values) {
  return fetch(`${API_URL}/api/users`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
    },
    body: JSON.stringify(values),
  }).then((res) => res.json());
}

export function setCartList(values) {
  return fetch(`${API_URL}/api/users`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
    },
    body: JSON.stringify(values),
  }).then((res) => res.json());
}

export function confirmCart(values, id) {
  return fetch(`${API_URL}/api/users/${id}`, {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(values),
  }).then((res) => res.json());
}

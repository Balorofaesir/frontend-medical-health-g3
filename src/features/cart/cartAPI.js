const API_URL = process.env.REACT_APP_API_URL;

export function getcarts() {
  return fetch(`${API_URL}/carts`).then((response) => response.json());
}

export function sendCartList(values) {
  return fetch(`${API_URL}/carts`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
    },
    body: JSON.stringify(values),
  }).then((res) => res.json());
}

export function setCartList(id) {
  return fetch(`${API_URL}/CartLists/${id}`).then((res) => res.json());
}

export function confirmCartList(values) {
  return fetch(`${API_URL}/CartLists/${values.id}`, {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
    },
    body: JSON.stringify(values),
  }).then((res) => res.json());
}

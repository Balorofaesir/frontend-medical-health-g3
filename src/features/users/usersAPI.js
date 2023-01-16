const API_URL = process.env.REACT_APP_API_URL;

function sendUser(values) {
  return fetch(`${API_URL}/Users`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
    },
    body: JSON.stringify(values),
  }).then((res) => res.json());
}

export function setUser(id) {
  return fetch(`${API_URL}/Users/${id}`).then((res) => res.json());
}

export function setUsers() {
  return fetch(`${API_URL}/Users`).then((res) => res.json());
}

export function confirmUser(values) {
  return fetch(`${API_URL}/Users/${values.id}`, {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
    },
    body: JSON.stringify(values),
  }).then((res) => res.json());
}

export default sendUser;

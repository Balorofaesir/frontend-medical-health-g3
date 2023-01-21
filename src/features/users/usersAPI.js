const API_URL = process.env.REACT_APP_API_URL;

async function sendUser(userData) {
  const res = await fetch(`${API_URL}/api/users`, {
    method: 'POST',
    headers: new Headers({ 'Content-Type': 'application/json' }),
    body: JSON.stringify(userData)
  });
  if (res.ok) return res.json();
  throw new Error('Email already taken!');
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
export default  sendUser

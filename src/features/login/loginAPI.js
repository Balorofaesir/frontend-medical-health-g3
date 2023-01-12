const API_URL = 'https://top-25-grupo-3.onrender.com/auth/local';

function sendLogin(values) {
  return fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
    },
    body: JSON.stringify(values),
  }).then((res) => res.json());
}

export default sendLogin;

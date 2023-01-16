const API_URL = 'https://top-25-grupo-3.onrender.com/auth/local';

async function sendLogin(values) {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify(values),
    });

    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (err) {
    throw new Error(err);
  }
  /* return fetch(`${API_URL}/login`, { */
  /*   method: 'POST', */
  /*   headers: { */
  /*     Accept: 'application/json', */
  /*     'Content-type': 'application/json', */
  /*   }, */
  /*   body: JSON.stringify(values), */
  /* }).then((res) => res.json()); */
}

export default sendLogin;

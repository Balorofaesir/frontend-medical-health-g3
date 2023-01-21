const API_URL = process.env.REACT_APP_API_URL;

async function sendUser(values) {
  try {
    const response = await fetch(`${API_URL}api/users`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
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
}

export default sendUser;

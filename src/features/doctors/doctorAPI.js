const API_URL = process.env.REACT_APP_API_URL;

async function getDoctors() {
  try {
    const response = await fetch(`${API_URL}api/doctors`);
    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }
    const result = await response.json();
    return result;
  } catch (err) {
    throw new Error(err);
  }
}

export default getDoctors;

const API_URL = process.env.REACT_APP_API_URL;

async function getCarts() {
  try {
    const response = await fetch(`${API_URL}/api/carts`);
    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }
    const result = await response.json();
    return result;
  } catch (err) {
    throw new Error(err);
  }
}

export default getCarts;

const API_URL = process.env.REACT_APP_API_URL;

const getToken = () => localStorage.getItem('token');

async function getMyProfile() {
  const res = await fetch(`${API_URL}/api/users/me`, {
    headers: { Authorization: `Bearer ${getToken()}` },
  });

  if (res.ok) return res.json();
  throw new Error('Bad Credentials');
}

export default getMyProfile;

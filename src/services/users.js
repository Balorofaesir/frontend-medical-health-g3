/* eslint-disable import/prefer-default-export */
const BASE_URL = 'http://localhost:8080';

const getToken = window.localStorage.getItem('token');
console.log(getToken)

export async function getMyProfile() {
  const res = await fetch(`${BASE_URL}/api/users/me`, {
    headers: { 'Authorization': `bearer ${getToken}`}
  });

  if (res.ok) return res.json();
  throw new Error('bad credential');

}

const API_URL = process.env.REACT_APP_API_URL;
;

function sendAppointment(values) {
  return fetch(`${API_URL}/api/citas`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
    },
    body: JSON.stringify(values),
  }).then((res) => res.json());
}

export function setAppointment(id) {
  return fetch(`${API_URL}/api/citas/${id}`).then((res) => res.json());
}

export function getAppointments() {
  return fetch(`${API_URL}/api/citas`).then((response) => response.json());
}

export function confirmAppointment(values) {
  const token = localStorage.getItem('token')
  return fetch(`${API_URL}/api/citas/`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(values),
  }).then((res) => res.json());
}

export function getAppointmentsByUser() {
  const token = localStorage.getItem('token')
  return fetch(`${API_URL}/api/citas/users/history`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
}


export default sendAppointment;

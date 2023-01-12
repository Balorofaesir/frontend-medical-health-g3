const API_URL = process.env.REACT_APP_API_URL;

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
  return fetch(`${API_URL}/api/citas/${values}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
    },
    body: JSON.stringify(values),
  }).then((res) => res.json());
}

export default sendAppointment;

const API_URL = process.env.REACT_APP_API_URL;

function sendAppointment(values) {
  return fetch(`${API_URL}/appointments`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
    },
    body: JSON.stringify(values),
  }).then((res) => res.json());
}

export function setAppointment(id) {
  return fetch(`${API_URL}/appointments/${id}`).then((res) => res.json());
}

export function confirmAppointment(values) {
  return fetch(`${API_URL}/appointments/${values.id}`, {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
    },
    body: JSON.stringify(values),
  }).then((res) => res.json());
}

export default sendAppointment;

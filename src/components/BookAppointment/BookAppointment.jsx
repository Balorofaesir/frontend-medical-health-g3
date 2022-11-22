import { useEffect, useState } from 'react';
import './BookAppointment.css';

const BookAppointment = () => {
  const [departments, setDepartments] = useState([]);
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/departments')
      .then((response) => response.json())
      .then((data) => setDepartments(data));
  }, []);

  useEffect(() => {
    fetch('http://localhost:8080/api/doctors')
      .then((response) => response.json())
      .then((data) => setDoctors(data));
  }, []);

  const [user, setUser] = useState({
    name: '',
    email: '',
    date: '',
    department: '',
    doctor: '',
    message: '',
  });

  const handleInput = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const sendData = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(user),
    };
    fetch('http://localhost:8080/api/users', sendData);
  };

  return (
    <div className="container">
      <h1 className="container__title">Book apointment</h1>
      <p className="container__paragraph">
        Fillup the form to make an appointment with the doctor
      </p>
      <form className="form" onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          className="form__input"
          placeholder="Full name"
          onChange={handleInput}
        />
        <input
          name="email"
          type="email"
          className="form__input"
          placeholder="Email address"
          onChange={handleInput}
        />
        <input
          name="date"
          type="date"
          className="form__input form__input--date"
          placeholder="Booking date &nbsp;"
          onChange={handleInput}
        />
        <select
          name="department"
          className="form__select"
          defaultValue="default"
          onClick={handleInput}
        >
          <option
            value="default"
            disabled
            hidden
            className="form__opt--disabled"
          >
            Department
          </option>
          {departments.map((department) => (
            <option value={department} key={department} className="form__opt">
              {department}
            </option>
          ))}
        </select>
        <select
          className="form__select"
          defaultValue="default"
          name="doctor"
          onClick={handleInput}
        >
          <option value="default" hidden disabled>
            Doctor
          </option>
          {doctors.map((doctor) => (
            <option value={doctor} key={doctor} className="form__opt">
              {doctor}
            </option>
          ))}
        </select>
        <textarea
          name="message"
          className="form__message"
          placeholder="Your message"
          onChange={handleInput}
        />
        <button type="submit" className="form__btn">
          Book appointment →
        </button>
      </form>
    </div>
  );
};

export default BookAppointment;

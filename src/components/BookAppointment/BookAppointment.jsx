import { useState } from 'react';
import './BookAppointment.css';

const BookAppointment = () => {
  const departments = ['Diagnostics', 'Dermatology', 'Urgency'];

  const doctors = ['Rosario', 'Valentina', 'Juan'];

  const [user, setUser] = useState({
    name: '',
    email: '',
  });

  const handleInput = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const [department, setDepartment] = useState('');
  const [doctor, setDoctor] = useState('');
  const [message, setMessage] = useState('');

  const handleSelectOpt1 = (e) => {
    setDepartment(e.target.value);
  };

  const handleSelectOpt2 = (e) => {
    setDoctor(e.target.value);
  };

  const handleTextarea = (e) => {
    setMessage(e.target.value);
  };

  const data = {
    ...user,
    department,
    doctor,
    message,
  };

  const subm = (dat) => {
    const info = JSON.stringify(dat);
    alert(info);
  };

  const sendData = (e) => {
    e.preventDefault();
    subm(data);
  };

  return (
    <div className="container">
      <h1 className="container__title">Book apointment</h1>
      <p className="container__paragraph">
        Fillup the form to make an appointment with the doctor
      </p>
      <form className="form" onSubmit={sendData}>
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
        <select className="form__select" onClick={handleSelectOpt1}>
          <option value="" hidden className="form__opt--disabled">
            Department
          </option>
          {departments.map((item) => (
            <option
              name={department}
              value={item}
              key={item}
              className="form__opt"
            >
              {item}
            </option>
          ))}
        </select>
        <select className="form__select" onClick={handleSelectOpt2}>
          <option value="" hidden className="form__opt--disabled">
            Doctor
          </option>
          {doctors.map((item) => (
            <option name={doctor} value={item} key={item} className="form__opt">
              {item}
            </option>
          ))}
        </select>
        <textarea
          className="form__message"
          placeholder="Your message"
          onChange={handleTextarea}
        />
        <button type="submit" className="form__btn">
          Book appointment →
        </button>
      </form>
    </div>
  );
};

export default BookAppointment;

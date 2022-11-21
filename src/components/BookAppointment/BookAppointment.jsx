import { useEffect, useState } from "react";
import "./BookAppointment.css";

const BookAppointment = () => {
  const [docdep, setDocdep] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/db")
      .then((response) => response.json())
      .then((data) => {
        setDocdep(data);
      });
  }, []);

  console.log(docdep);
  const { departments, doctors } = docdep;

  const [user, setUser] = useState({
    name: "",
    email: "",
    date: "",
    department: "",
    doctor: "",
    message: "",
  });

  const handleInput = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const sendData = (e) => {
    e.preventDefault();
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
            <option value={doctor.name} key={doctor.id} className="form__opt">
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

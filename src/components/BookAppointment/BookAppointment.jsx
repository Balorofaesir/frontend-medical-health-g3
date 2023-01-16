import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectDoctor, setDoctors } from '../../features/doctors/doctorSlice';
import './BookAppointment.css';

const BookAppointment = () => {
  const doctors = useSelector(selectDoctor);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const setLocalStorage = (value) => {
    try {
      window.localStorage.setItem('appointment', JSON.stringify(value));
    } catch (err) {
      throw new Error(err);
    }
  };

  useEffect(() => {
    dispatch(setDoctors());
  }, [dispatch]);

  const [user, setUser] = useState({
    user: '',
    email: '',
    date: '',
    specialty: '',
    doctor: '',
    reasonForConsultation: '',
  });

  const handleInput = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLocalStorage(user);
    navigate(`/appointment/`);
  };

  return (
    <div className="containerBappointment">
      <h1 className="containerBappointment__title">Book appointment</h1>
      <p className="containerBappointment__paragraph">
        Fillup the form to make an appointment with the doctor
      </p>
      <form className="formBappointment" onSubmit={handleSubmit}>
        <input
          name="user"
          type="text"
          className="formBappointment__input"
          placeholder="Full name"
          onChange={handleInput}
        />
        <input
          name="email"
          type="email"
          className="formBappointment__input"
          placeholder="Email address"
          onChange={handleInput}
        />
        <input
          name="date"
          type="date"
          className="formBappointment__input formBappointment__input--date"
          placeholder="Booking date &nbsp;"
          onChange={handleInput}
        />
        <select
          name="specialty"
          className="formBappointment__select"
          defaultValue="default"
          onChange={handleInput}
        >
          <option
            value="default"
            disabled
            hidden
            className="formBappointment__opt--disabled"
          >
            Department
          </option>
          {doctors.map((department) => (
            <option
              value={department.specialty}
              key={department._id}
              className="formBappointment__opt"
            >
              {department.specialty}
            </option>
          ))}
        </select>
        <select
          className="formBappointment__select"
          defaultValue="default"
          name="doctor"
          onChange={handleInput}
        >
          <option value="default" hidden disabled>
            Doctor
          </option>
          {doctors.map((doctor) => (
            <option
              value={doctor.name}
              key={doctor._id}
              className="formBappointment__opt"
            >
              {doctor.name}
            </option>
          ))}
        </select>
        <textarea
          name="reasonForConsultation"
          className="formBappointment__message"
          placeholder="Your message"
          onChange={handleInput}
        />
        <button type="submit" className="formBappointment__btn">
          Book appointment →
        </button>
      </form>
    </div>
  );
};

export default BookAppointment;

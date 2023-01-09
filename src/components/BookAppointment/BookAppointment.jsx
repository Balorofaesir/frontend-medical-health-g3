import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectDoctor, setDoctors } from '../../features/doctors/doctorSlice';
import {
  selectDepartment,
  setDepartments,
} from '../../features/departments/departmentSlice';
import './BookAppointment.css';
import { makeAppointment } from '../../features/appointments/appointmentSlice';

const BookAppointment = () => {
  const { doctors } = useSelector(selectDoctor);
  const { departments } = useSelector(selectDepartment);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setDepartments());
  }, [dispatch]);

  useEffect(() => {
    dispatch(setDoctors());
  }, [dispatch]);

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
    dispatch(makeAppointment(user));
  };

  return (
    <div className="containerBappoiment">
      <h1 className="containerBappoiment__title">Book appointment</h1>
      <p className="containerBappoiment__paragraph">
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
          onChange={handleInput}
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
            <option
              value={department.department}
              key={department.id}
              className="form__opt"
            >
              {department.department}
            </option>
          ))}
        </select>
        <select
          className="form__select"
          defaultValue="default"
          name="doctor"
          onChange={handleInput}
        >
          <option value="default" hidden disabled>
            Doctor
          </option>
          {doctors.map((doctor) => (
            <option value={doctor.doctor} key={doctor.id} className="form__opt">
              {doctor.doctor}
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

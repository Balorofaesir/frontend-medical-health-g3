import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectDoctor, setDoctors } from '../../features/doctors/doctorSlice';
import {
  selectDepartment,
  setDepartments,
} from '../../features/departments/departmentSlice';
import './BookAppointment.css';
import {
  createAppointment,
  setAppointments,
} from '../../features/appointments/appointmentSlice';

const BookAppointment = () => {
  const { doctors } = useSelector(selectDoctor);
  const { departments } = useSelector(selectDepartment);
  const data = useSelector((state) => state.appointment.appointment);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(setDepartments());
  }, [dispatch]);

  useEffect(() => {
    dispatch(setDoctors());
  }, [dispatch]);

  useEffect(() => {
    dispatch(setAppointments());
  }, [dispatch]);

  const value = data.map((item) => item.id);
  const almostId = value.slice(value.length - 1);
  const id = Number(almostId) + 1;

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
    dispatch(createAppointment(user));
    navigate(`/appointment/${id}`);
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
          className="appointmentForm__input"
          placeholder="Full name"
          onChange={handleInput}
        />
        <input
          name="email"
          type="email"
          className="appointmentForm__input"
          placeholder="Email address"
          onChange={handleInput}
        />
        <input
          name="date"
          type="date"
          className="appointmentForm__input appointmentForm__input--date"
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

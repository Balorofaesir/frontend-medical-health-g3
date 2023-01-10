import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAppointment } from '../../features/appointments/appointmentSlice';

const Appointments = () => {
  const { id } = useParams();
  const { name, email, department, doctor, date, message } = useSelector(
    (state) => state.appointment.appointment
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAppointment(id));
  }, [dispatch]);

  const [appointment, setAppointment] = useState({
    name,
    email,
    phoneNumber: 0,
    nationality: '',
    date,
    residence: '',
    department,
    doctor,
    hospital: '',
    appointmentDate: '',
    message,
  });

  const handleInput = (e) => {
    setAppointment({
      ...appointment,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <p>If you need to appointment</p>
      <form>
        <fieldset>
          <legend>Patient Information</legend>
          <label htmlFor="name">
            Patient name
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={handleInput}
            />
          </label>
          <label htmlFor="email">
            Email address
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleInput}
            />
          </label>
          <label htmlFor="phoneNumber">
            Phone number
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              onChange={handleInput}
            />
          </label>
          <label htmlFor="nationality">
            Nationality
            <select name="nationality" id="nationality" onChange={handleInput}>
              <option value="canada">Canada</option>
            </select>
          </label>
          <label htmlFor="birth">
            Date of birth
            <input
              type="date"
              id="birth"
              name="date"
              value={date}
              onChange={handleInput}
            />
          </label>
          <label htmlFor="residence">
            Country of residence
            <select name="residence" id="residence" onChange={handleInput}>
              <option value="canada">Canada</option>
            </select>
          </label>
          <span>
            <label htmlFor="female">
              Male
              <input type="checkbox" name="male" id="male" value="male" />
            </label>
            <label htmlFor="female">
              Female
              <input type="checkbox" name="female" id="female" value="female" />
            </label>
          </span>
        </fieldset>
        <fieldset>
          <legend>Appointment Information</legend>
          <label htmlFor="department">
            Speciality
            <select name="department" id="department" onChange={handleInput}>
              <option value="department">{department}</option>
            </select>
          </label>
          <label htmlFor="doctor">
            Preferred doctor
            <select name="doctor" id="doctor" onChange={handleInput}>
              <option value="doctor">{doctor}</option>
            </select>
          </label>
          <label htmlFor="hospital">
            At the following hospital
            <select name="hospital" id="hospital" onChange={handleInput}>
              <option value="hospital">hospital</option>
            </select>
          </label>
          <label htmlFor="dateAppointment">
            Date of appointment
            <input
              type="date"
              name="dateAppointment"
              id="dateAppointment"
              onChange={handleInput}
            />
          </label>
          <label htmlFor="message">
            Reason of consultation
            <textarea defaultValue={message} name="message" />
          </label>
        </fieldset>
        <button type="submit">Submit →</button>
      </form>
    </div>
  );
};

export default Appointments;

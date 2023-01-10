import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  selectAppointment,
  getAppointment,
} from '../../features/appointments/appointmentSlice';

const Appointments = () => {
  const { id } = useParams();
  const { name, email, date, department, doctor, message } =
    useSelector(selectAppointment);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAppointment(id));
  }, [dispatch]);

  const [appointment, setAppointment] = useState({
    name: '',
    email: '',
    phoneNumber: 0,
    nationality: '',
  });

  const handleInput = (e) => {
    setAppointment(...appointment, ([e.target.name] = e.target.value));
  };

  return (
    <div>
      <p>If you need to appointment</p>
      <form>
        <fieldset>
          <legend>Patient Information</legend>
          <label htmlFor="name" onChange={handleInput}>
            Patient name
            <input type="text" id="name" value={name} />
          </label>
          <label htmlFor="email">
            Email address
            <input type="email" id="email" value={email} />
          </label>
          <label htmlFor="number">
            Phone number
            <input type="number" id="number" value="phoneNumber" />
          </label>
          <label htmlFor="nationality">
            Nationality
            <select name="nationality" id="nationality">
              <option value="canada">Canada</option>
            </select>
          </label>
          <label htmlFor="birth">
            Date of birth
            <input type="date" id="birth" value={date} />
          </label>
          <label htmlFor="residence">
            Country of residence
            <select name="residence" id="residence">
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
          <label htmlFor="department" onChange={handleInput}>
            Speciality
            <select name="department" id="department">
              <option value="department">{department}</option>
            </select>
          </label>
          <label htmlFor="doctor">
            Preferred doctor
            <select name="doctor" id="doctor">
              <option value="doctor">{doctor}</option>
            </select>
          </label>
          <label htmlFor="hospital">
            At the following hospital
            <select name="hospital" id="hospital">
              <option value="hospital">hospital</option>
            </select>
          </label>
          <label htmlFor="dateAppointment">
            Date of appointment
            <input type="date" name="dateAppointment" id="dateAppointment" />
          </label>
          <label htmlFor="message">
            Reason of consultation
            <textarea>{message}</textarea>
          </label>
        </fieldset>
        <button type="submit">Submit →</button>
      </form>
    </div>
  );
};

export default Appointments;

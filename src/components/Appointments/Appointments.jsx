import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { makeAppointment } from '../../features/appointments/appointmentSlice';
import { selectDoctor, setDoctors } from '../../features/doctors/doctorSlice';
import './Appointment.css';

const Appointments = () => {
  const navigate = useNavigate();
  const doctors = useSelector(selectDoctor);
  const dispatch = useDispatch();
  const getLocalData = () => {
    const getLocalStorage = localStorage.getItem('appointment');
    if (getLocalStorage === null) {
      const data = {
        doctor: 'Select doctor',
        specialty: 'Select specialty',
        reasonForConsultation: '',
        dateAppointment: '',
      };
      return data;
    }
    const data = JSON.parse(getLocalStorage);
    return data;
  };
  const { doctor, specialty, reasonForConsultation, dateAppointment } =
    getLocalData();
  useEffect(() => {
    dispatch(setDoctors());
  }, [dispatch]);
  const [appointment, setAppointment] = useState({
    doctor,
    specialty,
    reasonForConsultation,
    dateAppointment,
  });
  const handleInput = (e) => {
    setAppointment({
      ...appointment,
      [e.target.name]: e.target.value,
    });
  };
  const options = (opt) => {
    if (opt === 'Select specialty' || opt === 'Select doctor') {
      return (
        <select
          name="dateAppointment"
          id="dateAppointment"
          className="form__input--select"
          defaultValue="default"
          onChange={handleInput}
          required
        >
          <option value="default" disabled hidden>
            {opt}
          </option>
          {doctors.map((data) => (
            <option value={data.specialty} key={data._id}>
              {data.specialty}
            </option>
          ))}
        </select>
      );
    }
    return (
      <select
        name="dateAppointment"
        id="dateAppointment"
        className="form__input--select"
        defaultValue="default"
        onChange={handleInput}
        required
      >
        {doctors.map((data) => (
          <option value={data.specialty} key={data._id}>
            {data.specialty}
          </option>
        ))}
      </select>
    );
  };
  const options2 = (opt) => {
    if (opt === 'Select specialty' || opt === 'Select doctor') {
      return (
        <select
          name="doctor"
          id="doctor"
          className="form__input--select"
          defaultValue="default"
          onChange={handleInput}
          required
        >
          <option value="default" disabled hidden>
            {opt}
          </option>
          {doctors.map((data) => (
            <option value={data.name} key={data._id}>
              {data.name}
            </option>
          ))}
        </select>
      );
    }
    return (
      <select
        name="doctor"
        id="doctor"
        className="form__input--select"
        defaultValue="default"
        onChange={handleInput}
        required
      >
        {doctors.map((data) => (
          <option value={data.name} key={data._id}>
            {data.name}
          </option>
        ))}
      </select>
    );
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const dataToSend = {
        doctorId: appointment.doctor,
        date: appointment.dateAppointment,
        place: 'virtual',
        speciality: appointment.specialty,
        reasonForConsultation: appointment.reasonForConsultation,
      };
      dispatch(makeAppointment(dataToSend));
      console.log(dataToSend)
      setAppointment('');
      alert('appointment created');
      navigate('/profile');
    } catch (err) {
      throw new Error(err);
    }
  };
  return (
    <div className="appointment__globalContainer">
      <form onSubmit={handleSubmit} className="appointment__formContainer">
        <fieldset className="form__fieldset">
          <p className="appointment__introParagraph">
            If you need to appointment
          </p>
          <h1 className="form__title">Appointment Information</h1>
          <span className="formSpan__group">
            <p> specialty </p>
            <label htmlFor="specialty" className="form__label">
              {options(specialty)}
            </label>
          </span>
          <span className="formSpan__group">
            <p>preferred doctor</p>
            <label htmlFor="doctor" className="form__label">
              {options2(doctor)}
            </label>
          </span>
          <span className="formSpan__group">
            <p>date of appointment</p>
            <label htmlFor="dateAppointment" className="form__label">
              <input
                type="datetime-local"
                name="dateAppointment"
                className="form__input"
                id="dateAppointment"
                defaultValue={dateAppointment}
                onChange={handleInput}
                required
              />
            </label>
          </span>
          <span className="formSpan__group">
            <p>reason for consultation</p>
            <label
              htmlFor="reasonForConsultation"
              className="form__label--message"
            >
              <input
                defaultValue={reasonForConsultation}
                name="reasonForConsultation"
                cols="180"
                id='reasonForConsultation'
                rows="5"
                className="form__textMessage"
                required
              />
            </label>
          </span>
          <button type="submit" className="form__button">
            Submit →
          </button>
        </fieldset>
      </form>
    </div>
  );
};
export default Appointments;

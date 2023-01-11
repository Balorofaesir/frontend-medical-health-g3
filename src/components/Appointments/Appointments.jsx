import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  getAppointment,
  makeAppointment,
} from '../../features/appointments/appointmentSlice';
import {
  selectDepartment,
  setDepartments,
} from '../../features/departments/departmentSlice';
import { selectDoctor, setDoctors } from '../../features/doctors/doctorSlice';
import './Appointment.css';

const Appointments = () => {
  const { id } = useParams();
  const { name, email, department, doctor, date, message } = useSelector(
    (state) => state.appointment.appointment
  );
  const { departments } = useSelector(selectDepartment);
  const { doctors } = useSelector(selectDoctor);
  const dispatch = useDispatch();
  const country = ['Canada', 'Colombia', 'USA', 'Mexico'];
  const hospital = [
    'Mebid Hospital',
    'Centro Médico Nacional Siglo XXI',
    'Hospital Ángeles Loma',
    'Hospital General de México',
  ];

  useEffect(() => {
    dispatch(getAppointment(id));
  }, [dispatch]);

  useEffect(() => {
    dispatch(setDepartments());
  }, [dispatch]);

  useEffect(() => {
    dispatch(setDoctors());
  }, dispatch);

  const [appointment, setAppointment] = useState({
    id,
    phoneNumber: 0,
    nationality: '',
    residence: '',
    sex: '',
    hospital: '',
    dateAppointment: '',
  });

  const handleInput = (e) => {
    setAppointment({
      ...appointment,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(makeAppointment(appointment));
  };

  return (
    <div className="appointment__globalContainer">
      <p className="appointment__introParagraph">If you need to appointment</p>
      <form onSubmit={handleSubmit} className="appointment__formContainer">
        <fieldset className="form__fieldset">
          <legend className="form__title">Patient Information</legend>
          <span className="formSpan__group">
            <label htmlFor="name" className="form__label">
              Patient name
              <input
                type="text"
                id="name"
                name="name"
                className="form__input"
                defaultValue={name}
                onChange={handleInput}
              />
            </label>
            <label htmlFor="email" className="form__label">
              Email address
              <input
                type="email"
                id="email"
                name="email"
                className="form__input"
                defaultValue={email}
                onChange={handleInput}
              />
            </label>
          </span>
          <span className="formSpan__group">
            <label htmlFor="phoneNumber" className="form__label">
              Phone number
              <input
                type="text"
                id="phoneNumber"
                className="form__input"
                name="phoneNumber"
                onChange={handleInput}
              />
            </label>
            <label htmlFor="nationality" className="form__label">
              Nationality
              <select
                name="nationality"
                id="nationality"
                className="form__input"
                onChange={handleInput}
              >
                {country.map((countries) => (
                  <option value={countries} key={countries}>
                    {countries}
                  </option>
                ))}
              </select>
            </label>
          </span>
          <span className="formSpan__group">
            <label htmlFor="birth" className="form__label">
              Date of birth
              <input
                type="date"
                id="birth"
                name="date"
                className="form__input"
                defaultValue={date}
                onChange={handleInput}
              />
            </label>
            <label htmlFor="residence" className="form__label">
              Country of residence
              <select
                name="residence"
                id="residence"
                className="form__input"
                onChange={handleInput}
              >
                {country.map((countries) => (
                  <option value={countries} key={countries}>
                    {countries}
                  </option>
                ))}
              </select>
            </label>
          </span>
          <span>
            <label htmlFor="male">
              Male
              <input
                type="checkbox"
                name="sex"
                id="male"
                value="male"
                onChange={handleInput}
              />
            </label>
            <label htmlFor="female">
              Female
              <input
                type="checkbox"
                name="sex"
                id="female"
                value="female"
                onChange={handleInput}
              />
            </label>
          </span>
        </fieldset>
        <fieldset className="form__fieldset">
          <legend className="form__title">Appointment Information</legend>
          <span className="formSpan__group">
            <label htmlFor="department" className="form__label">
              Speciality
              <select
                name="department"
                id="department"
                className="form__input"
                onChange={handleInput}
              >
                <option selected hidden>
                  {department}
                </option>
                {departments.map((departmentOpt) => (
                  <option
                    value={departmentOpt.department}
                    key={departmentOpt.id}
                  >
                    {departmentOpt.department}
                  </option>
                ))}
              </select>
            </label>
            <label htmlFor="doctor" className="form__label">
              Preferred doctor
              <select
                name="doctor"
                id="doctor"
                className="form__input"
                onChange={handleInput}
              >
                <option selected hidden>
                  {doctor}
                </option>
                {doctors.map((doctorOpt) => (
                  <option value={doctorOpt.doctor} key={doctorOpt.id}>
                    {doctorOpt.doctor}
                  </option>
                ))}
              </select>
            </label>
          </span>
          <span className="formSpan__group">
            <label htmlFor="hospital" className="form__label">
              At the following hospital
              <select
                name="hospital"
                id="hospital"
                className="form__input"
                onChange={handleInput}
              >
                {hospital.map((hospitals) => (
                  <option value={hospitals}>{hospitals}</option>
                ))}
              </select>
            </label>
            <label htmlFor="dateAppointment" className="form__label">
              Date of appointment
              <input
                type="date"
                name="dateAppointment"
                className="form__input"
                id="dateAppointment"
                onChange={handleInput}
              />
            </label>
          </span>
          <span className="formSpan__group">
            <label htmlFor="message" className="form__label">
              Reason of consultation
              <textarea defaultValue={message} name="message" />
            </label>
          </span>
        </fieldset>
        <button type="submit">Submit →</button>
      </form>
    </div>
  );
};

export default Appointments;

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeAppointment } from '../../features/appointments/appointmentSlice';
import { selectDoctor, setDoctors } from '../../features/doctors/doctorSlice';
import './Appointment.css';

const Appointments = () => {
  const { doctors } = useSelector(selectDoctor);
  const dispatch = useDispatch();
  const country = ['Canada', 'Colombia', 'USA', 'Mexico'];
  const hospital = [
    'Mebid Hospital',
    'Centro Médico Nacional Siglo XXI',
    'Hospital Ángeles Loma',
    'Hospital General de México',
  ];

  const getLocalStorage = window.localStorage.getItem('appointment');
  const data = JSON.parse(getLocalStorage);
  const { user, email, doctor, specialty, reasonForConsultation, date } = data;

  useEffect(() => {
    dispatch(setDoctors());
  }, dispatch);

  const [appointment, setAppointment] = useState({
    user,
    email,
    doctor,
    specialty,
    reasonForConsultation,
    date,
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
    try {
      dispatch(makeAppointment(appointment));
      window.localStorage.removeItem('token');
      setAppointment('');
    } catch (err) {
      throw new Error(err);
    }
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
                id="user"
                name="user"
                className="form__input"
                defaultValue={user}
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
                defaultValue="default"
                className="form__input--select"
                onChange={handleInput}
              >
                <option value="default" hidden disabled>
                  Select your country
                </option>
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
                defaultValue="default"
                className="form__input--select"
                onChange={handleInput}
              >
                <option value="default" hidden disabled>
                  Select your country
                </option>
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
              <input
                type="checkbox"
                name="sex"
                className="form__labelSex"
                id="male"
                value="male"
                onChange={handleInput}
              />
              Male
            </label>
            <label htmlFor="female">
              <input
                type="checkbox"
                name="sex"
                className="form__labelSex"
                id="female"
                value="female"
                onChange={handleInput}
              />
              Female
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
                className="form__input--select"
                defaultValue={specialty}
                onChange={handleInput}
              >
                {/* <option
                selected
                hidden
                defaultValue={specialty}
                key={specialty}
                >
                {specialty}
                </option> */}
                {doctors.map((specialtyOpt) => (
                  <option value={specialtyOpt.specialty} key={specialtyOpt._id}>
                    {specialtyOpt.specialty}
                  </option>
                ))}
              </select>
            </label>
            <label htmlFor="doctor" className="form__label">
              Preferred doctor
              <select
                name="doctor"
                id="doctor"
                className="form__input--select"
                onChange={handleInput}
              >
                <option selected hidden defaultValue={doctor} key={doctor}>
                  {doctor}
                </option>
                {doctors.map((doctorOpt) => (
                  <option value={doctorOpt.name} key={doctorOpt._id}>
                    {doctorOpt.name}
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
                className="form__input--select"
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
          <label htmlFor="message" className="form__label--message">
            Reason of consultation
            <textarea
              defaultValue={reasonForConsultation}
              name="reasonForConsultation"
              cols="180"
              rows="5"
              className="form__textMessage"
            />
          </label>
        </fieldset>
        <button type="submit" className="form__button">
          Submit →
        </button>
      </form>
    </div>
  );
};

export default Appointments;

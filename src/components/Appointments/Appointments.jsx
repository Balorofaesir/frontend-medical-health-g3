import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeAppointment } from '../../features/appointments/appointmentSlice';
import { selectDoctor, setDoctors } from '../../features/doctors/doctorSlice';
// import Modal from '../Modal/Modal';
import './Appointment.css';

const Appointments = () => {
  const doctors = useSelector(selectDoctor);
  const dispatch = useDispatch();

  const getLocalStorage = localStorage.getItem('appointment');
  const data = JSON.parse(getLocalStorage);
  const { doctor, specialty, reasonForConsultation, dateAppointment } = data;

  useEffect(() => {
    dispatch(setDoctors());
  }, [dispatch]);

  const [appointment, setAppointment] = useState({
    user: '',
    email: '',
    doctor,
    specialty,
    reasonForConsultation,
    dateAppointment,
    phoneNumber: 0,
    nationality: '',
    residence: '',
    sex: '',
    hospital: '',
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
      const dataToSend = {
        doctorId: appointment.doctor,
        date: appointment.dateAppointment,
        place: 'virtual',
        speciality: appointment.specialty,
        reasonForConsultation: appointment.reasonForConsultation,
      };
      dispatch(makeAppointment(dataToSend));
      setAppointment('');
    } catch (err) {
      throw new Error(err);
    }
  };

  return (
    <div className="appointment__globalContainer">
      {/* <Modal text="Need to login" /> */}
      <p className="appointment__introParagraph">If you need to appointment</p>
      <form onSubmit={handleSubmit} className="appointment__formContainer">
        <fieldset className="form__fieldset">
          <legend className="form__title">Appointment Information</legend>
          <span className="formSpan__group">
            <label htmlFor="specialty" className="form__label">
              Speciality
              <select
                name="specialty"
                id="specialty"
                className="form__input--select"
                defaultValue={specialty}
                onChange={handleInput}
              >
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
                defaultValue={doctor}
                className="form__input--select"
                onChange={handleInput}
              >
                {doctors.map((doctorOpt) => (
                  <option value={doctorOpt._id} key={doctorOpt._id}>
                    {doctorOpt.name}
                  </option>
                ))}
              </select>
            </label>
          </span>
          <span className="formSpan__group">
            <label htmlFor="dateAppointment" className="form__label">
              Date of appointment
              <input
                type="datetime-local"
                name="dateAppointment"
                className="form__input"
                id="dateAppointment"
                defaultValue={dateAppointment}
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

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
      console.log(dataToSend);
      dispatch(makeAppointment(dataToSend));
      setAppointment('');
    } catch (err) {
      throw new Error(err);
    }
  };

  return (
    <div className="appointment__globalContainer">
      {/* <Modal text="Need to login" /> */}
      <form onSubmit={handleSubmit} className="appointment__formContainer">
        <fieldset className="form__fieldset">
      <p className="appointment__introParagraph">If you need to appointment</p>

          <h1 className="form__title">Appointment Information</h1>
          <span className="formSpan__group">
            <p> specialty </p>
            <label htmlFor="specialty" className="form__label">
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
          </span>
          <span className="formSpan__group">
            <p>prefered doctor</p>
            <label htmlFor="doctor" className="form__label">
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
            <p>date of appointment</p>
            <label htmlFor="dateAppointment" className="form__label">
              <input
                type="datetime-local"
                name="dateAppointment"
                className="form__input"
                id="dateAppointment"
                onChange={handleInput}
                defaultValue={dateAppointment}
              />
            </label>
          </span>
          <span className="formSpan__group">

              <p>reason for consultation</p>
              <label htmlFor="reasonForConsultation" className="form__label--message">
                <input
                  defaultValue={reasonForConsultation}
                  name="reasonForConsultation"
                  // cols="180"
                  rows="5"
                  className="form__textMessage"
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

/* eslint-disable react/jsx-no-undef */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FindADoctor.css';

const FindADoctor = () => {
  // eslint-disable-next-line no-unused-vars
  const navegat = useNavigate();
  const [Physio, setphysio] = useState('');
  const [doctors, setDoctors] = useState('');
  function handlePhysio(even) {
    const { value } = even.target;
    setphysio(value);
  }

  function handleDoctors(even) {
    const { value } = even.target;
    setDoctors(value);
  }
  function handleClick() {
    if (Physio === 'dato1' && doctors === 'dato1') {
      navegat('/DoctorProfile');
    }
  }
  return (
    <div className="cont3">
      <div className="cont3__section1">
        <h1>Find a doctor</h1>
        <button className="submit" type="submit">apoinment</button>
      </div>
      <div className="cont3__section2">
        <h1>Type here to find a doctor by name or specialty</h1>
      </div>
      <div className="cont3__section3">
        <div className="cont3__section3__1">
          <h2>Specialty</h2>
          <select
            className="type"
            id="type"
            onChange={handlePhysio}
          >
            <option value="dato">Especiality</option>
            <option value="dato1">Physioterapy</option>
            <option value="dato2">Orthopedic</option>
            <option value="dato3">Neurology</option>
          </select>
          <select
            className="type"
            id="type"
            onChange={handleDoctors}
          >
            <option value="dato0">Doctors</option>
            <option value="dato1">Dr. Juan</option>
            <option value="dato2">Dr. Andres</option>
            <option value="dato3">Dr. Miguel</option>
          </select>
          <h2>location</h2>
          <select
            className="type"
            id="type"
          >
            <option value="dato">Nacionality</option>
            <option value="dato1">colombian</option>
            <option value="dato2">japan</option>
            <option value="dato3">germani</option>
          </select>
        </div>
      </div>
      <div className="cont3__button">
        <button className="submit" type="submit" onClick={handleClick}>Search</button>
      </div>
    </div>
  );
};

export default FindADoctor;

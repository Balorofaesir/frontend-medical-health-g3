/* eslint-disable array-callback-return */
/* eslint-disable no-self-compare */
/* eslint-disable react/jsx-no-undef */
// import { element } from 'prop-types';
// import { element } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect , useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setDoctors, selectDoctor } from '../../features/doctors/doctorSlice';
import './FindADoctor.css';




const categority = [
  {
    name: 'Physioterapy',
    doctors: ['Dr. Perry Barkley', 'Dr. Crystal Fitzhugh'],
  },
  {
    name: 'Orthopedic',
    doctors: ['Dr. Helen Scheffler', 'Dr. Gail Perrish'],
  },
  {
    name: 'Neurology',
    doctors: ['Dr. Charles Gordon', 'Dr. Mattie Delgado'],
  },
  {
    name: 'Therapy',
    doctors: ['Dr. Verna Leto', 'Dr. Annie Murrow'],
  },
];
const FindADoctor = () => {

const { doctors } = useSelector(selectDoctor);
const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(doctors)

  useEffect(() => {
    dispatch(setDoctors());
  }, [dispatch]);
  const [idDoctors, setIdDoctors] = useState(-1);
  // const [doc, setDoc] = useState(categority);
  const [specialty, setSpecialty] = useState('');
  const [doctorName, setDoctorName] = useState('');
  // console.log('hola', doc);

  const handleDoctors = (option) => {
    console.log(option);
    setIdDoctors(option);
  };

  function handleClick() {
    if (specialty && doctorName) {
      navigate(`/DoctorProfile/${categority[specialty].doctors[doctorName]}`);
    }
    // const characters = doc.map((i) => {
    //   if (categority[0] === i.doctors[0]) {
    //     navigate('/DoctorProfile');
    //   }
    // });
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
            className="categority"
            id="selcategority"
            // onChange={handleDoctors}
            onChange={(e) => {
              handleDoctors(e.target.value);
              setSpecialty(e.target.value);
            }}
          >
            <option value={+1}>----Select one option----</option>
            {categority.map((element, i) => (
              <option key={element.name} value={i}> {element.name}</option>
            ))}
          </select>
          <select
            className="doctors"
            id="seldoctors"
            // onChange={handleDoctors}
            onChange={(e) => setDoctorName(e.target.value)}
          >
            <option value={+1}>----doctors----</option>
            {
              idDoctors > -1
              && (
                categority[idDoctors].doctors.map((element, i) => (
                  <option key={element} value={i}> {element}</option>
                ))
              )
            }

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

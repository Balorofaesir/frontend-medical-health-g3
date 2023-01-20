/* eslint-disable array-callback-return */
/* eslint-disable no-self-compare */
/* eslint-disable react/jsx-no-undef */
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';


import { setDoctors, selectDoctor } from '../../features/doctors/doctorSlice';
import './FindADoctor.css';

const FindADoctor = () => {
  const { doctors } = useSelector(selectDoctor);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(setDoctors());
  }, [dispatch]);
  // const handleDoctors = () => {
  //   console.log();
  //   setIdDoctors();
  // };

  function handleClick(data) {
     navigate(`/Doctor/${data}`);
  }
  function handleAppoiment() {
    navigate(`/appointment/`)
 }

  return (
    <section className="findDr_Main">
      {doctors.map((data) => (
        <section className="findDr_Main--container" key={data._id}>
          <p>{data.name} </p>
          <div>
            <img
              className="findDr_Main--container--img"
              src={data.image}
              alt=""
            />
          </div>
          <div>Specialty: {data.specialty}</div>
          <button
            type="button"
            onClick={() => {
              handleClick(data._id);
            }}
          >
            Professional details
          </button>
          <button onClick={handleAppoiment} type="button">schedule an appointment</button>
        </section>
      ))}
    </section>
  );
};

export default FindADoctor;

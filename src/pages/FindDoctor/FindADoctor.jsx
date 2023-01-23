import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { setDoctors, selectDoctor } from '../../features/doctors/doctorSlice';
import './FindADoctor.css';

const FindADoctor = () => {
  const  doctors  = useSelector(selectDoctor);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(setDoctors());
  }, [dispatch]);
  // const handleDoctors = () => {
  //   console.log();
  //   setIdDoctors();
  // };
console.log()
  function handleClick(data) {
    navigate(`/Doctor/${data}`);
  }
  function handleAppoiment() {
    navigate(`/appointment`);
  }
  console.log(doctors)

  return (
    <section className="findDr_Main">
      {doctors && doctors.map((data) => (
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
            className="findDr__button"
            type="button"
            onClick={() => {
              handleClick(data._id);
            }}
          >
            Professional details
          </button>
          <button
            className="findDr__button"
            onClick={handleAppoiment}
            type="button"
          >
            Schedule an appointment
          </button>
        </section>
      ))}
    </section>
  );
};

export default FindADoctor;

import './DoctorProfile.css';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getDoctor } from '../../features/doctors/doctorSlice';

const DoctorProfile = () => {
  const params = useParams();
  const  data  = useSelector((state) => state.doctor.doctor);

  // const  data  = useSelector(selectDoctor);
  console.log('params:', data);
  console.log('RESULT:', params._id);
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  useEffect(() => {
    dispatch(getDoctor(params._id));
  }, [dispatch]);

  if (!data) return (<h1 className="doctor1">is loading</h1>);

  return (
    <div>{ data?.name &&
    <div className="cont5">
      <div className="cont5__image">
        <img className="image" src={data.image} alt="doct" />
      </div>
      <h1 className="doctor1">{data.name}</h1>
      <div className="cont5__section1">
        <h1>Qualifications</h1>
        <div>
          {data.qualifications.map((data1) => (
            <p key={data1} className="p1">- {data1}</p>
          ))}
        </div>
      </div>
      <div className="cont5__section2">
        <h1>memberships</h1>
        <div>
          {data.memberships.map((data1) => (
            <p key={data1} className="p1">- {data1}</p>
          ))}
        </div>
      </div>
      <div className="cont5__section3">
        <h1>Introduction</h1>
        <div className='cont5__section3--p'><p>{data.introduction}</p></div>
        <ul>
          <li>Member of the royal college of surgeons of USA</li>
          <li>Member of the general dental council USA</li>
        </ul>
      </div>
      <div className="cont5__section4">
        <h1>Skills</h1>
        <div>
          {data.skills.map((data1) => (
            <p key={data1} className="p1">- {data1}</p>
          ))}
        </div>
      </div>
    </div>}
    </div>
  );
};

export default DoctorProfile;

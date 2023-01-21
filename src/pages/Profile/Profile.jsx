// import { useSelector, } from 'react-redux';
import { useEffect, useState } from 'react';

// import { selectAuth } from '../../features/auth/authSlice';
import getMyProfile from '../../services/user';
import { getAppointmentsByUser } from '../../features/appointments/appointmentAPI';
// import Calendar from '../../components/Calendar/Calendar';
import NamePages from '../../components/NamePages/NamePages';
import './profile.css'

const Profile = () => {
  // const { isAuth, profile } = useSelector(selectAuth);
  const [profile, setProfile] = useState(null);
  const [appoiment, setAppoiment] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getMyProfile();
      const responseAppoiments = await getAppointmentsByUser();
      setAppoiment(responseAppoiments);
      setProfile(response);
      // console.log('state', appoiment);
      // console.log('profile', profile);
    };
    fetchData();
  }, []);
  return (
    <main>
      <section className='profile'>
      <NamePages />
<section className='profile_container1'>
      <p className="Home__button">
        Patient name:
        {profile ? (
          <span>
            {' '}
            {profile.firstName} {profile.lastName}
          </span>
        ) : (
          <span>loading</span>
        )}
      </p>
      <p className="Home__button">
        email:
        {profile ? <span> {profile.email}</span> : <span>loading</span>}
      </p>
      <p className="Home__button">
        phone:
        {profile ? <span> {profile.phone}</span> : <span>loading</span>}
      </p>
      <p className="Home__button">
        gender:
        {profile ? <span> {profile.gender}</span> : <span>loading</span>}
      </p>
      <p className="Home__button">
        birthday:
        {profile ? <span> {profile.birthday}</span> : <span>loading</span>}
      </p>
      </section>
      <section className='profile_container'>
        <h1>Appoiments</h1>
        {appoiment ? (
          appoiment.map((data) => {
            const day = data.date.slice(0,-14)
            const hour = data.date.slice(11,-5)
            return(

            <section key={data._id}>
              <div className='profile_container--containers'>
                {' '}
                <p>appoiment date</p>
                <p> {day}</p>
              </div>
              <div className='profile_container--containers'>
                {' '}
                <p>appoiment hour</p>
                <p> {hour}</p>

              </div>
              <div className='profile_container--containers'>
                <p>Doctor Name</p>
                <p>{data.doctorId.name}</p>
              </div>
              <div className='profile_container--containers'>
              <p>Doctor specialty</p>
                <p>{data.doctorId.specialty}</p>
              </div>
            </section>
          )})
        ) : (
          <div> 0 appoiments</div>
        )}
      </section>
      <section>
        {/* <Calendar date={appoiment}/> */}
      </section>
      </section>
    </main>
  );
};

export default Profile;

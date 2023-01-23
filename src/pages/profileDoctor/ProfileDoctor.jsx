import { useEffect, useState } from 'react';
import getMyProfile from '../../services/user';
import { getAppointmentsByUser } from '../../features/appointments/appointmentAPI';
// import Calendar from '../../components/Calendar/Calendar';
import NamePages from '../../components/NamePages/NamePages';
import Loading from '../Loading/Loading';
import './ProfileDoctor.css';

const ProfileDoctor = () => {
  // const { isAuth, profile } = useSelector(selectAuth);
  const [profile, setProfile] = useState(null);
  const [appointment, setAppointment] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getMyProfile();
      console.log("🚀 ~ file: Profile.jsx:19 ~ fetchData ~ response", response)
      const responseAppointments = await getAppointmentsByUser();
      setAppointment(responseAppointments);
      setProfile(response);

    };
    fetchData();
  }, []);
  const doccc= () => {
    if (appointment === null) {
      return 'nada'
    }
     return appointment.map((doc) =>  doc.doctorId.name)
  }

  window.localStorage.setItem('doctor', doccc())

  return (
    <main>
      {profile === null ? <Loading /> : null}
      {appointment === null ? <Loading /> : null}
      <section className="profile">
        <NamePages />
        <section className="profile_container1">
          <p className="profile__elementName">
            Hello Dr!
            {profile ? (
              <span className="profile__elementName--element">
                {`${'Gail Parrish'}`}
              </span>
            ) : (
              <span>loading</span>
            )}
          </p>
          <p className="profile__elementName">
          specialist in:
            {profile ? (
              <span className="profile__elementName--element">
                {`${'General Surgeon'}`}
              </span>
            ) : (
              <span>loading</span>
            )}
          </p>
        </section>
        <section className="profile_container">
          <h1>Appointments</h1>
          {appointment ? (
            appointment.map((data) => {
              const day = data.date?.slice(0, -14);
              const hour = data.date?.slice(11, -5);
              return (
                <section key={data._id}>
                  <div className="profile_container--containers">
                    <p>appointment date:</p>
                    <p> {day}</p>
                  </div>
                  <div className="profile_container--containers">
                    <p>appointment hour:</p>
                    <p> {hour}</p>
                  </div>
                  <div className="profile_container--containers">
                    <p>patient:</p>
                    <p>{`${'Juan Salomon Monsalve'}`}</p>
                  </div>
                  <div className="profile_container--containers">
                    <p>sex</p>
                    <p>{`${'Male'}`}</p>
                  </div>
                </section>
              );
            })
          ) : (
            <div> 0 appoiments</div>
          )}
        </section>
        <section>{/* <Calendar date={appoiment}/> */}</section>
      </section>
    </main>
  );
};

export default ProfileDoctor;

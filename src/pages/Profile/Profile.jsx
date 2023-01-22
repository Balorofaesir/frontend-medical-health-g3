import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import getMyProfile from '../../services/user';
import { getAppointmentsByUser } from '../../features/appointments/appointmentAPI';
// import Calendar from '../../components/Calendar/Calendar';
import NamePages from '../../components/NamePages/NamePages';
import Loading from '../Loading/Loading';
import './Profile.css';

const Profile = () => {
  // const { isAuth, profile } = useSelector(selectAuth);
  const [profile, setProfile] = useState(null);
  const [appointment, setAppointment] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const response = await getMyProfile();
      const responseAppointments = await getAppointmentsByUser();
      setAppointment(responseAppointments);
      setProfile(response);
      console.log('profile', responseAppointments);
    };
    fetchData();
  }, []);
  const doccc= () => {
    if (appointment === null) {
      return 'nada'
    }
     return appointment.map((doc) =>  doc.doctorId.name)
  }
  console.log("🚀 ~ file: Profile.jsx:27 ~ Profile ~ doccc", doccc())
  window.localStorage.setItem('doctor', doccc())

  console.log('state', profile);
  return (
    <main>
      {profile === null ? <Loading /> : null}
      {appointment === null ? <Loading /> : null}
      <section className="profile">
        <NamePages />
        <section className="profile_container1">
          <p className="profile__elementName">
            Patient name:
            {profile ? (
              <span className="profile__elementName--element">
                {profile.firstName} {profile.lastName.toLowerCase()}
              </span>
            ) : (
              <span>loading</span>
            )}
          </p>
          <p className="profile__elementName">
            email:
            {profile ? (
              <span className="profile__elementName--element email">
                {profile.email}
              </span>
            ) : (
              <span>loading</span>
            )}
          </p>
          <p className="profile__elementName">
            phone:
            {profile ? (
              <span className="profile__elementName--element">
                {profile.phone}
              </span>
            ) : (
              <span>loading</span>
            )}
          </p>
          <p className="profile__elementName">
            gender:
            {profile ? (
              <span className="profile__elementName--element">
                {profile.gender}
              </span>
            ) : (
              <span>loading</span>
            )}
          </p>
          <p className="profile__elementName">
            birthday:
            {profile ? (
              <span className="profile__elementName--element">
                {profile.birthday}
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
              console.log(hour);
              return (
                <section key={data._id}>
                  <div className="profile_container--containers">
                    <p>appointment date</p>
                    <p> {day}</p>
                  </div>
                  <div className="profile_container--containers">
                    <p>appointment hour</p>
                    <p> {hour}</p>
                  </div>
                  <div className="profile_container--containers">
                    <p>Doctor Name</p>
                    <p>{data.doctorId?.name}</p>
                  </div>
                  <div className="profile_container--containers">
                    <p>Doctor specialty</p>
                    <p>{data.doctorId?.specialty}</p>
                  </div>
                  <div className="profile_container--containers">
                    <p>{`Price $ ${data.price}`}</p>
                    <button
                      type="button"
                      onClick={() => navigate(`/payment/${data._id}`)}
                    >
                      pay
                    </button>
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

export default Profile;

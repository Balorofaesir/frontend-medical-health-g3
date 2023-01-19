import { useSelector, } from 'react-redux';
import { useEffect } from 'react';

import { selectAuth } from '../../features/auth/authSlice';
import getMyProfile from '../../services/user';
import { getAppointmentsByUser } from '../../features/appointments/appointmentAPI';

const Profile = () => {
  const { isAuth, profile } = useSelector(selectAuth);

  useEffect(() => {
    const fetchData = async () => {
      const response= await getMyProfile()
      const responseAppoiments= await getAppointmentsByUser()
      console.log(response)
      console.log(responseAppoiments)

    }
    fetchData()
  }, []);
  return (
    <main className='navegationBarList'>
      <p  className="Home__button">
        Patient name:
        {isAuth ? (
          <span>
            {" "}{profile.firstName}{" "}{profile.lastName}
          </span>
        ) : (
          <span>loading</span>
        )}
      </p>
      <p className="Home__button">
        email:
        {isAuth ? (
          <span>
            {" "}{profile.email}
          </span>
        ) : (
          <span>loading</span>
        )}
      </p>
    </main>
  );
};

export default Profile;

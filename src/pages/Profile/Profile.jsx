import { useSelector } from 'react-redux';

import { selectAuth } from '../../features/auth/authSlice';

const Profile = () => {
  const { isAuth, profile } = useSelector(selectAuth);
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

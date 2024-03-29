/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable react/prop-types */
import { Navigate, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Modal from '../../pages/Modal/Modal';
import { selectAuth } from './authSlice';

const RequireAuth = ({ children, roles }) => {
  const navigate = useNavigate();
  const { isAuth, profile } = useSelector(selectAuth);
  if (!isAuth) {
    return (
      <Modal
        text="Must login first"
        button={() => navigate('/login')}
        textButton="Login"
      />
    );
  }

  if (roles && !roles.includes(profile.role)) {
    return <Navigate to="/unauthorized" />;
  }
  return children;
  // return (console.log("children:", children, "roles:", roles ))
};

export default RequireAuth;

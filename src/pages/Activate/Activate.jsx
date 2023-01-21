import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { verifyUser } from '../../features/signup/signupSlice';
import './Activate.css';

const Activate = () => {
  const { token } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchValidateUser = async () => {
    try {
      const data = await dispatch(verifyUser(token));
      window.localStorage.setItem('validateToken', token);
      console.log(data);
      navigate('/profile');
    } catch (err) {
      throw new Error(err);
    }
  };

  return (
    <div className="verifyAccount__container">
      <h1 className="verifyAccount__title">
        Welcome to <span className="verifyAccount__mebid">MEBID</span>
      </h1>
      <button
        onClick={() => fetchValidateUser()}
        type="button"
        className="verifyAccount__button"
      >
        Activate Account
      </button>
    </div>
  );
};

export default Activate;

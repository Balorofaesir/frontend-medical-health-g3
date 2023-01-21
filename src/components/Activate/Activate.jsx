import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { activateUser, selectStatus } from '../../features/login/loginSlice';
import Loading from '../Loading/Loading';
import Modal from '../Modal/Modal';

const Activate = () => {
  const { token } = useParams();
  const dispatch = useDispatch();
  const status = useSelector(selectStatus);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  useEffect(() => {
    dispatch(activateUser(token));
  }, [dispatch]);

  useEffect(() => {
    if (status === 'loading') {
      setLoading(true);
    } else if (status === 'succeeded') {
      setLoading(false);
      navigate('/');
    } else if (status === 'failed') {
      setLoading(false);
      setErrorMessage(true);
      setTimeout(() => {
        setErrorMessage(false);
      }, 2000);
    }
  }, [status]);

  return (
    <div>
      {loading === true ? <Loading /> : null}
      {errorMessage === true ? <Modal text="Invalid Token" /> : null}
      <h1>Activate {token}</h1>
      <p>Some content</p>
    </div>
  );
};

export default Activate;

import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Logins.css';
import NamesPages from '../../components/NamePages/NamePages';
import {
  createLogin,
  selectStatus,
  selectToken,
} from '../../features/login/loginSlice';
import Modal from '../../components/Modal/Modal';
import Loading from '../../components/Loading/Loading';

const Login = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  window.localStorage.setItem('token', token);
  const status = useSelector(selectStatus);
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const [checked, setChecked] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [loading, setLoading] = useState(false);

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

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheck = () => {
    setChecked(!checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      dispatch(createLogin(user));
      setUser({
        email: '',
        password: '',
      });
      /* navigate('/profile'); */
    } catch (err) {
      setErrorMessage(true);
      setTimeout(() => {
        setErrorMessage(false);
      }, 2000);
      throw new Error(err);
    }
  };

  return (
    <div>
      {loading === true ? <Loading /> : null}
      {errorMessage === true ? <Modal text="Wrong Credentials" /> : null}
      <NamesPages />
      <div className="loginForm__globalContainer">
        <form className="loginForm__container" onSubmit={handleSubmit}>
          <h1 className="loginForm__title">Login</h1>
          <label htmlFor="user" className="loginForm__label">
            Username or email
            <input
              type="text"
              name="email"
              value={user.email}
              className="loginForm__input"
              placeholder="Username or email"
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="password" className="loginForm__label">
            Password
            <input
              type="password"
              name="password"
              value={user.password}
              className="loginForm__input"
              placeholder="Password"
              onChange={handleChange}
              required
            />
          </label>
          <div className="options__container">
            <span className="loginForm__span">
              <label htmlFor="remember" className="loginForm__labelOpt">
                <input
                  type="checkbox"
                  name="remember"
                  id="remember"
                  className="loginForm__inputOpt"
                  value={user.remember}
                  checked={checked}
                  onChange={handleCheck}
                />
                Remember me
              </label>
            </span>
            <span className="loginForm__span">
              <Link to="/" className="loginForm__link">
                Forgot password?
              </Link>
            </span>
          </div>
          <button type="submit" className="loginForm__btn">
            Login →
          </button>
          <Link to="/sign-up" className="loginForm__link--signup">
            Don&apos;t have an account? Register now
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;

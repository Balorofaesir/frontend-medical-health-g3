/* eslint-disable react/jsx-curly-brace-presence */
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Logins.css';
import NamesPages from '../../components/NamePages/NamePages';
// import {
//   createLogin,
//   selectStatus,
//   selectToken,
// } from '../../features/login/loginSlice';
import Modal from '../Modal/Modal';
// import Loading from '../../components/Loading/Loading';
import { loginActionAsync } from '../../features/auth/authSlice';

const Login = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  // const [checked, setChecked] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  // const handleCheck = () => {
  //   setChecked(!checked);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = e.target;

    try {
      const action = loginActionAsync({
        email: email.value,
        password: password.value,
      });
      const { payload } = await dispatch(action);
      const { token } = payload;
      window.localStorage.setItem('token', token);

      localStorage.setItem('auth', JSON.stringify(payload));
      navigate('/');
    } catch (err) {
      setErrorMessage(true);
      setTimeout(() => {
        setErrorMessage(false);
      }, 1000);
      throw new Error(err);
    }
  };

  return (
    <div>
      {errorMessage === true ? <Modal text="Wrong Credentials" /> : null}
      <NamesPages />
      <div className="loginForm__globalContainer">
        <form onSubmit={handleSubmit} className="loginForm__container">
          <h1 className="loginForm__title">Login</h1>
          <label htmlFor="user" className="loginForm__label">
            login
            <input
              className="loginForm__input"
              type="email"
              name="email"
              placeholder="email"
              required
            />
          </label>
          <label htmlFor="password" className="loginForm__label">
            Password
            <input
              className="loginForm__input"
              type="password"
              name="password"
              placeholder="password"
              required
            />
          </label>
          <div className="options__container">
            {/* <span className="loginForm__span">
              <label htmlFor="remember" className="loginForm__labelOpt">
                <input
                  type="checkbox"
                  name="remember"
                  id="remember"
                  className="loginForm__inputOpt"
                  // value={user.remember}
                  checked={checked}
                  onChange={handleCheck}
                />
                Remember me
              </label>
            </span> */}
            <span className="loginForm__span">
              <Link to="/sign-up" className="loginForm__link">
              {"don't"} have an account yet? Sign Up!
              </Link>
            </span>
          </div>
          <button type="submit" className="loginForm__btn">
            Login →
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

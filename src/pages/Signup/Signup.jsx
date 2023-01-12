import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';
import NamesPages from '../../components/NamePages/NamePages';

const API_URL = process.env.REACT_APP_API_URL;

const Signup = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [checked, setChecked] = useState(false);

  const navigate = useNavigate();

  const handleChange = ({ target }) => {
    setUser({
      ...user,
      [target.name]: target.value,
    });
  };

  const handleCheck = () => {
    setChecked(!checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const sendData = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(user),
    };
    // esta función es asincronica
    fetch(`${API_URL}/users`, sendData);
    navigate('/profile');
  };

  return (
    <div>
      <NamesPages />
      <div className="signupForm__globalContainer">
        <form className="signupForm__container" onSubmit={handleSubmit}>
          <h1 className="signupForm__title">Register</h1>
          <label htmlFor="user" className="signupForm__label">
            Username
            <input
              type="text"
              name="username"
              className="signupForm__input"
              placeholder="Username"
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="email" className="signupForm__label">
            Email
            <input
              type="email"
              name="email"
              className="signupForm__input"
              placeholder="Enter your email"
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="password" className="signupForm__label">
            Password
            <input
              type="password"
              name="password"
              className="signupForm__input"
              placeholder="Enter your password"
              onChange={handleChange}
              required
            />
          </label>
          <div className="signupOptions__container">
            <span className="signupForm__span">
              <label htmlFor="conditions" className="signupForm__labelOpt">
                <input
                  type="checkbox"
                  name="conditions"
                  className="signupForm__inputOpt"
                  onClick={handleCheck}
                  required
                />
                I agree with the
                <Link to="/conditions" className="signupForm__link--conditions">
                  Terms & Conditions
                </Link>
              </label>
            </span>
          </div>
          <button type="submit" className="signupForm__btn">
            Register now →
          </button>
          <Link to="/login" className="signupForm__link--login">
            Already have an account? Login
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;

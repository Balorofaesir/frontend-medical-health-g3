import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Signup.css';
import NamesPages from '../../components/NamePages/NamePages';
import Terms from '../../components/Terms-Conditions/Terms';
import { openModal } from '../../features/modal/loginmodalSlice';

const Signup = () => {
  const { isOpen } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [checked, setChecked] = useState(false);

  /* const navigate = useNavigate(); */

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
  };

  return (
    <div>
      {isOpen && <Terms />}
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
                <button
                  onClick={() => dispatch(openModal())}
                  type="button"
                  className="signupForm__terms--conditions"
                >
                  Terms & Conditions
                </button>
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

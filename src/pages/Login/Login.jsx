import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Logins.css';
import NamesPages from '../../components/NamePages/NamePages';

const Login = () => {
  const [user, setUSer] = useState({
    user: '',
    password: '',
  });

  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    setUSer({
      ...user,
      [e.target.name]: e.target.value,
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
      <NamesPages />
      <div className="loginForm__globalContainer">
        <form className="loginForm__container" onSubmit={handleSubmit}>
          <h1 className="loginForm__title">Login</h1>
          <label htmlFor="user" className="loginForm__label">
            Username or email
            <input
              type="text"
              name="user"
              value={user.user}
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
          <Link to="/signup" className="loginForm__link--signup">
            Don&apos;t have an account? Register now
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Logins.css";

const Login = () => {
  const [user, setUSer] = useState({
    user: "",
    password: "",
  });

  const [checked, setChecked] = useState(false);
  const [getUsers, setGetUsers] = useState({});

  const handleChange = (e) => {
    setUSer({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheck = () => {
    setChecked(!checked);
  };

  useEffect(() => {
    fetch("http://localhost:8080/api/users").then((response) =>
      response.json().then((data) => setGetUsers(data))
    );
  }, []);

  const validate = () => {
    getUsers.forEach((element) => element);
  };

  console.log(validate());
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      <form className="form__container" onSubmit={handleSubmit}>
        <h1 className="form__title">Login</h1>
        <label htmlFor="user" className="form__label">
          Username or email
          <input
            type="text"
            name="user"
            value={user.user}
            className="form__input"
            placeholder="Username or email"
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="password" className="form__label">
          Password
          <input
            type="password"
            name="password"
            value={user.password}
            className="form__input"
            placeholder="Password"
            onChange={handleChange}
            required
          />
        </label>
        <div className="options__container">
          <span className="form__span">
            <label htmlFor="remember" className="form__labelOpt">
              <input
                type="checkbox"
                name="remember"
                id="remember"
                className="form__inputOpt"
                value={user.remember}
                checked={checked}
                onChange={handleCheck}
              />
              Remember me
            </label>
          </span>
          <span className="form__span">
            <Link to="/" className="form__link">
              Forgot password?
            </Link>
          </span>
        </div>
        <button type="submit" className="form__btn">
          Login →
        </button>
        <Link to="/" className="form__link--signup">
          Don&apos;t have an account? Register now
        </Link>
      </form>
    </div>
  );
};

export default Login;

import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [user, setUSer] = useState({
    user: "",
    password: "",
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
          />
        </label>
        <span className="form__span">
          <label htmlFor="remember" className="form__labelOpt">
            Remember me
            <input
              type="checkbox"
              name="remember"
              id="remember"
              className="form__inputOpt"
              value={user.remember}
              checked={checked}
              onClick={handleCheck}
            />
          </label>
        </span>
        <span className="form__span">
          <Link to="/" className="form__link">
            Forgot password?
          </Link>
        </span>
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

import { Link } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  return (
    <div className="container">
      <form className="signupForm__container">
        <h1 className="signupForm__title">Register</h1>
        <label htmlFor="user" className="signupForm__label">
          Username
          <input
            type="text"
            name="user"
            className="signupForm__input"
            placeholder="Username"
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
  );
};

export default Signup;

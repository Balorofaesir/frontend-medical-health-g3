import Type from 'prop-types';
import urgent from './assets/urgentcare.png';
import primary from './assets/primarycare.png';
import './Button.css';

const Button = ({ handleClick }) => (
  <div className="container">
    <a
      href="../BookAppointment/BookAppointment.jsx"
      className="btn__container"
      value="urgent"
      onClick={handleClick}
    >
      <img src={urgent} alt="button to use service" className="btn__img" />
    </a>
    <p className="btn__paragraph">Urgent care</p>
    <a
      href="../BookAppointment/BookAppointment.jsx"
      className="btn__container"
      value="urgent"
      onClick={handleClick}
    >
      <img src={primary} alt="button to use service" className="btn__img" />
    </a>
    <p className="btn__paragraph">Primary care</p>
  </div>
);

Button.propTypes = {
  handleClick: Type.func.isRequired,
};

export default Button;

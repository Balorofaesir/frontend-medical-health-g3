import { Link } from 'react-router-dom';
import urgent from './assets/urgentcare.png';
import primary from './assets/primarycare.png';
import './Button.css';

const Button = () => (
  <div className="container">
    <div className="btn__container">
      <Link to="/emergency" className="btn__container">
        <img src={urgent} alt="boton to get urgent care" className="btn__img" />
      </Link>
      <p className="btn__paragraph">Urgent care</p>
    </div>
    <div className="btn__container">
      <Link to="/primary" className="btn__container">
        <img
          src={primary}
          alt="boton to get urgent care"
          className="btn__img"
        />
      </Link>
      <p className="btn__paragraph">Primary care</p>
    </div>
  </div>
);

export default Button;

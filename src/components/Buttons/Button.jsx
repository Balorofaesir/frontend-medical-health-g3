import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import urgent from './assets/urgentcare.png';
import primary from './assets/primarycare.png';
import './Button.css';

const Button = () => (
  <div className="container1">
    <div className="container1__sect1">
      <p className="title1">Welcome to mebid</p>
      <p className="title2">We are by your side in any services </p>
      <p className="paragraf">
        We provide all kinds of medical services to our patients accordings to
        their daily needs starting from special conditions
      </p>
    </div>
    <div className="container1__sect2">
      <div className="container1__sect2__1">
        <HashLink to="#urgency" className="btn__container" value="urgent">
          <img src={urgent} alt="button to use service" className="btn__img" />
        </HashLink>
        <p className="btn__paragraph">Urgent care</p>
      </div>
      <div className="container1__sect2__1">
        <Link to="/primary" className="btn__container" value="primary">
          <img src={primary} alt="button to use service" className="btn__img" />
        </Link>
        <p className="btn__paragraph">Primary care</p>
      </div>
    </div>
  </div>
);

export default Button;

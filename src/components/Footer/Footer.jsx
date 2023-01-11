import './Footer.css';

import { BsTelephone } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';
import Mebid from './assets/mebid.png';

const Footer = () => (
  <div className="cont_main">
    <div className="cont01">
      <img src={Mebid} alt="mebid" />
      <p>Need more information please contact us or book an appointment</p>
      <button className="butt" type="button">
        Contact us &rarr;{' '}
      </button>
    </div>
    <div className="cont2">
      <div className="cont2__section1" id="about">
        <h1>About</h1>
        <p>
          Vestibulum ac diam sit amet quam vehicula elementum sed sit amet.
          Nulla porttitor accumsan.
        </p>
        <div className="cont2__icon1">
          <p className="cont2__icon1__icon">
            <BsTelephone />
          </p>
          <p>(04) 85544 3322</p>
        </div>
        <div className="cont2__icon1">
          <p className="cont2__icon1__icon">
            <AiOutlineMail />
          </p>
          <p> mebid@gmail.com</p>
        </div>
        <div className="cont2__icon1">
          <p className="cont2__icon1__icon">
            <GoLocation />
          </p>
          <p> 24 Newport road, carlton IP79</p>
        </div>
      </div>
      <div className="cont2__section2">
        <h1>Our departments</h1>
        <ul className="cont2__list">
          <li className="l1__1">
            <span>Orthopedic</span>
          </li>
          <li className="l1__1">
            <span>Dental service</span>
          </li>
          <li className="l1__1">
            <span>Neurology</span>
          </li>
          <li className="l1__1">
            <span>Emergency departament</span>
          </li>
          <li className="l1__1">
            <span>Diagnosis department</span>
          </li>
          <li className="l1__1">
            <span>Therapy department</span>
          </li>
        </ul>
      </div>
      <div className="cont2__section3">
        <h1>useful link</h1>
        <ul className="cont2__list">
          <li>
            <span>About</span>
          </li>
          <li>
            {' '}
            <span>Find a doctor</span>{' '}
          </li>
          <li>
            <span>patients and visitors</span>
          </li>
          <li>
            <span>International services</span>
          </li>
          <li>
            <span>Terms and conditions</span>
          </li>
          <li>
            <span>Privacy policy</span>
          </li>
        </ul>
      </div>
      <div className="cont2__section4">
        <h1>Newsletter</h1>
        <p>Sign up now for weekly news and updates</p>
        <p>
          Email address<span className="span"> &rarr;</span>
        </p>
        <hr />
        <div className="cont2__reds">
          <div className="cont2__reds__icon">
            <FaFacebookF />
          </div>
          <div className="cont2__reds__icon">
            <FaTwitter />
          </div>
          <div className="cont2__reds__icon">
            <FaInstagram />
          </div>
          <div className="cont2__reds__icon">
            <FaLinkedinIn />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;

import './Footer.css';

import IconPhone from './assets/icon1.png';
import IconMsm from './assets/icon2.png';
import IconUbi from './assets/icon3.png';
import Face from './assets/facebook.png';
import Twiter from './assets/twiter.png';
import Instagram from './assets/instagram.png';
import In from './assets/in.png';

const Footer = () => (
  <div className="cont2">
    <div className="cont2__section1">
      <h1>About</h1>
      <p>Vestibulum ac diam sit amet quam vehicula elementum
        sed sit amet. Nulla porttitor accumsan.
      </p>
      <div className="cont2__icon1">
        <img src={IconPhone} alt="phone" />
        <p1> (04) 85544 3322</p1>
      </div>
      <div className="cont2__icon1">
        <img src={IconMsm} alt="message" />
        <p1> mebid@gmail.com</p1>
      </div>
      <div className="cont2__icon1">
        <img src={IconUbi} alt="ubi" />
        <p1> 24 Newport road, carlton IP79</p1>
      </div>
    </div>
    <div className="cont2__section2">
      <h1>Our departments</h1>
      <ul className="cont2__list">
        <li><span>Orthopedic</span></li>
        <li><span>Orthopedic</span> </li>
        <li><span>Dental service</span></li>
        <li><span>Neurology</span></li>
        <li><span>Emergency departament</span></li>
        <li><span>Diagnosis department</span></li>
        <li><span>Therapy department</span></li>
      </ul>
    </div>
    <div className="cont2__section3">
      <h1>useful link</h1>
      <ul className="cont2__list">
        <li><span>About</span></li>
        <li> <span>Find a doctor</span> </li>
        <li><span>patients and visitors</span></li>
        <li><span>International services</span></li>
        <li><span>Terms and conditions</span></li>
        <li><span>Privacy policy</span></li>
      </ul>
    </div>
    <div className="cont2__section4">
      <h1>Newsletter</h1>
      <p>Sign up now for weekly news and updates</p>
      <p>Email address<span className="span"> &rarr;</span></p>
      <hr />
      <div className="cont2_reds">
        <img src={Face} alt="face" />
        <img src={Twiter} alt="twit" />
        <img src={Instagram} alt="instagram" />
        <img src={In} alt="in" />
      </div>

    </div>
  </div>
);

export default Footer;

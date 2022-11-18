import Types from 'prop-types';
import './Header.css';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsTelephonePlus, BsTelephone } from 'react-icons/bs';
import { BiWorld } from 'react-icons/bi';
import { GiPlagueDoctorProfile } from 'react-icons/gi';
import mebid from './assets/mebid-icon.jpeg';
import lines from './assets/three-horizontal-lines-icon.png';

const Header = ({ toggle, open }) => (
  <section>
    <section className="headerBlackContainer">
      <div className="miniHeaderBlackContainer">
        <p>
          <BsTelephonePlus /> emergency 24 hours
        </p>
        <p>
          <GiPlagueDoctorProfile /> patients & visitors
        </p>
        <p>
          <AiOutlineSearch /> find a doctor
        </p>
      </div>
      <div className="miniHeaderBlackContainer">
        <p>
          <BsTelephone /> (04) 8544 3222
        </p>
        <p>
          <BiWorld /> english
        </p>
      </div>
    </section>
    <section className="headerSmallerContainer">
      <div className="miniContainer">
        <img src={mebid} alt=" " />
        <p>MEBID</p>
      </div>
      <section className="miniContainer2">
        <p>Home</p>
        <p> About</p>
        <p>Pages</p>
        <p>Department</p>
        <p>Shop</p>
        <p>Blog</p>
      </section>
      <section className="miniContainer4">
        <img src="" alt="" />
        <img src="" alt="" />
        <button type="button">Appointment</button>
      </section>
      <div className="miniContainer3">
        <p className="miniContainer3__dots">...</p>
        <button className="miniContainer3__imgButton" type="button" onClick={toggle}>
          <div className="miniContainer3__img1">
            <img src={lines} alt="Lines Icon" className="miniContainer3__img1__image" />
          </div>
        </button>
      </div>
    </section>

    <div className="navegationBar">
      {open && (
        <section>
          <ul>
            <li>Home</li>
            <li> About</li>
            <li>Pages</li>
            <li>Department</li>
            <li>Shop</li>
            <li>Blog</li>
          </ul>
          <div>
            <img src="" alt="" />
            <img src="" alt="" />
            <button type="button">Appointment</button>
          </div>
        </section>
      )}
    </div>
  </section>
);

Header.propTypes = {
  toggle: Types.func.isRequired,
  open: Types.bool.isRequired,
};

export default Header;

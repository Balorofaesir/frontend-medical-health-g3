import Types from 'prop-types';
import './header.css';
import { useNavigate } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsTelephonePlus, BsTelephone } from 'react-icons/bs';
import { BiWorld } from 'react-icons/bi';
import { GiPlagueDoctorProfile } from 'react-icons/gi';
import mebid from './assets/mebid-icon.jpeg';
import lines from './assets/three-horizontal-lines-icon.png';

const Header = ({ toggle, open }) => {
  const navegat = useNavigate();

  function ClickLogin() {
    navegat('/Login');
  }
  function ClickHome() {
    navegat('/');
  }
  function ClickFindDr() {
    navegat('/FindDr');
  }
  function ClickCart() {
    navegat('/cart');
  }

  return (
    <section>
      <section className="headerBlackContainer">
        <div className="miniHeaderBlackContainer">
          <p>
            <BsTelephonePlus /> emergency 24 hours
          </p>
          <p>
            <GiPlagueDoctorProfile /> patients & visitors
          </p>
          <button className="Home__button__white" type="button" onClick={ClickFindDr}>
            <AiOutlineSearch /> find a doctor
          </button>
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
          <button className="Home__button" type="button" onClick={ClickHome}>Home</button>
          <p> About</p>
          <p>Pages</p>
          <button className="Home__button" type="button" onClick={ClickLogin}>Login</button>
          <button className="Home__button" type="button" onClick={ClickCart}>Shop</button>
          <p>Blog</p>
        </section>
        <section className="miniContainer4">
          <img src="" alt="" />
          <img src="" alt="" />
          <button type="button">Appointment</button>
        </section>
        <div className="miniContainer3">
          <p className="miniContainer3__dots">...</p>
          <button
            className="miniContainer3__imgButton"
            type="button"
            onClick={toggle}
          >
            <div className="miniContainer3__img1">
              <img
                src={lines}
                alt="Lines Icon"
                className="miniContainer3__img1__image"
              />
            </div>
          </button>
        </div>
      </section>

      <div className="navegationBar">
        {open && (
          <section className="">
            <ul>
              <button className="Home__button" type="button" onClick={ClickHome}>Home</button>
              <p> About</p>
              <p>Pages</p>
              <button className="Home__button" type="button" onClick={ClickLogin}>Login</button>
              <button className="Home__button" type="button" onClick={ClickCart}>Shop</button>
              <p>Blog</p>
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
};

Header.propTypes = {
  toggle: Types.func.isRequired,
  open: Types.bool.isRequired,
};

export default Header;

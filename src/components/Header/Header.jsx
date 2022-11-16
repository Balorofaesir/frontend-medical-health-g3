import Types from 'prop-types';
import './style1.css';
import mebid from './assets/mebid-icon.jpeg';
import lines from './assets/three-horizontal-lines-icon.png';

const Header = ({ toggle, open }) => (
  <section>
    <div className="headerSmallerContainer">
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
        <p className="dots">...</p>
        <button className="imgButton" type="button" onClick={toggle}>
          <div className="img1">
            <img
              src={lines}
              alt="Lines Icon"
            />
          </div>
        </button>
      </div>
    </div>

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

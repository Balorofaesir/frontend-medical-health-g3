/* eslint-disable react/prop-types */
/* eslint-disable global-require */
import '../styles/style1.css';

const Comp1 = (props) => {
  const { toggle, open } = props;

  return (
    <section>
      <div className="headerSmallerContainer">
        <div className="miniContainer">
          <img src={require('../Assets/mebid-icon.jpeg')} alt=" " />
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
          {' '}
          <img src="" alt="" />
          <img src="" alt="" />
          <button type="button">Appointment</button>
        </section>
        <div className="miniContainer3">
          <p className="dots">...</p>
          <button className="imgButton" type="button" onClick={toggle}>
            <div className="img1"><img
              src={require('../Assets/three-horizontal-lines-icon.png')}
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
};

export default Comp1;

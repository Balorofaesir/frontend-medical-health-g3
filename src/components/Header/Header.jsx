import Types from 'prop-types';
import './header.css';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux"
// import { useEffect, useState } from "react"
import { AiOutlineSearch } from 'react-icons/ai';
import { BsTelephonePlus, BsTelephone } from 'react-icons/bs';
import { ImProfile } from 'react-icons/im';
import { GiPlagueDoctorProfile } from 'react-icons/gi';
import mebid from './assets/mebid-icon.jpeg';
import lines from './assets/three-horizontal-lines-icon.png';
import { selectAuth, logout } from "../../features/auth/authSlice"
// import getMyProfile from '../../services/user'


const Header = ({ toggle, open }) => {

    // const [profile, setProfile] = useState(null)
    const navegat = useNavigate();
    const dispatch = useDispatch()
    const  { isAuth, profile }  = useSelector(selectAuth)

    // useEffect(() => {
    //   const fetchProfile = async () => {
    //     const data = await getMyProfile()
    //     setProfile(data)
    //   }
    //   fetchProfile()
    // }, [])

  const handleLogout = () => {
    localStorage.removeItem('auth')
    localStorage.removeItem('token')
    dispatch(logout())
    navegat('/')
  }
  const ClickHome = () => {
    navegat('/');
  }
  const ClickFindDr = () => {
    navegat('/FindDr');
  }
  const ClickCart = () => {
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
          <button
            className="Home__button__white"
            type="button"
            onClick={ClickFindDr}
          >
            <AiOutlineSearch /> find a doctor
          </button>
        </div>
        <div className="miniHeaderBlackContainer">
          <p>
            <BsTelephone /> (04) 8544 3222
          </p>
          <p>
          <ImProfile /> User: {isAuth ? <span>{profile.firstName} </span>:<span> </span> }
          </p>
        </div>
      </section>
      <section className="headerSmallerContainer">
        <div className="miniContainer">
          <Link to="/" className="miniContainer__logoLink">
            <img src={mebid} alt="logo" />
            <p className="miniContainer__logoText">MEBID</p>
          </Link>
        </div>
        <section className="miniContainer2">
          <button className="Home__button" type="button" onClick={ClickHome}>
            Home
          </button>
          <p> About</p>
          <p>Pages</p>
          {/* <button className="Home__button" type="button" onClick={console.log("hola")}>
            Login
          </button> */}
               {
         !isAuth ? <li><Link className="Home__button" to="/login">Login</Link></li>
            : <li><button className="Home__button" type="button" onClick={handleLogout}>Logout</button></li>
        }
        {
          isAuth && <li><Link to="/">home</Link></li>
        }
          <button className="Home__button" type="button" onClick={ClickCart}>
            Shop
          </button>
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
          <section className="navegationBarList">
              <button
                className="Home__button"
                type="button"
                onClick={ClickHome}
              >
                Home
              </button>
              <p> About</p>
              <p>Pages</p>
              <Link className="Home__button" to="/login">Login</Link>
              <button
                className="Home__button"
                type="button"
                onClick={ClickCart}
              >
                Shop
              </button>
              <p>Blog</p>
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

// import { useSelector, } from 'react-redux';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import Loading from '../Loading/Loading';
// import { selectAuth } from '../../features/auth/authSlice';
import getMyProfile from '../../services/user';
import { getAppointmentsByUser } from '../../features/appointments/appointmentAPI';
// import Calendar from '../../components/Calendar/Calendar';
import NamePages from '../../components/NamePages/NamePages';
import './Profile.css';
import { modifyUser } from '../../features/users/usersAPI';

const Profile = () => {
  // const { isAuth, profile } = useSelector(selectAuth);
  const [profile, setProfile] = useState(null);
  const [appoiment, setAppoiment] = useState(null);



    const [open, setOpen] = useState(false);
    const toggle = () => {
      setOpen(!open);
    };
    const genderOpt = ['Male', 'Female', 'Other'];

 const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      const response = await getMyProfile();
      const responseAppoiments = await getAppointmentsByUser();
      setAppoiment(responseAppoiments);
      setProfile(response);
      console.log('state', appoiment);
      console.log('profile', profile);
    };
    fetchData();
  }, []);




  const handleModifyProfileInput = (event) => {
    event.preventDefault();
    const { firstName, lastName, phone, email, birthday, gender } = event.target;
    try {
      const dataToSend = {
        firstName: firstName.value.toUpperCase(),
        lastName: lastName.value.toUpperCase(),
        email: email.value.toLowerCase(),
        phone: phone.value,
        birthday: birthday.value,
        gender: gender.value,
      };
      console.log(dataToSend, "id:", profile._id);
      dispatch(modifyUser(profile._id,dataToSend));


    } catch (err) {
      throw new Error(err);
    }
  };
  return (
    <main className='mainProfile'>
      {profile === null ? <Loading /> : null}
      {appoiment === null ? <Loading /> : null}
      {!open && <section className="profile">
        <NamePages />
        <section className="profile_container1">
          <p className="Home__button">
            Patient name:
            {profile ? (
              <span>
                {' '}
                {profile.firstName} {profile.lastName}
              </span>
            ) : (
              <span>loading</span>
            )}
          </p>
          <p className="Home__button">
            email:
            {profile ? <span> {profile.email}</span> : <span>loading</span>}
          </p>
          <p className="Home__button">
            phone:
            {profile ? <span> {profile.phone}</span> : <span>loading</span>}
          </p>
          <p className="Home__button">
            gender:
            {profile ? <span> {profile.gender}</span> : <span>loading</span>}
          </p>
          <p className="Home__button">
            birthday:
            {profile ? <span> {profile.birthday}</span> : <span>loading</span>}
          </p>
          <button type='button' onClick={toggle} className="form__button" >edit profile</button>
        </section>
        <section className="profile_container">
          <h1>Appoiments</h1>
          {appoiment ? (
            appoiment.map((data) => {
              const day = data.date?.slice(0, -14);
              const hour = data.date?.slice(11, -5);
              return (
                <section key={data._id}>
                  <div className="profile_container--containers">
                    {' '}
                    <p>appoiment date</p>
                    <p> {day}</p>
                  </div>
                  <div className="profile_container--containers">
                    {' '}
                    <p>appoiment hour</p>
                    <p> {hour}</p>
                  </div>
                  <div className="profile_container--containers">
                    <p>Doctor Name</p>
                    <p>{data.doctorId?.name}</p>
                  </div>
                  <div className="profile_container--containers">
                    <p>Doctor specialty</p>
                    <p>{data.doctorId?.specialty}</p>
                  </div>
                </section>
              );
            })
          ) : (
            <div> 0 appoiments</div>
          )}
        </section>
        <section>{/* <Calendar date={appoiment}/> */}</section>

      </section>}
      {open && <form className="signupForm__container" onSubmit={handleModifyProfileInput}>
          {/* <h1 className="signupForm__title">Register</h1> */}
          <label htmlFor="firstName" className="signupForm__label">
            First Name
            <input
              type="text"
              name="firstName"
              className="signupForm__input"
              placeholder="First Name"
              required
              // onChange={handleInput}
              id="firstName"
            />
          </label>
          <label htmlFor="lastName" className="signupForm__label">
            Last Name
            <input
              type="text"
              name="lastName"
              className="signupForm__input"
              placeholder="Last Name"
              required
              // onChange={handleInput}
              id="lastName"
            />
          </label>
          <label htmlFor="email" className="signupForm__label">
            Email
            <input
              type="email"
              name="email"
              className="signupForm__input"
              placeholder="Enter your email"
              required
              // onChange={handleInput}
              id="email"
            />
          </label>
          <label htmlFor="phone" className="signupForm__label">
            phone
            <input
              type="number"
              name="phone"
              className="signupForm__input"
              placeholder="phone number"
              required
              // onChange={handleInput}
              id="phone"
            />
          </label>
          <label htmlFor="Birthday" className="signupForm__label">
            Birthday
            <input
              type="date"
              name="birthday"
              className="signupForm__input signupForm__input--date"
              placeholder="Birthday"
              required
              // onChange={handleInput}
              id="birthday"
            />
          </label>
          <label htmlFor="gender" className="signupForm__label">
            gender
            <select
              name="gender"
              className="signupForm__input signupForm__input--select"
              required
              // onChange={handleInput}
              id="gender"
              // onChange={handleInput}
            >
              {genderOpt.map((data) => (
                <option key={data} value={data}>
                  {data}
                </option>
              ))}
            </select>
          </label>
          <button type="submit" className="form__button" onClick={toggle}>
          edit profile
        </button>
        <button type="button" className="form__button" onClick={toggle}>
          cancel edit
        </button>
        </form>}
    </main>
  );
};
export default Profile;

import './App.css';
import { Routes, Route } from 'react-router-dom';
import {
  useState,
  // useEffect
} from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/Home';
import CartPage from './pages/Cart';
import ProductPage from './pages/products';
import NotFound from './pages/NotFound404';
import DoctorProfile from './pages/DoctorProfile/DoctorProfile';
import FindDr from './pages/FindDoctor/FindADoctor';
import Calendar from './pages/Calendar';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import Emergency from './components/Emergency/Emergency';
import Appointments from './components/Appointments/Appointments';
import Profile from './pages/Profile/Profile';
import Payment from './pages/Payment/Payment';
// import Payments from './pages/Payment';
// import { selectAuth,
// setAuthUser
// } from './features/auth/authSlice';
// import useLocalStorage from './hooks/useLocalStorage';
import RequireAuth from './features/auth/RequireAuth';

const App = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  // const dispatch = useDispatch();
  // const storedValue = window.localStorage.getItem('auth');
  // const { isAuth } = useSelector(selectAuth);

  // useEffect(() => {
  //   if (!isAuth ) {
  //     dispatch((storedValue));
  //   }
  // }, [storedValue, isAuth, dispatch]);

  return (
    <div className="App">
      <header>
        <Header toggle={toggle} open={open} />
      </header>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="urgency" element={<Emergency />} />
        </Route>
        <Route
          path="/cart"
          element={
            <RequireAuth roles={['USER']}>
              <CartPage />
            </RequireAuth>
          }
        />
        <Route path="/products" element={<ProductPage />} />
        <Route path="doctor/:_id" element={<DoctorProfile />} />
        <Route path="/findDr" element={<FindDr />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route
          path="appointment"
          element={
            <RequireAuth roles={['USER']}>
              <Appointments />{' '}
            </RequireAuth>
          }
        />
        <Route path="payment/:_id" element={<Payment />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="profile"
          element={
            <RequireAuth roles={['ADMIN', 'USER']}>
              <Profile />
            </RequireAuth>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
};
export default App;

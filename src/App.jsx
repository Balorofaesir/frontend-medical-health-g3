import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/Home';
import CartPage from './pages/Cart';
import NotFound from './pages/NotFound404';
import DoctorProfile from './pages/DoctorProfile/DoctorProfile';
import FindDr from './pages/FindDoctor/FindADoctor';
import Calendar from './pages/Calendar';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';

const App = () => {
  const [open, setOPen] = useState(false);
  const toggle = () => {
    setOPen(!open);
  };
  return (
    <div className="App">
      <header>
        <Header toggle={toggle} open={open} />
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/doctorProfile" element={<DoctorProfile />}>
          <Route path=":doctorName" />
        </Route>
        <Route path="/findDr" element={<FindDr />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
};
export default App;

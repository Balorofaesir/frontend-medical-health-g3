import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/Home';
import CartPage from './pages/Cart';
import NotFound from './pages/NotFound404';
import DoctorAndres from './pages/DoctorAndres/DoctorAndres';
import DoctorMiguel from './pages/DoctorMiguel/DoctorMiguel';
import DoctorJuan from './pages/DoctorJuan/DoctorJuan';
import FindDr from './pages/FindDoctor/FindADoctor';

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
        <Route path="DoctorAndres" element={<DoctorAndres />} />
        <Route path="DoctorMiguel" element={<DoctorMiguel />} />
        <Route path="DoctorJuan" element={<DoctorJuan />} />
        <Route path="FindDr" element={<FindDr />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

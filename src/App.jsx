import './App.css';
import { useState } from 'react';
import Header from './components/Header/Header';
import WebPageInfoComponent from './components/WebPageInfoComponent/WebPageInfoComponent';
import Emergency from './components/Emergency/Emergency';

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
      <Emergency />
      <section>
        <WebPageInfoComponent />
      </section>
    </div>
  );
};

export default App;

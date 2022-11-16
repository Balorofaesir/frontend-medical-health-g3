import './App.css';
import { useState } from 'react';
import Header from './components/Header/Header';
import WebPageInfoComponent from './components/WebPageInfoComponent/WebPageInfoComponent';

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
      <section>
        <WebPageInfoComponent />
      </section>
    </div>
  );
};

export default App;

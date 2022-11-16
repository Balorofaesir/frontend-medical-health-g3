import React from 'react';

import './App.css';
import Article from './components/Article/Article';
import Emergency from './components/Emergency/Emergency';
import Footer from './components/Footer/Footer';

const App = () => (
  <div className="App">
    <header className="App-header">
      <Article />
      <Emergency />
      <Footer />
    </header>
  </div>
);

export default App;

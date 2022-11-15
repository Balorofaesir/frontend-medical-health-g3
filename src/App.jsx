import './App.css';
import urgent from './assets/urgentcare.png';
import primary from './assets/primarycare.png';
import Button from './components/Buttons/Button';

const App = () => (
  <div className="App">
    <Button image={urgent} text="Urgent care" value="urgent care" />
    <Button image={primary} text="Primary care" value="primary care" />
  </div>
);

export default App;

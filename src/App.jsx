import { useNavigate } from 'react-router-dom';
import './App.css';

const App = () => {
  const navigate = useNavigate();

  return (
    <div className="App">
      <button type="submit" value="signup" onClick={() => navigate('/signup')}>
        Sign up
      </button>
      <button type="submit" value="login" onClick={() => navigate('/login')}>
        Login
      </button>
    </div>
  );
};

export default App;

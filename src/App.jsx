import "./App.css";
import { Routes, Route } from 'react-router-dom';
import Login from "./pages/Login/Login";


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
        <Route path="*" element={<NotFound />} />
        <Route path="Login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

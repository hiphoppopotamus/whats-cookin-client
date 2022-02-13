import './App.css';
import Navbar from './components/Navbar/Navbar';
import Landing from './pages/Landing/Landing.js';
import Register from './pages/Register/Register.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./pages/Login/Login";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
            <Routes>
              <Route exact path="/" element={<Landing/>} />
              <Route exact path="/register" element={<Register/>} />
              <Route exact path="/login" element={<Login/>} />
          </Routes>
        </div>
      </div>  
    </Router>
  );
}

export default App;

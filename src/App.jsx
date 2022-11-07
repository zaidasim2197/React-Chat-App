import logo from './logo.svg';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from './components/Home'
import Login from './components/login'
import Signup from './components/signup'
import Notfound from './components/notfound'

function App() {
  return (
    <div >
  <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/login">Login</Link></li>
      <li><Link to="/signup">Signup</Link></li>
    </ul>
  </nav>
  <Routes>
  <Route
          path="/"
          element={<Home />}
          errorElement={<Notfound />}
        />
        <Route
          path="/login"
          element={<Login />}
          errorElement={<Notfound />}
        />
        <Route
          path="/signup"
          element={<Signup />}
          errorElement={<Notfound />}
        />
  </Routes>
      </div>
  );
}
export default App;

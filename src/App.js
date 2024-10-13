import './App.css';
import Home from "./pages/Home";
import Event from "./pages/Event";
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Clubs from './pages/Clubs';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/Event" element={<Event />} />
        <Route path="/Clubs" element={<Clubs/>} />
        
      </Routes>
    </Router>
  );
}

export default App;

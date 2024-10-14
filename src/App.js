import './App.css';
import Home from "./pages/Home";
import Event from "./pages/Event";
import Navbar from './components/Navbar';
import Clubs from './pages/Clubs';
import FAQ from './pages/FAQ';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/Event" element={<Event />} />
        <Route path="/Clubs" element={<Clubs/>} />
        <Route path="/FAQ" element={<FAQ/>} />
        
      </Routes>
    </Router>
  );
}

export default App;

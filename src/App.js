import './App.css';
import Home from "./pages/Home";
import SAC from "./pages/SAC";
import Event from "./pages/Event";
import Navbar from './components/Navbar';
import Clubs from './pages/Clubs';
import FAQ from './pages/FAQ';
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { motion } from 'framer-motion';

function App() {
  const location = useLocation(); // Get the current location for animations

  return (
    <>
      <Navbar />
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              initial={{ opacity: 0, y: 20 }} // Fade and slide up
              animate={{ opacity: 1, y: 0 }}   // Fade in and slide to position
              exit={{ opacity: 0, y: -20 }}     // Fade and slide down
              transition={{ duration: 0.5 }}
            >
              <Home />
            </motion.div>
          }
        />
        <Route
          path="/SAC"
          element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <SAC />
            </motion.div>
          }
        />
        <Route
          path="/Event"
          element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Event />
            </motion.div>
          }
        />
        <Route
          path="/Clubs"
          element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Clubs />
            </motion.div>
          }
        />
        <Route
          path="/FAQ"
          element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <FAQ />
            </motion.div>
          }
        />
      </Routes>
    </>
  );
}

// Wrap your App component in Router
const AppWrapper = () => {
  return (
    <Router basename="/Milliken-SAC">
      <App />
    </Router>
  );
}

export default AppWrapper;

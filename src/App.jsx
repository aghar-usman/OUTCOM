import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/navbar.jsx';
import Career from './Components/Career/Career.jsx';
import Home from './Components/Home/Home.jsx';
import Footer from './Components/Footer/Footer.jsx';

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Appears at the top on all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/career" element={<Career />} />

      </Routes>
      <Footer /> {/* Appears at the bottom on all pages */}
    </Router>
  );
};

export default App;

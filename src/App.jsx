import './App.css';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Line from './components/Line/Line';
import Footer from './components/Footer/Footer';

import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import Details from './pages/Details/Details';
import Services from './pages/Services/Services';

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/detail" element={<Details />} />
        <Route path="/services" element={<Services />} />
      </Routes>

      <Footer />
      <Line />
    </>
  );
}

export default App;

import './App.css';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Line from './components/Line/Line';
import Footer from './components/Footer/Footer';

import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>

      <Footer />
      <Line />
    </>
  );
}

export default App;

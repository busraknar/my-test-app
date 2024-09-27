import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Team from './components/Team';
import Footer from './components/Footer';
import AboutPage from './components/AboutPage';
import IndexPage from './components/IndexPage';

const App: React.FC = () => {
  return (
    <Router>
     <Home/>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/team" element={<Team />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Team from './components/Team';
import Footer from './components/Footer';
import AboutPage from './components/AboutPage';
import IndexPage from './components/IndexPage';
import ReadingTest from './components/ReadingTest';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <Router>
     <Home/>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/team" element={<Team />} />
        <Route path="/test" element={<ReadingTest/>} />
        <Route path="/contact" element={<Contact/>} />

      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;

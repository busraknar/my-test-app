import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Team from './pages/Team/Team';
import Footer from './components/Footer';
import AboutPage from './components/AboutPage';
import IndexPage from './components/IndexPage';
import ReadingTest from './components/ReadingTest';
import Contact from './components/Contact';
import UniversityResults from './pages/Results/UniversityResults';
import ReadingOmr from './NotUsed/ReadingOmr';
import ResultAll from './pages/ResultAll/ResultAll';


const App: React.FC = () => {
  return (
    <Router>
      <Home />
      <Routes>
      
        <Route path="/:className" element={<UniversityResults />} />
        <Route path="/" element={<IndexPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/team" element={<Team />} />
        <Route path="/test" element={<ReadingTest />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/result" element={<ResultAll/>} />

      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

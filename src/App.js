// import logo from './logo.svg';
import './App.css';
import Homepage from './components/homepage';
import { HashRouter as Router, Routes, Route} from 'react-router-dom';
import Work from './components/work';
import AboutMe from './components/aboutMe'
import Contact from './components/contact';

function App() {
  return (
    <Router>
    
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="work" element={<Work />} />
      <Route path="aboutme" element={<AboutMe />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
    
  </Router>
    
  );
}

export default App;

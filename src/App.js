import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import KuraReo from './pages/KuraReo';
import Contact from './pages/Contact';
import Resources from './pages/Resources';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="kura-reo" element={<KuraReo />} />
      <Route path="resources" element={<Resources />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  );
}

export default App;

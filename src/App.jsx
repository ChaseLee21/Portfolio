import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import AboutMe from './components/AboutMe.jsx';
import Resume from './components/Resume.jsx';
import Projects from './components/Projects.jsx';
import './App.css'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
      <Route path="/" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;
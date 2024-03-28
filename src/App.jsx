// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import AboutMe from './components/AboutMe.jsx';
import Resume from './components/Resume.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import './App.css'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <AboutMe />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </>
  )
}

export default App

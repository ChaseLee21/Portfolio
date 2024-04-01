import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import AboutMe from './components/AboutMe.jsx';
import Resume from './components/Resume.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import './App.css'

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/aboutme" component={AboutMe} />
        <Route path="/projects" component={Projects} />
        <Route path="/resume" component={Resume} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App;
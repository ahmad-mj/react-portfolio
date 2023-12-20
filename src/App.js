import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './containers/about';
import Home from './containers/home';
import Contact from './containers/contact';
import Portfolio from './containers/portfolio';
import Resume from './containers/resume';
import Skills from './containers/skills';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
<Routes>
  <Route path='/' Component={ Home } />
  <Route path='/about' Component={ About } />
  <Route path='/contact' Component={ Contact } />
  <Route path='/home' Component={ Home } />
  <Route path='/portfolio' Component={ Portfolio } />
  <Route path='/resume' Component={ Resume } />
  <Route path='/skills' Component={ Skills } />
</Routes> 

    </div>
  );
}

export default App;

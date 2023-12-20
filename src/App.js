import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './containers/about';
import Home from './containers/home';

function App() {
  return (
    <div className="App">
<Routes>
  <Route path='/' Component={ Home } />
  <Route path='/about' Component={ About } />
</Routes> 

    </div>
  );
}

export default App;

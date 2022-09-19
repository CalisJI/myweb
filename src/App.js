import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import SideBar from './components/SideBar';
import About from './pages/About';
import Project from './pages/Project';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="App">
      <Router>
        <SideBar/>
        
        <div id='page-wrap'>
          <Navbar/>
          <Routes>
            <Route index element = {<Home/>}/>
            <Route path='/about' element = {<About/>}/>
            <Route path='/contact' element = {<Contact/>}/>
            <Route path='/project' element = {<Project/>}/>
          </Routes>
        </div>
        
      </Router>
    </div>
  );
}

export default App;

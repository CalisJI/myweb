import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import SideBar from './components/SideBar';
import About from './pages/About';
import Project from './pages/Project';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import React, {useRef, useState} from 'react';
function App() {
  const sideBar_ref = useRef();
  const [Opensidebar,setPadding] = useState("0px");
  const Excute =(e)=>{
    if(e==="0px"){
      setPadding("250px");
    }
    else{
      setPadding("0px");
    }
  }
  return (
    
    <div className="App">
      <Router>
        <SideBar ref={sideBar_ref} Command={Excute}/>
        
        <div id='page-wrap' style={{marginLeft:Opensidebar}}>
          <Navbar btnonclick={()=>sideBar_ref.current.Opensidebar()}/>
          {/* <button onClick={()=>sideBar_ref.current.Opensidebar()}>Click Test</button> */}
          <Routes >
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

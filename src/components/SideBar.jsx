import React,{ forwardRef,useState, useImperativeHandle } from 'react'
import { Link } from 'react-router-dom';
import '../styles/SideBar.css';
import logo from '../assets/calis_logo.png';
const SideBar = forwardRef((props,ref) => {
   const [openwidth,setWidth] = useState("55px"); 
   const [logopos,setLogo] = useState("0px"); 
    
   useImperativeHandle(ref,()=>{
        Opensidebar();
   });

   const Opensidebar =(event)=>{
        if(openwidth === "55px"){
            setWidth("250px");
            setLogo("195px");
        }
        else{
            setWidth("55px");
            setLogo("0px");
        }
   }
   
  return (
    <div className="sidebar" style={{width:openwidth}}>
        {/* <img  src={logo} alt="calis_logo" className='logo' onClick={Opensidebar} style={{marginLeft:logopos}}/> */}
        <div >
            <Link className='Link' to='/' >Home</Link>
            <Link className='Link' to='/about' >About</Link>
            <Link className='Link' to='/contact' >Contact</Link>
            <Link className='Link' to='/project' >Project</Link>
        </div>
    </div>
  )
})

export default SideBar
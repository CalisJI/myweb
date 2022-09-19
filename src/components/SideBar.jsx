import React,{ forwardRef,useState, useImperativeHandle } from 'react'
import { Link } from 'react-router-dom';
import '../styles/SideBar.css';
import logo from '../assets/calis_logo.png';
import {AiOutlineHome} from 'react-icons/ai';
import {GrContactInfo} from 'react-icons/gr';
import {FcContacts, FcList,FcAbout} from 'react-icons/fc';
const SideBar = forwardRef((props,ref) => {
   const [openwidth,setWidth] = useState("0px"); 
    
   useImperativeHandle(ref, () => ({
     Opensidebar() {
       if (openwidth === "0px") {
         setWidth("250px");
         props.Command("0px");
       } else {
         setWidth("0px");
         props.Command("250px");
       }
     },
   }));
  return (
    <div className="sidebar" style={{width:openwidth}}>
        {/* <img  src={logo} alt="calis_logo" className='logo' onClick={Opensidebar} style={{marginLeft:logopos}}/> */}
        <div >
            <Link className='Link' to='/' ><FcList/> Home</Link>
            <Link className='Link' to='/about' > <FcAbout /> About</Link>
            <Link className='Link' to='/contact' ><FcContacts /> Contact</Link>
            <Link className='Link' to='/project' >Project</Link>
        </div>
    </div>
  )
})

export default SideBar
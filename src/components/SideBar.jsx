import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import '../styles/SideBar.css';
function SideBar(props) {
   const [openwidth,setWidth] = useState("0px"); 
   props.Opensidebar =()=>{
        setWidth("250px");
   }
   props.CloseSidebar = ()=>{
    setWidth("0px");
   }
  return (
    <div className="sidebar" style={{width:openwidth}}>
        <Link to='/' >Home</Link>
        <Link to='/about' >About</Link>
        <Link to='/contact' >Contact</Link>
        <Link to='/project' >Project</Link>
    </div>
  )
}

export default SideBar
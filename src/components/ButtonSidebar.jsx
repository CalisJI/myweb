import React, {useState} from "react";
import "../styles/ButtonSidebar.css";

const ButtonSidebar = (props) => {
    const [effect,setEffect] = useState("");
    const Clickk = () =>{
        
        if (effect === ""){
            setEffect("change");
        }
        else if (effect === "change"){ 
            setEffect("");
        }
        props.Open();
    }
  return (
    <div className={"container "+effect} onClick={Clickk}>
      <div className="bar1"></div>
      <div className="bar2"></div>
      <div className="bar3"></div>
    </div>
  );
};

export default ButtonSidebar;

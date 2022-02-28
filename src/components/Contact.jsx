import React, {useState, useEffect} from "react";
import Loading from "./Loading";
import NavBar from "./NavBar";

const Contact=()=>{
    
    return(
        <div>
            <div className="nav">
                <NavBar/>
            </div>
            
            <h1 className="title">Contact Us</h1>
        </div>
    );
}

export default Contact;
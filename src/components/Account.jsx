import React, {useState, useEffect} from "react";
import NavBar from "./NavBar";

const Account=()=>{
    return(
        <div>
            <div className="nav">
                <NavBar/>
            </div>
            <h1 className="title">Account</h1>
        </div>
    );
}

export default Account;
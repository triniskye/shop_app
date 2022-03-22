import React, {useState, useEffect} from "react";

const Account=(props)=>{
    let firstName = "";
    let lastName = "";
    let user = false
    if (props.user.email){
        firstName = props.user.first_name;
        lastName = props.user.last_name;
        user = true
    }else{
        user = false
    }
    return(
        <div>
            <h1 className="title">Account</h1> 
            <div >
                {user ? 
                <div className="userDetails">
                <h2 className="email">Email:<br/>{props.user.email}</h2>
                <h2 className="name">Name:<br/>{firstName.charAt(0).toUpperCase() + firstName.substring(1)} {lastName.charAt(0).toUpperCase() + lastName.substring(1)}</h2>
                </div>
                :    
                <div>
                    <h2>Please log in</h2>
                </div>}
                </div>
            
        </div>
    );
}

export default Account;
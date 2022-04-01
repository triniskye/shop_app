import React, {useState, useEffect} from "react";
import Clock from 'react-live-clock';


export default function About(){
    let str1 = "";
    let str2 = "";
    let today = new Date();
    let weekday = today.getDay();
    let time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    if((weekday === 6) || (weekday === 0)){
        str1 = time
        str2 = "13:00:00"
    }
    else{
        str1 = time
        str2 = "18:00:00"
    }
   

    function storeStatus(str1, str2){
        if(str1 < str2){
            return(
                <p><span style={{color: "greenyellow"}}>We are currently open!</span><span> <Clock format={'HH:mm:ss'} ticking={true} timezone={'Australia/Brisbane'} /></span></p>
            ) 
            

        }
        else if(str1 > str2){
            return(
                <p><span style={{color: "red"}}>We are currently closed! </span><span><Clock format={'HH:mm:ss'} ticking={true} timezone={'Australia/Brisbane'} /></span></p>
            ) 
        }
        else{
            return(
                <p style={{color: "greenyellow"}}>i dont know where i am, where am i?</p>
            )
        }
    }
    
    return(
        <div>
            <h1 className="title">About</h1>
            <div className="aboutContent">
                <div className="aboutDetails">
                    <h2>Hours:</h2><br/>
                    <p>Mon-Fri 6am-6pm | Kitchen: 6am-5:45pm</p>
                    <p>Sat-Sun 6am-1pm | Kitchen: 6am-12:45pm</p>
                    {storeStatus(str1, str2)}
                </div>
            </div>
        </div>
    )
}
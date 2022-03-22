import React, {useState, useEffect} from "react";

const Contact=()=>{
    
    return(
        <div>
            
            <h1 className="title">Contact Us</h1>
            <div className="contactContent">
                <div className="contactImageContainer">
                    <img className="contactImage" src="https://lh3.googleusercontent.com/p/AF1QipPkcnP5kRRoWw42nq2SSIQb-aK3X7TQbOOTOLg0=s1600-w400"/>
                </div>
                <div className="details">
                    <p>PHONE: (07) 5467 1255</p>
                    <p>ADDRESS: 37 Queen St, Harrisville QLD 4307</p>
                </div>

            </div>
        </div>
    );
}

export default Contact;
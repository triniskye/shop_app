import React, {useState, useEffect} from "react";
import NavBar from "./NavBar";



const Home=()=>{


    return(
        <div>
            
            <div className="nav">
                <NavBar/>
            </div>
            <div className="block">block</div>
            <h1 className="title">Harrisville News & General Store</h1>
           

        </div>
    );
}

export default Home;
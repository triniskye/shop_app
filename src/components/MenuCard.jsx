import React, {useEffect, useState} from "react";


const MenuCard=(props)=>{
 

    return(
        <div>
            
            <div className="card" style={{backgroundColor : "rgb(184, 63, 93)", borderRadius: "15%"}}>
                <img className="cardImage"src={props.items.img_source}></img>
                <p>{props.items.title}</p>
                <p>${props.items.price}</p>
                <button className="viewButton">View</button>
                <div style={{fontSize: "1vw"}}>
                {props.items.available ? <p>Available✔️</p> : <p>Not Available❌</p>}
                </div>
            </div>
        
        
        </div>
    );
}

export default MenuCard;
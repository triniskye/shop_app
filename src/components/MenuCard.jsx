import React from "react";


const MenuCard=(props)=>{
    function handleView(){
        props.changeId(props.item.id)
        console.log(props.item.id)
        props.toggle()
    }

    return(
        <div>
            
            <div className="card" style={{backgroundColor : "rgb(184, 63, 93)", borderRadius: "15%"}}>
                {/* <img className="cardImage"src={props.item.img_source}></img> */}
                <p>{props.item.title}</p>
                <p>${props.item.price}</p>
                {props.item.ingredients != null ? <button type="button" className="viewButton" onClick={handleView}>View</button> : <></>}
                
                <div style={{fontSize: "1vw"}}>
                {props.item.available ? <p>Available✔️</p> : <p>Not Available❌</p>}
                </div>
            </div>
        
        
        </div>
    );
}

export default MenuCard;
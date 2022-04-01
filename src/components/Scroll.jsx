import React from "react";

const Scroll=(props)=>{
    return(
        <div style={{overflowY: "scroll", height: "79vh", maxWidth:"100vw", overflowX:"hidden"}}>
            {props.children}
        </div>
    );
}

export default Scroll;
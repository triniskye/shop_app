import React from "react";

const MenuCard=({item, price, type})=>{
    return(
        <div>
            <h1>{item}</h1>
            <h3>{price}</h3>
            <p>{type}</p>
        </div>
    );
}

export default MenuCard;
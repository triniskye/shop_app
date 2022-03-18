import React, {useEffect, useState} from "react";


const MenuCard=({title, price, food_type, ingredients, img_source})=>{
    

  
    return(
        <div>
            
            <div>
                <h1>{title}</h1>
                <h3>{price}</h3>
                <p>{food_type}</p>
            </div>
        
        
        </div>
    );
}

export default MenuCard;
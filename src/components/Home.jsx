import React, {useState, useEffect } from 'react';
import MenuCard from "./MenuCard";
import NavBar from "./NavBar";



const Home=()=>{
    const [items, setItems] = useState([])

    useEffect(()=>{
      fetch("http://localhost:5000/menu_items")
      .then(res => res.json())
      .then((data)=>{
        data.map((item)=>{
          setItems(items.push(item))
        })
        items.forEach((item)=>{
          console.log(item)
        })
      })
      .catch(err => setItems(`Errors: ${err}`))
      
    }, [])

    const cards = items.map((item)=>{
        return(
            <MenuCard key = {item.id} title={item.title} price={item.price} food_type = {item.food_type} ingredients = {item.ingredients} img_source = {item.img_source}/>
        )
    })


  
    return(
        <div>
            
            <div className="nav">
                <NavBar/>
            </div>
            
            <h1 className="title">Harrisville News & General Store</h1>
           
            <div className="cardsArea">
                {cards}
            </div>

        </div>
    );
}

export default Home;
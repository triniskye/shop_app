import React, {useState, useEffect} from "react";
import Loading from "./Loading";
import NavBar from "./NavBar";
import MenuCard from "./MenuCard";



const Menu=()=>{

    const [items, setItems] = useState([])
  useEffect(() => {
    fetch("http://localhost:5000/menu_items")
      .then(res => res.json())
      .then((data) => {
        console.log("data", data)
        setItems(data)
      })
      .catch(err => setItems(`Errors: ${err}`))
  }, [])

  let cards = items.map((item) => {
    return (
      <div key={item.id}>
        <MenuCard items={item} />
      </div>

    )
  })

    return(
        
        <div>
            <h1 className="title">Menu</h1>
            <div className="cardsArea">
            {items.length > 0 ? cards : <>Loading...</>}

            </div>
 
            
        </div>
    );
}

export default Menu;
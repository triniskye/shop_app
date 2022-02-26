import React, { useState, useEffect} from "react";
import NavBar from "./NavBar";
import MenuCard from "./MenuCard";



const Menu=()=>{

    const [data, setData] = useState()

    function fetchData(){
         fetch("http://localhost:5000/menu")
        .then(res=> {return res.json()})
        .then(json=>setData(json))
        .catch(err=>console.log(err))
    }
    useEffect(()=>{
        fetchData()
        console.log([data])
        for(const i in data){
            for(const[key, value] of i){
                console.log(`${key} is ${value}`)
            }
        }
    }, []);


    return(
        
        <div>
            <NavBar/>
            <h1 className="title">Menu</h1>
 
            
        </div>
    );
}

export default Menu;
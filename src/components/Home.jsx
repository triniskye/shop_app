import React, {useState, useEffect} from "react";
import Loading from "./Loading";
import NavBar from "./NavBar";



const Home=()=>{
    const [loaded, setLoaded] = useState(false)
    
    useState(()=>{
        setLoaded(true)
    }, [])

    return(
        <div>
            <NavBar/>
           {loaded? <h1 className="title">Harrisville News and General Store</h1> : <Loading/> }
           

        </div>
    );
}

export default Home;
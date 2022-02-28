import React, {useState, useEffect } from 'react';
import '../stylesheets/App.css';
import Loading from '../components/Loading';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from '../components/Home';
import Menu from '../components/Menu';
import Contact from '../components/Contact';
import Login from '../components/Login';
import Signup from '../components/Signup';
import Account from '../components/Account';
import About from '../components/About';

function App() {
  const [loaded, setLoaded] = useState(false)
    
  useEffect(()=>{
      setLoaded(true)
  }, [])
  return (
    <div className="App">
      {loaded == false? <Loading/> : 
      <div className="App-content">
        <Router> 

          <Routes>

            <Route exact path="/" element={<Home/>}/>

            <Route path="/menu" element={<Menu/>}/>

            <Route path="/contact" element={<Contact/>}/>

            <Route path="/signup" element={<Signup/>}/>

            <Route path="/login" element={<Login/>}/>

            <Route exact path="/about" element={<About/>}/>

            <Route path="/account" element={<Account/>}/>


          </Routes>

        </Router>
      </div>
    }
    </div>
  );
}

export default App;

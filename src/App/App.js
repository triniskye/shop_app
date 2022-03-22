import React, {useState, useEffect } from 'react';
import '../stylesheets/App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from '../components/Home';
import Menu from '../components/Menu';
import Contact from '../components/Contact';
import Login from '../components/Login';
import Signup from '../components/Signup';
import Account from '../components/Account';
import About from '../components/About';
import NavBar from '../components/NavBar';


function App() {
const [loggedIn, setLoggedIn] = useState(false)
const [user, setUser] = useState([])
console.log("hello")

function setNewUser(newUserArr){
  setUser(newUserArr);
  console.log("user",newUserArr)
}

function changeLoggedInStatus(status){
  setLoggedIn(status)
}


  return (
    <div className="App">
 
      <div className="App-content">
      <div className="nav">
        <NavBar status = {loggedIn}/>
      </div>
        <Router> 

          <Routes>                                                                                            

            <Route exact path="/" element={<Home loggedIn = {loggedIn}/>}/>

            <Route path="/menu" element={<Menu/>}/>

            <Route path="/contact" element={<Contact/>}/>

            <Route path="/signup" element={<Signup setNewUser = {setNewUser} setStatus = {changeLoggedInStatus}/>}/>

            <Route path="/login" element={<Login setNewUser = {setNewUser} setStatus = {changeLoggedInStatus}/>}/>

            <Route exact path="/about" element={<About/>}/>

            <Route path="/account" element={<Account user={user}/>}/>


          </Routes>

        </Router>
      </div>

    </div>
  );
}

export default App;

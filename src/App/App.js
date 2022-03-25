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
  setUser(newUserArr.user);
  console.log("user",newUserArr.user)
  setLoggedIn(true)
}

useEffect(() => {
  const userData = window.localStorage.getItem('my_app_user')
  setUser(JSON.parse(userData));
  console.log("reload", userData)
}, []);

useEffect(() => {
  window.localStorage.setItem('my_app_user', JSON.stringify(user));
  console.log("updated state", user)
}, [user]);
 

  return (
    <div className="App">
 
      <div className="App-content">
      <div className="nav">
        <NavBar user={user}/>
      </div>
        <Router> 

          <Routes>                                                                                            

            <Route exact path="/" element={<Home loggedIn = {loggedIn}/>}/>

            <Route path="/menu" element={<Menu/>}/>

            <Route path="/contact" element={<Contact/>}/>

            <Route path="/signup" element={<Signup setNewUser = {setNewUser} />}/>

            <Route path="/login" element={<Login setNewUser = {setNewUser} />}/>

            <Route exact path="/about" element={<About/>}/>

            <Route path="/account" element={<Account user={user}/>}/>


          </Routes>

        </Router>
      </div>

    </div>
  );
}

export default App;

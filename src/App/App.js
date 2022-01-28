import React from 'react';
import '../stylesheets/App.css';
import Loading from '../components/Loading';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from '../components/Home';
import Menu from '../components/Menu';
import Contact from '../components/Contact';
import Login from '../components/Login';
import Signup from '../components/Signup';
import Account from '../components/Account';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Router> 

          <Routes>

            <Route exact path="/" element={<Home/>}/>

            <Route path="/menu" element={<Menu/>}/>

            <Route path="/contact" element={<Contact/>}/>

            <Route path="/signup" element={<Signup/>}/>

            <Route path="/login" element={<Login/>}/>

            <Route path="/account" element={<Account/>}/>


          </Routes>

        </Router>
      </div>
  
    </div>
  );
}

export default App;

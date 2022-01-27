import React from 'react';
import '../stylesheets/App.css'
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

            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/menu">
              <Menu />
            </Route>

            <Route path="/contact">
              <Contact />
            </Route>

            <Route path="/signup">
              <Signup />
            </Route>

            <Route path="/login">
              <Login />
            </Route>

            <Route path="/account">
              <Account />
            </Route>

          </Routes>

        </Router>

        <Loading />
      </div>
    </div>
  );
}

export default App;

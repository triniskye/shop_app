import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";

const Login=(props)=>{
    const nav = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let error = ""
    function submitForm(e){
        e.preventDefault()
        fetch('http://localhost:5000/login', {
            method: "POST",
            body: JSON.stringify({
                email : email,
                password : password
            }),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
            .then(response => response.json())
            .then(json => {
                console.log(json);
                props.setNewUser(json);
                nav("/")
            })
            .catch(err => {
                console.log(err)
                error = err
            });
        
    }
    function handleEmail(e){
        setEmail(e.target.value)
    }
    function handlePassword(e){
        setPassword(e.target.value)
    }
    return(
        <div>
            <h1>login</h1>
            <button className="backButton">Back</button>
            <h2 style={{backgroundColor: "red"}}>{error}</h2>
            <form onSubmit={submitForm}>
                <label>Email:</label><br/>
                <input type="email" placeholder="gbostock@emailprovider.com" onChange={handleEmail}></input><br/>
                <label>Password:</label><br/>
                <input type="password" placeholder="********" onChange={handlePassword}></input><br/>
                <button type="submit">Submit</button>
            </form>
            <p>New Here? <a href="/signup">Signup!</a></p>
        </div>
    );
}

export default Login;
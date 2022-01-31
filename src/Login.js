import React,{useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import "./Login.css";

function Login() {
  const Navigate = useNavigate();
  const [email, setemail] = useState(""); 
  const [password, setpassword] = useState(""); 
  const signIn = e => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
     .then(auth =>{
       Navigate("/")
     })
    .catch(error=> alert(error.message))
  }
  const register = e => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log("Register")
        if (auth) {
      Navigate("/");
        }
      })
          .catch(error => alert(error.message))
    
    }
  
  return (
    <div className="login">
      <Link to="/">
        <img
          className="amazon_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="logo"
        />
      </Link>

      <div className="login_box">
        <h1>Sign-In</h1> 
        <form>
          <h5>Email :</h5>
          <input type="email" value={email} onChange={e=> setemail(e.target.value)}/>

          <h5>Password: </h5>
          <input type="password" value={password} onChange={e => setpassword(e.target.value)}/>

          <p>
            By continuing, you agree to Amazon's Conditions of Use and Privacy Notice
          </p>
          <button type="submit" onClick={signIn} className="login_signinButton">Sign In</button>
        </form>
        <button onClick={register} className="register_button">Create you Amazon account</button>
      </div>
    </div>
  );
}

export default Login;

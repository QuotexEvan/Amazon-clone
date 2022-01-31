import React, {useEffect }from "react";
import "./App.css";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import Checkout from "./Checkout";
import Login from "./Login";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ }, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user:authUser,
         })
      } else {
        dispatch({
          type: "SET_USER",
          user:null
        })
      }
    })
    
  },[])
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<><Header/><Home/><Footer/></>} />
          <Route path="/checkout" element={<><Header/><Checkout /></>} />"
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </div>
    </Router>
  );
}
export default App;

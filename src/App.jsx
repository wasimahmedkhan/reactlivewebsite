import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import { Routes,Route, Navigate } from "react-router-dom";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Footer from "./Footer";
const App = () => {
  return(
    <>
    <Navbar/>
      <Routes>
        <Route exact path="/" Component={Home}/>
        <Route exact path="/about" Component={About}/>
        <Route exact path="/services" Component={Services}/>
        <Route exact path="/contact" Component={Contact}/>
        <Route exact path="*" Component={()=><Navigate to="/"/>}/>
        </Routes>
        <Footer/>
    </>
  )
}
export default App;
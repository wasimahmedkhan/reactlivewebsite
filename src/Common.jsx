import React from "react";
// import { NavLink } from "react-router-dom";
// import web from "../src/images/rocket2.php"
import { NavLink } from "react-router-dom";
const Common = (props) => {
  return(
    <>
      <div className="about container-fluid">
       <div className="col-md-6 order-1 order-2-lg mt-6 about2">
        <h1>{props.btname}</h1>
        <h2>fdrfyryfdrrdetuyeueueuyteydededdehdjhg</h2>
        <strong className="str">WASIM PROJECT</strong>
        <NavLink to={props.visit} className="buttn">get started</NavLink>
        </div>
        <div className="imag">
        <img src={props.imgsrc} alt="rocket"/>
        </div>
        </div>
    </>
  )
}
export default Common;
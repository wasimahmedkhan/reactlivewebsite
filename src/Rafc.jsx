import React from "react";
 import { NavLink } from "react-router-dom";
  import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
//  import and from "../src/images/computer.jph.avif";

const Rafc = (props) => {
    <> 
    <div className="col-md-4 col-10 mx-auto"> 
<div className="card">
  <img src={props.imgsrc} className="card-img-top" alt="props"/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <NavLink to="/contact" className="btn btn-primary">Go somewhere</NavLink>
  </div>
</div>
</div>
</>
}
export default Rafc;
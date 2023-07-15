import React from "react";
//  import Sdata from "./Sdata";
//  import Rafc from "./Rafc";
 import { NavLink } from "react-router-dom";
// import and from "../src/images/computer.jph.avif";
 import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
 import web from "../src/images/coffee.jph.webp";
import android from "../src/images/computer.jph.avif";
import digital from "../src/images/data.jph.avif";
import peacock from "../src/images/pea.jpg";
import rocket from "../src/images/rocket.php";
import rocket2 from "../src/images/rocket2.php";

const Services = () => {
  return(
    <>
      <div className="my-5">
      <h1 className="text-center">OUR SERVICES </h1>
      </div>
      <div className="container-fluid mb-5">
      <div className="row ">
        <div className=" col-12 mx-auto "> 
        <div className="row gy-6">
        <div className=" col-12 mx-auto d-flex">
<div className="card">
  <img src={web} className="card-img-top" alt="props"/>
  <div className="card-body">
    <h5 className="card-title">coffee mug</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <NavLink to="/contact" className="btn btn-primary">Go somewhere</NavLink>
  </div>
</div>
<div className="card ">
  <img src={android} className="card-img-top" alt="props"/>
  <div className="card-body">
    <h5 className="card-title">computer world</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <NavLink to="/contact" className="btn btn-primary">Go somewhere</NavLink>
  </div>
</div>
<div className="card">
  <img src={digital} className="card-img-top" alt="props"/>
  <div className="card-body">
    <h5 className="card-title">data science</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <NavLink to="/contact" className="btn btn-primary">Go somewhere</NavLink>
  </div>
</div>
<div className="card">
  <img src={peacock} className="card-img-top" alt="props"/>
  <div className="card-body">
    <h5 className="card-title">peacock</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <NavLink to="/contact" className="btn btn-primary">Go somewhere</NavLink>
  </div>
</div>
<div className="card">
  <img src={rocket} className="card-img-top" alt="props"/>
  <div className="card-body">
    <h5 className="card-title">rocket</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <NavLink to="/contact" className="btn btn-primary">Go somewhere</NavLink>
  </div>
</div>
<div className="card">
  <img src={rocket2} className="card-img-top" alt="props"/>
  <div className="card-body">
    <h5 className="card-title">second rocket</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <NavLink to="/contact" className="btn btn-primary">Go somewhere</NavLink>
  </div>
</div>


</div>
</div>
</div>
      </div>
      </div>
    </>
  )
}
export default Services;
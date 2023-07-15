// import { Button } from "bootstrap/dist/js/bootstrap.bundle";
import React from "react";
import { NavLink } from "react-router-dom";
const Home = () => {
  return(
    <>
      <section className="home">
      <div className="home1">
      <div className="home2">
        <p className="text">orem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type </p> <strong className="str">WASIM PROJECT</strong>
        <NavLink to="/services"className="btn">get started</NavLink>
        </div>
        </div>
        <div className="image">
        <img src="https://charatoon.com/photo/4719.png" alt="house"/>
        </div>
      </section>
    </>
  )
}
export default Home;
import React from "react";
// import { NavLink } from "react-router-dom";
 import web from "../src/images/rocket2.php"
// import { NavLink } from "react-router-dom";
import Common from "./Common";
const About = () => {
  return(
    <>
      <Common
      btname= "grow your business"
      imgsrc= {web}
      visit= "/home"
      />
    </>
  )
}
export default About;
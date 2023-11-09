import React from "react";
import img1 from "../assets/b3.jpg";
import building from "../assets/building.jpg";
import architucture from "../assets/homepro3.jpg";
import interior from "../assets/interior.jpg";
import materilas from "../assets/materilas.jpeg";
import plan from "../assets/plan.jpg";
import renovation from "../assets/renovation.jpeg";
export default function Services() {
  return (
    <section className="services" id="services">
      <h1 className="heading">Our Services</h1>
      <div className="box-continer">
        <div className="box">
          <img src={building} className="img" alt="img" />
          <h3 className="h3">Dream Architecture</h3>
          <p className="p">
            {" "}
            Crafting Dreams, Precision, Quality, and Innovation in Building
            Construction{" "}
          </p>
        </div>
        <div className="box">
          <img src={architucture} className="img" alt="img" />
          <h3 className="h3">Home Design</h3>
          <p className="p">
            Elevate Spaces, Innovative Architecture Designs for Inspired Living
          </p>
        </div>
        <div className="box">
          <img src={interior} className="img" alt="img" />
          <h3 className="h3">Interior Design</h3>
          <p className="p"> Inspiring Interior Design Excellence</p>
        </div>
        <div className="box">
          <img src={materilas} className="img" alt="img" />
          <h3 className="h3">Material Supply</h3>
          <p className="p">
            Streamlined Material Supply Solutions for Seamless Project Success
          </p>
        </div>
        <div className="box">
          <img src={plan} className="img" alt="img" />
          <h3 className="h3">Construction Consultant</h3>
          <p className="p">
            {" "}
            Your Trusted Construction Consultant for Expert Guidance
          </p>
        </div>
        <div className="box">
          <img src={renovation} className="img" alt="img" />
          <h3 className="h3">Building Renovation</h3>
          <p className="p">
            {" "}
            Transformative Building Renovation Services Await You!
          </p>
        </div>
      </div>
    </section>
  );
}

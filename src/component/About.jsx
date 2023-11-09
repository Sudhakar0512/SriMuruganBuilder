import React from "react";
import img1 from "../assets/aboutVideo2.mp4";
export default function About() {
  return (
    <section className="about" id="about">
      <h1 className="heading">about us</h1>
      <div className="row">
        <div className="video">
          {/* <img src={img1} className='img'  alt="" /> */}
          <video autoPlay muted loop className='brightness-10' style={{ filter: 'brightness(90%)'}}>
            <source src={img1} />
          </video>
        </div>
        <div className="content">
          <h3 className="h3 ">
            we turn your dreams into reality and Provide You That Best Work
            Which You Dreamt For!
          </h3>
          <p className="p items-center ">
            Crafting extraordinary dreams where your imagination meets our
            masterful expertise,Where Dreams Take Flight, and Your Construction
            Aspirations Materialize in a Symphony of Skill and Innovation
          </p>
          <a href="#services" className="btn">
            read more
          </a>
        </div>
      </div>
      <div className="box-container" style={{cursor:'pointer'}}>
        <div className="box">
          <h3 className="h3">2+</h3>
          <p className="p">Years Experience</p>
        </div>
        <div className="box">
          <h3 className="h3">20+</h3>
          <p className="p">Project completion</p>
        </div>
        <div className="box">
          <h3 className="h3">100+</h3>
          <p className="p">satiesified clients</p>
        </div>
        <div className="box">
          <h3 className="h3">40+</h3>
          <p className="p">Acive Workers</p>
        </div>
      </div>
    </section>
  );
}

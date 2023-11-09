import React from "react";
import img1 from "../assets/b1.jpg";
import caboard from "../assets/interior.jpg";
import LightGallery from "lightgallery/react";
import homeprayer from "../assets/homeprayer.jpg";
import homepro from "../assets/homepro.png";
import homepro2 from "../assets/homepro2.jpg";
import homepro3 from "../assets/homepro3.jpg";
import flooring from "../assets/flooringpro.jpg";
import tvpro from "../assets/tvpro.jpeg";
import logo from "../assets/logo.png";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

export default function Projects() {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };
  return (
    <section className="projects" id="projects">
      <h1 className="heading">Our Project</h1>
      {/* <div className='box-container'> */}
      {/* <LightGallery
         onInit={onInit}
         speed={500}
         plugins={[lgThumbnail, lgZoom]}
      > */}
      <div className="box-container">
        <a href={caboard} className="box">
          <div className="image">
            <img
              src={caboard}
              style={{
                width: "100%",
                objectFit: "cover",
                height: "100%",
                overflow: "hidden",
              }}
              className="img"
              alt=""
            />
          </div>
          <div className="content">
            <div className="info">
              <h3 className="h3">Interior Design</h3>
              <p className="p">Inspiring Interior Design</p>
            </div>
            <i className="fas fa-plus i"></i>
          </div>
        </a>
        <a href={homepro} className="box">
          <div className="image">
            <img
              src={homepro}
              style={{
                width: "100%",
                objectFit: "cover",
                height: "100%",
                overflow: "hidden",
              }}
              className="img"
              alt=""
            />
          </div>
          <div className="content">
            <div className="info">
              <h3 className="h3">dream home</h3>
              <p className="p">Attractive Home Design</p>
            </div>
            <i className="fas fa-plus i"></i>
          </div>
        </a>
        <a href={homepro2} className="box">
          <div className="image">
            <img
              src={homepro2}
              style={{
                width: "100%",
                objectFit: "cover",
                height: "100%",
                overflow: "hidden",
              }}
              className="img"
              alt=""
            />
          </div>
          <div className="content">
            <div className="info">
              <h3 className="h3">Architecture home</h3>
              <p className="p">Innovative Architecture Designs </p>
            </div>
            <i className="fas fa-plus i"></i>
          </div>
        </a>
        <a href={homepro3} className="box">
          <div className="image">
            <img
              src={homepro3}
              style={{
                width: "100%",
                objectFit: "cover",
                height: "100%",
                overflow: "hidden",
              }}
              className="img"
              alt=""
            />
          </div>
          <div className="content">
            <div className="info">
              <h3 className="h3">Cushy Haven</h3>
              <p className="p">Plush Comfort Paradise</p>
            </div>
            <i className="fas fa-plus i"></i>
          </div>
        </a>
        <a href={flooring} className="box">
          <div className="image">
            <img
              src={flooring}
              style={{
                width: "100%",
                objectFit: "cover",
                height: "100%",
                overflow: "hidden",
              }}
              className="img"
              alt=""
            />
          </div>
          <div className="content">
            <div className="info">
              <h3 className="h3">Flooring Design</h3>
              <p className="p">Stylish flooring solutions</p>
            </div>
            <i className="fas fa-plus i"></i>
          </div>
        </a>
        <a href={tvpro} className="box">
          <div className="image">
            <img
              src={tvpro}
              style={{
                width: "100%",
                objectFit: "cover",
                height: "100%",
                overflow: "hidden",
              }}
              className="img"
              alt=""
            />
          </div>
          <div className="content">
            <div className="info">
              <h3 className="h3">Attractive Showcase</h3>
              <p className="p">Showcasing Elegance Unveiled</p>
            </div>
            <i className="fas fa-plus i"></i>
          </div>
        </a>
        {/* <a href={img1} className="box">
          <div className="image">
            <img
              src={img1}
              style={{
                width: "100%",
                objectFit: "cover",
                height: "100%",
                overflow: "hidden",
              }}
              className="img"
              alt=""
            />
          </div>
          <div className="content">
            <div className="info">
              <h3 className="h3">dream home</h3>
              <p className="p">construction ,design</p>
            </div>
            <i className="fas fa-plus i"></i>
          </div>
        </a> */}
        {/* <a href={img1} className="box">
          <div className="image">
            <img
              src={img1}
              style={{
                width: "100%",
                objectFit: "cover",
                height: "100%",
                overflow: "hidden",
              }}
              className="img"
              alt=""
            />
          </div>
          <div className="content">
            <div className="info">
              <h3 className="h3">dream home</h3>
              <p className="p">construction ,design</p>
            </div>
            <i className="fas fa-plus i"></i>
          </div>
        </a>
        <a href={img1} className="box">
          <div className="image">
            <img
              src={img1}
              style={{
                width: "100%",
                objectFit: "cover",
                height: "100%",
                overflow: "hidden",
              }}
              className="img"
              alt=""
            />
          </div>
          <div className="content">
            <div className="info">
              <h3 className="h3">dream home</h3>
              <p className="p">construction ,design</p>
            </div>
            <i className="fas fa-plus i"></i>
          </div>
        </a> */}
      </div>
      {/* </LightGallery> */}
      {/* </div> */}
    </section>
  );
}

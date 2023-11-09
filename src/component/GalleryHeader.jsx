import React, { useEffect,useState } from "react";
import { NavLink } from "react-router-dom";


export default function GalleryHeader() {
  const [isContactInfoActive, setContactInfoActive] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const isMobile = screenWidth < 330;
  useEffect(() => {
    // This code will run after the component is mounted

    let navbar = document.querySelector(".header .navbar");
    // let contactInfo = document.querySelector(".contact-info");

    // document.querySelector("#menu-btn").onclick = () => {
    //   navbar.classList.toggle("active");
    //   setContactInfoActive(false);
    // };
    document.querySelector("#info-btn").onclick = () => {
      // contactInfo.classList.add("activeee");
      setContactInfoActive(true);
    //   navbar.classList.remove('active');
    };
    document.querySelector("#close-contact-info").onclick = () => {
      // contactInfo.classList.remove("activeee");
      setContactInfoActive(false);
    };

    window.onscroll =()=>{
    //   navbar.classList.remove('active');
      setContactInfoActive(false);
    }
    
    // Cleanup function for removing event listeners when the component is unmounted
    return () => {
      window.onscroll = null;
      // Add more cleanup code if needed
    };
  }, []); // Empty dependency array ensures that the effect runs only once after the initial render

  return (
    <div>
      <header className="header">
        <a href="#" className="logo">
          {" "}
         <b> Sri <span className="sspan"> {isMobile ? "Murugan" : "Murugan Builders"} </span>{" "}</b>
        </a>


        <div className="iconss flex">
          <div>
            <NavLink to="/"  className="fas fa-home" id="">
            {/* Home */}
            </NavLink></div>
          <div id="info-btn" className="fa-solid fa-user"></div>
          {/* <div id="search-btn" className="fas fa-search"></div>
          <div id="login-btn" className="fas fa-user"></div> */}
        </div>

      </header>



      <div className="contact-info " style={{ display: isContactInfoActive ? 'block' : 'none' }}>
        <div id="close-contact-info" className="fas fa-times"></div>
        <div className="info">
          <a href="tel:9600348970">
          <i className="fas fa-phone ii"></i>
          </a>
          <h3 className="h3">phobe number</h3>
          <p className="pp">+91 9600348970</p>
          <p className="pp">+91 9842282655</p>
        </div>
        <div className="info">
          <a href="mailto:gowthmcharm@gmail.com">
            <i className="fas fa-envelope ii"></i>
          </a>
          <h3 className="h3">email address</h3>
          <p className="pp">gowthmcharm@gmail.com</p>
        </div>
        <div className="info">
          <a href="https://www.google.co.in/maps/place/SRI+MURUGAN+BUILDERS/@10.5584428,77.3976126,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba9c5774c081595:0x943fba52a8ed92f4!8m2!3d10.5584375!4d77.4001875!16s%2Fg%2F11pk9p4vc4?entry=ttu">
          <i className="fas fa-map-marker-alt ii" href="#contact"></i>
          </a>
          <h3 className="h3">office address</h3>
          <p className="pp">358A/2,Mylapuram road,vayalur,palani.624618</p>
        </div>
        <div className="share">
          
         <a href="https://instagram.com/srimuruganbuilders?igshid=MzRlODBiNWFlZA==" className="fab fa-facebook-f a1"></a>
         <a href="https://instagram.com/srimuruganbuilders?igshid=MzRlODBiNWFlZA==" className="fab fa-twitter a1"></a>
         <a href="https://instagram.com/srimuruganbuilders?igshid=MzRlODBiNWFlZA==" className="fab fa-instagram a1"></a>
         <a href="https://instagram.com/srimuruganbuilders?igshid=MzRlODBiNWFlZA==" className="fab fa-linkedin a1"></a>
        </div>

      </div>
    </div>
  );
}

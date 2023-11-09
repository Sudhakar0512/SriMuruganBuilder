import React from "react";
import img1 from "../assets/b6.jpg";
import img2 from "../assets/b5.jpg";
import img3 from "../assets/b3.jpg";
import img4 from "../assets/b4.jpg";
import img5 from "../assets/homepro3.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Import the styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";

// import { Swiper, SwiperSlide } from 'swiper/react';

export default function Home() {
  return (
    <section className="home" id="home">
      <div className="swiper home-slider mySwiper">
        <div className="swiper-wrapper">
          <Swiper
            className="home-slider mySwiper" // Add your slider class
            loop={true}
            grabCursor={true}
            autoplay={{ delay: 2800, disableOnInteraction: false }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            modules={[Autoplay, Navigation]}
          >
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>

            <SwiperSlide>
              <section
                className="swiper-slide slide"
                style={{ background: `url('${img2}') no-repeat` }}
              >
                <div className="content">
                  <h3 className="h3">Your Decision that Shape Tomorrow</h3>
                  <p className="p3">
                    Construction Excellence Where Hard Hats Meet Heart and Hands
                    Build Your Dreams.
                  </p>
                  <a href="#about" className="btn">
                    get Started
                  </a>
                </div>
              </section>
            </SwiperSlide>
            <SwiperSlide>
              <section
                className="swiper-slide slide"
                style={{ background: `url('${img3}') no-repeat` }}
              >
                <div className="content">
                  <h3 className="h3">
                    Architecting Dreams, Crafting Realities
                  </h3>
                  <p className="p3">
                    Architecting Dreams, Crafting Realities: Where Imagination
                    Meets Tangible Brilliance.
                  </p>
                  <a href="#about" className="btn">
                    get Started
                  </a>
                </div>
              </section>
            </SwiperSlide>
            <SwiperSlide>
              <section
                className="swiper-slide slide"
                style={{ background: `url('${img5}') no-repeat` }}
              >
                <div className="content">
                  <h3 className="h3">Where Vision Meets Precision</h3>
                  <p className="p3">
                  Crafting Dreams, One Solid Foundation at a Time - Excellence Defined.
                  </p>
                  <a href="#about" className="btn">
                    get Started
                  </a>
                </div>
              </section>
            </SwiperSlide>
            <SwiperSlide>
              <section
                className="swiper-slide slide"
                style={{ background: `url('${img1}') no-repeat` }}
              >
                <div className="content">
                  <h3 className="h3">Building Beyond Boundaries</h3>
                  <p className="p3">
                    Unleashing Innovation, Connecting Minds, Crafting Tomorrow's
                    Limitless Possibilities.
                  </p>
                  <a href="#about" className="btn">
                    get Started
                  </a>
                </div>
              </section>
            </SwiperSlide>
            <SwiperSlide>
              <section
                className="swiper-slide slide"
                style={{ background: `url('${img4}') no-repeat` }}
              >
                <div className="content">
                  <h3 className="h3">We Provide Best Service</h3>
                  <p className="p3">
                    Elevating Dreams, Building Excellence – Your Vision, Our
                    Construction Expertise.
                  </p>
                  <a href="#about" className="btn ">
                    get Started
                  </a>
                </div>
              </section>
            </SwiperSlide>
            {/* <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div> */}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

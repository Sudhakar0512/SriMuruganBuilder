import React from "react";
import menp from "../assets/menprofile.jpeg";
import womanp from "../assets/womanprfile.jpeg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

export default function Review() {
  return (
    <section className="reviews" id="reviwes">
      <h1 className="heading">Client Reviews</h1>
      <div className="reviews-slider">
        <div className="w">
          <Swiper
            className="home-slider mySwiper" // Add your slider class
            loop={true}
            grabCursor={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              991: { slidesPerView: 3, spaceBetween: 20 },
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            modules={[Autoplay, Navigation]}
          >
            {/* <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div> */}
            <SwiperSlide>
              <div className="slide">
                <div className="user">
                  <img src={womanp} className="img" alt="" />
                  <div className="info">
                    <h3 className="h3">Ms Surithi</h3>
                    <div className="stars">
                      <i className="fas fa-star i"></i>
                      <i className="fas fa-star i"></i>
                      <i className="fas fa-star i"></i>
                      <i className="fas fa-star i"></i>
                      <i className="fas fa-star i"></i>
                    </div>
                  </div>
                </div>
                <p className="p">
                "With Sri Murugan Builders, dream home became a stress-free reality. Their professionalism, meticulous craftsmanship, and on-time delivery exceeded expectations. Grateful for their exceptional service and unwavering commitment to excellence."
                 </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide">
                <div className="user">
                  <img src={menp} className="img" alt="" />
                  <div className="info">
                    <h3 className="h3">Mr Santhonsh</h3>
                    <div className="stars">
                      <i className="fas fa-star i"></i>
                      <i className="fas fa-star i"></i>
                      <i className="fas fa-star i"></i>
                      <i className="fas fa-star i"></i>
                      <i className="fas fa-star i"></i>
                    </div>
                  </div>
                </div>
                <p className="p">
                "Collaborating with them on our home project was an outstanding experience. Their team fostered open communication, ensuring our ideas were not only heard but seamlessly integrated. The collaborative spirit and attention to detail resulted in a home that perfectly reflects our vision. Highly recommend for their exceptional teamwork."
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide">
                <div className="user">
                  <img src={menp} className="img" alt="" />
                  <div className="info">
                    <h3 className="h3">Mr Suhumar</h3>
                    <div className="stars">
                      <i className="fas fa-star i"></i>
                      <i className="fas fa-star i"></i>
                      <i className="fas fa-star i"></i>
                      <i className="fas fa-star i"></i>
                      <i className="fas fa-star i"></i>
                    </div>
                  </div>
                </div>
                <p className="p">
                 "I recently had the pleasure of working with this company for a construction project, and I could be more satisfied with the results. From the very beginning, their team exhibited a high level of professionalism, competence, and dedication to ensuring our project was a success."
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide">
                <div className="user">
                  <img src={menp} className="img" alt="" />
                  <div className="info">
                    <h3 className="h3">Mr Vignesh</h3>
                    <div className="stars">
                      <i className="fas fa-star i"></i>
                      <i className="fas fa-star i"></i>
                      <i className="fas fa-star i"></i>
                      <i className="fas fa-star i"></i>
                      <i className="fas fa-star i"></i>
                    </div>
                  </div>
                </div>
                <p className="p">
                "Expressing gratitude to Sri Murugan Builders for transforming our vision into reality. Thrilled with the exceptional results and eagerly anticipate future collaborations. Thank you for your outstanding craftsmanship and dedication."
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide">
                <div className="user">
                  <img src={menp} className="img" alt="" />
                  <div className="info">
                    <h3 className="h3">Mr Deepan Kumar</h3>
                    <div className="stars">
                      <i className="fas fa-star i"></i>
                      <i className="fas fa-star i"></i>
                      <i className="fas fa-star i"></i>
                      <i className="fas fa-star i"></i>
                      <i className="fas fa-star i"></i>
                    </div>
                  </div>
                </div>
                <p className="p">
                  "Having remarkable craftsmanship, delivering work of outstanding quality. Their construction process demonstrated efficiency, with meticulous attention to detail. The end product surpassed our expectations, presenting a stunning and precisely constructed building that perfectly aligns with our unique specifications."
                </p>
              </div>
            </SwiperSlide>
            {/* <SwiperSlide>
              <div className="slide">
                <div className="user">
                  <img src={img} className="img" alt="" />
                  <div className="info">
                    <h3 className="h3">Mr XXXX</h3>
                    <div className="stars">
                      <i className="fas fa-star i"></i>
                      <i className="fas fa-star i"></i>
                      <i className="fas fa-star i"></i>
                      <i className="fas fa-star i"></i>
                      <i className="fas fa-star i"></i>
                    </div>
                  </div>
                </div>
                <p className="p">
                  create a complete responsive construction firm website design
                  using html css / sass and vanilla javascript step by step.
                  create a complete responsive construction firm, interior
                  design, house builder, architecture website design tutorial
                  for beginners.
                </p>
              </div>
            </SwiperSlide> */}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

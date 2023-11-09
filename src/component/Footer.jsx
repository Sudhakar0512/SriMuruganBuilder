import React from "react";
import footbg from "../assets/footerBackGround.png";
import logo from "../assets/logo.png";
import mail from "../assets/mail.png";
import phone from "../assets/phone-call.png";
import location from "../assets/location.png";
import insta from "../assets/instagram.png";
import utube from "../assets/Youtube.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
export default function Footer() {
  return (
    <div className="footer">
      <div
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(${footbg})`,
        }}
      >
        <div className="footer-top pt-20 text-neutral-300 flex flex-row items-center ">
          <div className="footer-top-1  gap-2 text-center flex flex-col items-center font-semibold ">
            <img
              src={logo}
              className="w-20 footer-logo"
              style={{ animation: " bounce 3s infinite" }}
              alt=""
            />
            <p className="footerlogotext p">
              With a passion for exceptional timber work, we strive to achieve
              exceptional results with each product.
            </p>
          </div>

          <div className="footer-top-2 text-sm">
            <div>
              <div className="flex flex-row items-center place-items-end mb-2">
                <div className="mr-2 hover:text-orange-500">
                  <a href="https://instagram.com/srimuruganbuilders?igshid=MzRlODBiNWFlZA==">
                    <p className="p">Like us</p>
                    <p className="font-bold p">Facebook</p>
                  </a>
                </div>{" "}
                <img src={facebook} className="footer-top-2-img w-12" alt="" />
              </div>

              <div className="flex flex-row items-center place-items-end">
                <div className="mr-2 hover:text-orange-500">
                  <a href="https://instagram.com/srimuruganbuilders?igshid=MzRlODBiNWFlZA==">
                    <p className="p">Follow us</p>
                    <p className="font-bold p">Twitter</p>
                  </a>
                </div>{" "}
                <div className="m-1">
                  <img
                    src={twitter}
                    className="footer-top-2-img w-9 ml-1.5"
                    alt=""
                  />
                </div>{" "}
              </div>
            </div>

            <div>
              <div className="flex flex-row items-center place-items-start mb-2">
                {" "}
                <img src={insta} className="footer-top-2-img w-12" alt="" />
                <div className="ml-2 hover:text-orange-500">
                  <a href="https://instagram.com/srimuruganbuilders?igshid=MzRlODBiNWFlZA==">
                    <p className="p">Follow us</p>
                    <p className="font-bold p">Instagram</p>
                  </a>
                </div>
              </div>

              <div className="flex flex-row items-center place-items-start">
                {" "}
                <img src={utube} className="footer-top-2-img w-12" alt="" />
                <div className="ml-2 hover:text-orange-500">
                  <a href="https://instagram.com/srimuruganbuilders?igshid=MzRlODBiNWFlZA==">
                    <p className="p">Subscribe us</p>
                    <p className="font-bold p">You Tube</p>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-top-3  flex flex-col gap-4 text-center items-center">
            <div>
              <div className="flex items-center justify-center gap-2 font-bold">
                <img
                  src={phone}
                  className="w-5 img"
                  style={{ filter: "brightness(0) invert(1)" }}
                  alt=""
                />
                <p className="ad-head">Phone</p>
              </div>
              <p className="text-sm p">+91 9600348970 / +91 9842282655</p>
            </div>
            <div>
              <div className="flex items-center justify-center gap-2 font-bold">
                <img
                  src={mail}
                  className="w-5 img"
                  style={{ filter: "brightness(0) invert(1)" }}
                  alt=""
                />
                <div className="ad-head">Email</div>
              </div>
              <p className="footer-top-3-mail text-md p">
                gowthmcharm@gmail.com
              </p>
            </div>{" "}
            <div>
              <div className="flex items-center justify-center gap-2 font-bold">
                <img
                  src={location}
                  className="w-5 img"
                  style={{ filter: "brightness(0) invert(1)" }}
                  alt=""
                />
                <div className="ad-head">Office Address</div>
              </div>
              <p className="text-md p">
                358A/2,Mylapuram road,vayalur,palani.624618
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="footer-bottom text-white"
        style={{ background: "#262626" }}
      >
        <div>
          <p>Copyrights © 2023 All Rights Reserved</p>
          <p>Sri Murugan Builders,Vayalore</p>
        </div>
      </div>
    </div>
  );
}

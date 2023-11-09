import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactMap() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9wgpjwp",
        "template_r98gtlp",
        form.current,
        "J8y6H0MjQsIej70_Y"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert(
            "Your message has been sent! We'll get back to you as soon as we receive a response. Thank you for choosing us!"
          );
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact bg-white" id="contact">
      <section>
        <h3 className="heading" style={{ color: "black" }}>
          Contact Us
        </h3>
        <div className="contact-container">
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15689.05932172676!2d77.38988774442846!3d10.558437333236423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9c5774c081595%3A0x943fba52a8ed92f4!2sSRI%20MURUGAN%20BUILDERS!5e0!3m2!1sen!2sin!4v1696342565434!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="form-container">
            <h3 className="h3">GET IN TOUCH</h3>

            {/* <form ref={form} onSubmit={sendEmail}>
              <label>Name</label>
              <input type="text" name="user_name" />
              <label>Email</label>
              <input type="email" name="user_email" />
              <label>Message</label>
              <textarea name="message" />
              <input type="submit" value="Send" />
            </form> */}

            <form ref={form} className="contact-form" onSubmit={sendEmail}>
              <input
                type="text"
                placeholder="Enter Your Name"
                name="user_name"
                required
              />
              <input
                type="number"
                placeholder="Enter Phone Number"
                name="user_phone"
                required
              />
              <input
                type="email"
                id=""
                placeholder="Enter Your Email"
                name="user_email"
              />
              <textarea
                id=""
                cols="30"
                rows="10"
                placeholder="Write Message Here"
                name="message"
              ></textarea>
              <input type="submit" value="send" className="btn" />
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

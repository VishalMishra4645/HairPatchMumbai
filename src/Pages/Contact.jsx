import React from "react";
import "../style/Contact.css";
import "../ResponsiveCSS/ContactRps.css";
import Home_Card from "./Home_Card";
import { useForm } from "react-hook-form";
import img6 from "../images/Home/offersImage1.webp";
import img7 from "../images/Home/offersImage2.webp";
import img17 from "../images/Home/footer.png";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSending },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log(data);
    reset();
  };

  return (
    <>
      <div className="contact_img">
        <h2>Contact</h2>
        <h4>
          <a href="#">Home</a>&nbsp;&nbsp;&nbsp;
          <i class="bi bi-arrow-right"></i>&nbsp;&nbsp;&nbsp;
          <span>Contact</span>
        </h4>
      </div>
      <div className="contact">
        <div className="contact_left">
          <h1>contact us</h1>
          <h2>Contact Info</h2>
          <i class="bi bi-geo-alt-fill"></i>
          <h3>
            Shop no.10, Dheeraj Heritage Residency, 1, Linking Rd, Shastri
            Nagar, Santacruz West, Mumbai, Maharashtra 400054
          </h3>
          <i class="bi bi-envelope-paper-fill"></i>
          <h3>chandanpatra1100@gmail.com</h3>
          <i class="bi bi-telephone-fill"></i>
          <h3>+918828257966</h3>
        </div>
        <div className="contact_right">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d120688.97480521917!2d72.767855!3d19.040401!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c95beee2acf3%3A0xc54a2e98bfc4c767!2sDheeraj%20Heritage%20Residency%201!5e0!3m2!1sen!2sus!4v1740667443606!5m2!1sen!2sus"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="main_contact">
        <div className="main_contact_left">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2>GET IN TOUCH</h2>
            <h3>Contact us for best Hair Therapy</h3>
            <input
              type="text"
              id="Name"
              placeholder={
                errors.Name ? "Please Enter Your Name " : "Enter Your Name"
              }
              className={
                errors.Name ? "error-placeholder" : "normal-placeholder"
              }
              {...register("Name", {
                required: {
                  value: true,
                  message: "Enter your Name",
                },
              })}
            />{" "}
            <br />
            <input
              type="text"
              id="email"
              placeholder={
                errors.email ? "Please Enter Your Email" : "Enter Your Email"
              }
              className={
                errors.email ? "error-placeholder" : "normal-placeholder"
              }
              {...register("email", {
                required: {
                  value: true,
                  message: "Enter your email",
                },
              })}
            />{" "}
            <br />
            <input
              type="number"
              id="phone"
              placeholder={
                errors.phone
                  ? "Please Enter Your Phone Number"
                  : "Enter Your Phone Number"
              }
              className={
                errors.phone ? "error-placeholder" : "normal-placeholder"
              }
              {...register("phone", {
                required: {
                  value: true,
                  message: "Enter your Number",
                },
              })}
            />{" "}
            <br />
            <input
              type="text"
              id="subject"
              placeholder={
                errors.subject ? "Please Enter Subject" : "Enter Your Subject"
              }
              className={
                errors.subject ? "error-placeholder" : "normal-placeholder"
              }
              {...register("subject", {
                required: {
                  value: true,
                  message: "Enter Subject",
                },
              })}
            />
            <textarea
              name="message"
              id="notes"
              placeholder={
                errors.notes ? "Please Enter Sum Notes" : "Enter Your Notes"
              }
              className={
                errors.notes ? "error-placeholder" : "normal-placeholder"
              }
              {...register("notes", {
                required: {
                  value: true,
                  message: "Enter Sum Notes",
                },
              })}
            ></textarea>
            <button
              type="submit"
              className={isSending ? "hoverbutton" : ""}
              disabled={isSending}
            >
              {isSending ? "Sending..." : "Send"}
            </button>
          </form>
          <h4>
            This site is protected by reCAPTCHA and the Google{" "}
            <a href="https://policies.google.com/privacy">Privacy Policy</a> and{" "}
            <a href="https://policies.google.com/terms">Terms of Service</a>{" "}
            apply.
          </h4>
        </div>
        <div className="main_contact_right">
          <img src={img7} className="img2" />
          <img src={img6} className="img1" />
        </div>
      </div>

      <Home_Card />
    </>
  );
};

export default ContactUs;

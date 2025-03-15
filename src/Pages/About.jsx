import React from "react";
import "../style/About.css";
import "../ResponsiveCSS/AboutRps.css";
import Home_Card from "./Home_Card";
import img1 from "../images/About/img2.webp";

const AboutUs = () => (
  <>
    <div className="about" id="about">
        <h1>About Us</h1>
        <h4>
          <a href="#">Home</a>&nbsp;&nbsp;&nbsp;
          <i class="bi bi-arrow-right"></i>&nbsp;&nbsp;&nbsp;
          <span>About Us</span>
        </h4>
    </div>
    <div className="about_main_container">
      <div className="about_container1">
        <img src={img1} />
      </div>
      <div className="about_container2">
        <p>
          For a quarter-century, Hercovits hair studio has been synonymous with
          transforming lives through impeccable hair fixing services across
          India. With an unwavering commitment to customer satisfaction and a
          passion for delivering smiles, we’ve consistently set the benchmark in
          the industry. <br /> <br /> Driven by innovation and personalized
          care, our team of experts is dedicated to addressing every hair
          concern with precision and compassion. As we look towards the future,
          our pledge remains unchanged: to continue elevating the standard of
          hair fixing, ensuring every individual walks away not just with
          restored hair but with renewed confidence and empowerment. Join us in
          celebrating 25 years of excellence and trust, as we pave the way for a
          future where every hair dilemma is met with unparalleled expertise and
          care.
        </p>
      </div>
    </div>

  <Home_Card />
  </>
);

export default AboutUs;

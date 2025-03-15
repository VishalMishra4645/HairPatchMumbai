import React from "react";
import "../style/Home_Card.css";
import img17 from "../images/Home/footer.png";


const Home_Card = () => {
  return (
    <>
      {/* -----------------------------------------------footer_logo------------------------------------------ */}

      <div className="footer">
        <div className="footer_logo">
          <img src={img17} />
          <h5>
            Hercovits hair studio india’s #1 hair patch service trusted since
            last 25 years
          </h5>
        </div>

        {/* ----------------------------------------------footer---usefulLink--------------------------------------- */}

        <div className="usefulLink">
          <h2>Useful Link</h2>
          <a href="#">
            <i class="bi bi-check"></i>&nbsp;&nbsp;Home
          </a>
          <br />
          <br />
          <a href="#">
            <i class="bi bi-check"></i>&nbsp;&nbsp;About Us
          </a>
          <br />
          <br />
          <a href="#">
            <i class="bi bi-check"></i>&nbsp;&nbsp;home_services
          </a>
          <br />
          <br />
          <a href="#">
            <i class="bi bi-check"></i>&nbsp;&nbsp;FAQ
          </a>
          <br />
          <br />
          <a href="#">
            <i class="bi bi-check"></i>&nbsp;&nbsp;Blog
          </a>
          <br />
          <br />
          <a href="#">
            <i class="bi bi-check"></i>&nbsp;&nbsp;Contact
          </a>
          <br />
          <br />
        </div>

        {/* ----------------------------------------------footer_home_services---------------------------------------- */}

        <div className="footer_home_services">
          <h3>home_services</h3>
          <a href="#">
            <i class="bi bi-check"></i>&nbsp;&nbsp;Non Surgical Hair Replacement
          </a>
          <br />
          <br />
          <a href="#">
            <i class="bi bi-check"></i>&nbsp;&nbsp;Hair Patch For Men
          </a>
          <br />
          <br />
          <a href="#">
            <i class="bi bi-check"></i>&nbsp;&nbsp;Hair Wigs For Men
          </a>
          <br />
          <br />
          <a href="#">
            <i class="bi bi-check"></i>&nbsp;&nbsp;Crown Area Patch
          </a>
          <br />
          <br />
          <a href="#">
            <i class="bi bi-check"></i>&nbsp;&nbsp;Front Hairline Patch
          </a>
          <br />
          <br />
          <a href="#">
            <i class="bi bi-check"></i>&nbsp;&nbsp;Australian Mirage Hair Patch
          </a>
          <br />
          <br />
          <a href="#">
            <i class="bi bi-check"></i>&nbsp;&nbsp;Swiss Lace Hair Patch
          </a>
          <br />
          <br />
        </div>

        {/* --------------------------------------------------footer_home_services02----------------------------------------

        // <div className="footer_home_services02">
        //   <a href="#">
        //     <i class="bi bi-check"></i>&nbsp;&nbsp;Customized Hair Systems
        //   </a>
        //   <br />
        //   <br />
        //   <a href="#">
        //     <i class="bi bi-check"></i>&nbsp;&nbsp;Scalp Micropigmentation
        //   </a>
        //   <br />
        //   <br />
        //   <a href="#">
        //     <i class="bi bi-check"></i>&nbsp;&nbsp;Hair Transplant
        //   </a>
        //   <br />
        //   <br />
        //   <a href="#">
        //     <i class="bi bi-check"></i>&nbsp;&nbsp;Hair Replacement
        //     home_services
        //   </a>
        //   <br />
        //   <br />
        //   <a href="#">
        //     <i class="bi bi-check"></i>&nbsp;&nbsp;Hair Replacement Training
        //   </a>
        //   <br />
        //   <br />
        //   <a href="#">
        //     <i class="bi bi-check"></i>&nbsp;&nbsp;Common Questions
        //   </a>
        //   <br />
        //   <br />
        //   <a href="#">
        //     <i class="bi bi-check"></i>&nbsp;&nbsp;Hair Replacement In Mumbai
        //   </a>
        //   <br />
        //   <br />
        // </div> */}

        {/* -----------------------------------------------------footer_contact---------------------------------------- */}

        <div className="footer_contact">
          <h2>Contact</h2>
          <i class="bi bi-geo-alt-fill"></i>
          <h3>
            Shop no.10, Dheeraj Heritage Residency, 1, Linking Rd, Shastri
            Nagar, Santacruz West, Mumbai, Maharashtra 400054
          </h3>
          <i class="bi bi-envelope-paper-fill"></i>
          <h4>chandanpatra1100@gmail.com</h4>
          <i class="bi bi-telephone-fill"></i>
          <h5>+918828257966</h5>
        </div>
      </div>

      {/* ----------------------------------------------------------All rights reserved------------------------------------     */}

      <div className="footer_bottom">
        <h2>2024. All rights reserved.</h2>
        <div className="footer_bottom_icons">
          <span>
            <i class="bi bi-facebook"></i>
          </span>
          <span>
            <i class="bi bi-twitter-x"></i>
          </span>
          <span>
            <i class="bi bi-instagram"></i>
          </span>
        </div>
      </div>
    </>
  );
};

export default Home_Card;

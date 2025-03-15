import React from 'react'
import '../style/Services.css'
import '../ResponsiveCSS/ServicesRps.css'
import Home_Card from "./Home_Card"
import img9 from "../images/Home/services1.webp";
import img10 from "../images/Home/services2.webp";
import img11 from "../images/Home/services3.webp";
import img12 from "../images/Home/services4.webp";
import img17 from "../images/Home/footer.png";


const Services = () => {
  return (
    <>
      <div className="services" id="services">
          <h2>Services</h2>
          <h4>
            <a href="#">Home</a>&nbsp;&nbsp;&nbsp;
            <i class="bi bi-arrow-right"></i>&nbsp;&nbsp;&nbsp;
            <span>Services</span>
          </h4>
      </div>
        <h1>SERVICES</h1>
        <div className="main_services_container">
          <div className="services_container services_container1">
            <img src={img9} />
            <h1>Non Surgical Hair <br /> Fixing</h1>
            <a href="#">
              <button><i class="bi bi-whatsapp"></i>&nbsp;&nbsp;Get Now</button>
            </a>
            <a href="#">
              <button><i class="bi bi-telephone-fill"></i>&nbsp;&nbsp;Call Now</button>
            </a>
          </div>
          <div className="services_container services_container2">
            <img src={img10} />
            <h1>Hair <br />Bonding</h1>
            <a href="#">
              <button><i class="bi bi-whatsapp"></i>&nbsp;&nbsp;Get Now</button>
            </a>
            <a href="#">
              <button><i class="bi bi-telephone-fill"></i>&nbsp;&nbsp;Call Now</button>
            </a>
          </div>
          <div className="services_container services_container3">
            <img src={img11} />
            <h1>Hair <br />Extensions</h1>
            <a href="#">
              <button><i class="bi bi-whatsapp"></i>&nbsp;&nbsp;Get Now</button>
            </a>
            <a href="#">
              <button><i class="bi bi-telephone-fill"></i>&nbsp;&nbsp;Call Now</button>
            </a>
          </div>
          <div className="services_container services_container4">
              <img src={img12} />
            <h1>Hair <br />Weaving</h1>
            <a href="#">
              <button><i class="bi bi-whatsapp"></i>&nbsp;&nbsp;Get Now</button>
            </a>
            <a href="#">
              <button><i class="bi bi-telephone-fill"></i>&nbsp;&nbsp;Call Now</button>
            </a>
          </div>
        </div>

    <Home_Card />
    </>
  )
}

export default Services

import React from "react";
import "../style/Gallery.css";
import "../ResponsiveCSS/GalleryRps.css";
import Home_Card from "./Home_Card";
import img1 from "../images/Gallery/img1.webp";
import img2 from "../images/Gallery/img2.webp";
import img3 from "../images/Gallery/img3.webp";
import img4 from "../images/Gallery/img4.webp";
import img5 from "../images/Gallery/img5.webp";
import img6 from "../images/Gallery/img6.webp";
import img7 from "../images/Gallery/img7.webp";
import img8 from "../images/Gallery/img8.webp";
import img9 from "../images/Gallery/img9.webp";
import img10 from "../images/Gallery/img10.png";
import img11 from "../images/Gallery/img11.webp";
import img12 from "../images/Gallery/img12.webp";
import img17 from "../images/Home/footer.png";

const Gallery = () => {
  return (
    <>
      <div className="gallery">
        <h2>Gallery</h2>
        <h4>
          <a href="#">Home</a>&nbsp;&nbsp;&nbsp;
          <i class="bi bi-arrow-right"></i>&nbsp;&nbsp;&nbsp;
          <span>Gallery</span>
        </h4>
      </div>
      <div className="gallery_main_main_container">
        <a href="">All</a>
        <div className="main_content">
          <div className="gallery_main_container gallery_main_container1">
            <div className="gallery_container gallery_container1_01">
              <img src={img1} />
            </div>
            <div className="gallery_container gallery_container1_02">
              <img src={img2} />
            </div>
            <div className="gallery_container gallery_container1_03">
              <img src={img3} />
            </div>
            <div className="gallery_container gallery_container1_04">
              <img src={img4} />
            </div>
          </div>
          <div className="gallery_main_container gallery_main_container2">
            <div className="gallery_container gallery_container2_01">
              <img src={img5} />
            </div>
            <div className="gallery_container gallery_container2_02">
              <img src={img6} />
            </div>
            <div className="gallery_container gallery_container2_03">
              <img src={img7} />
            </div>
            <div className="gallery_container gallery_container2_04">
              <img src={img8} />
            </div>
          </div>
          <div className="gallery_main_container gallery_main_container3">
            <div className="gallery_container gallery_container3_01">
              <img src={img9} />
            </div>
            <div className="gallery_container gallery_container3_02">
              <img src={img10} />
            </div>
            <div className="gallery_container gallery_container3_03">
              <img src={img11} />
            </div>
            <div className="gallery_container gallery_container3_04">
              <img src={img12} />
            </div>
          </div>
        </div>
      </div>

  <Home_Card />
    </>
  );
};

export default Gallery;

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MultipleItems() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slider slider1">
          <h5>Mr.kadam</h5>
          <div className="slider_pera1 slider1_pera">
            <p><i>
              It is really a pleasant experience. The management and staff here
              take care of the clients very well. And most importantly planning
              is very good at working I really like the service</i>
            </p>
            <div className="slider_pera slider2_pera"></div>
          </div>
        </div>
        <div className="slider slider2">
          <h5>Hiren Shanghvi</h5>
          <div className="slider_pera1 slider3_pera">
            <p>
              <i>Excellent, I was looking for good place for Hair styling in
              Mumbai, Chandan is excellent and styles hair very well, he
              immediately understood my style and requirement, very pleased with
              his work</i>
            </p>
            <div className="slider_pera slider4_pera"></div>
          </div>
        </div>
        <div className="slider slider3">
          <h5>Debashis Das</h5>
          <div className="slider_pera1 slider5_pera">
            <p><i>
              Very nice hair studio, I have visited many studio's in different
              cities but I have found only one studio where I satisfy 100% mrs.
              chandan owner of hair studio having 20 years of experience. Great
              place</i>
            </p>
            <div className="slider_pera slider6_pera"></div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default MultipleItems;

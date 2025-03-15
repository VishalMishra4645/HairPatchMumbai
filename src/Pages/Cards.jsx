import React from "react";
import "../style/Blog.css";
import img1 from "../images/Blog/img1.png";
import img2 from "../images/Blog/img2.png";
import '../Pages/Blog'

const Cards = (props) => {
  return (
    <div className="card">
      <a href="#">
        <img src={img1} className="img" />
      </a>
      <button>BLOG</button>
      <img src={img2} className="logo" />
      <a href="#" className="a1">
        <h3>
          reasons to try clip in hair <br /> extensions {props.h3}
        </h3>
      </a>
      <p>
        Why You Should Try Clip-in Hair Extensions: Top <br /> 5 Reasons When it
        comes to looking good, we <br /> say it’s the hair that helps us the
        most. If it’s a <br /> good hair day, everything goes just fine, isn’t
        it? <br /> A good hair day gives you the confidence to <br /> work and
        play
      </p>
      <a href="#" className="a2">
        READ MORE
        <sub>
          <i class="bi bi-chevron-double-right"></i>
        </sub>
      </a>
      <hr />
      <h5>March 30, 2024</h5>
    </div>
  );
};

export default Cards;

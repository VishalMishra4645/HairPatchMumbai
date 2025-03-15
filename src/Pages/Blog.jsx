import React from "react";
import "../style/Blog.css";
import "../ResponsiveCSS/BlogRps.css";
import Home_Card from "./Home_Card";
import img17 from "../images/Home/footer.png";
import Cards from "../Pages/Cards";


const Blog = () => {
  return (
    <>
      <div className="blog_img">
        <h2>Blog</h2>
        <h4>
          <a href="#">Home</a>&nbsp;&nbsp;&nbsp;
          <i class="bi bi-arrow-right"></i>&nbsp;&nbsp;&nbsp;
          <span>Blog</span>
        </h4>
      </div>
      <div className="blog_cards">
        <h1>Blogs</h1>
        <div className="blog_card_container1">
            <Cards h3="#7"/>
            <Cards h3="#8"/>
            <Cards h3="#9"/>
        </div>
        <div className="blog_card_container2">
          <Cards h3="#10"/>
          <Cards />
        </div>  
      </div>

    <Home_Card />
    </>
  );
};

export default Blog;

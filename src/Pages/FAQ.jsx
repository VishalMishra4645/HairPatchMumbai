import React, { useState } from "react";
import "../style/FAQ.css";
import '../ResponsiveCSS/FAQRps.css'
import Home_Card from "./Home_Card";
import { question } from "../Pages/FAQ_Question";
import img2 from "../images/Home/image1.webp";
import img17 from "../images/Home/footer.png";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (id) => {
    setActiveIndex(activeIndex === id ? null : id); // Toggle open/close
  };

  return (
    <>
      <div className="faq">
        <h2>FAQ</h2>
        <h4>
          <a href="#">Home</a>&nbsp;&nbsp;&nbsp;
          <i className="bi bi-arrow-right"></i>&nbsp;&nbsp;&nbsp;
          <span>FAQ</span>
        </h4>
      </div>

      <div className="faqitems_main">
        <h1>FAQ</h1>
        <div className="faqitems_container">
          <img src={img2} alt="FAQ" />
          <div className="main_faqitems">
            {question.map((accordion, i) => (
              <div key={i} className="faqitems">
                <article>
                  <h3 onClick={() => toggleAccordion(accordion.id)}>
                    {activeIndex === accordion.id ? (<i class="bi bi-dash"></i>) : (<i className="bi bi-plus"></i>)}&nbsp;&nbsp;{accordion.question}
                  </h3>
                </article>
                <p className={activeIndex === accordion.id ? "show" : ""}>
                  {accordion.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

    <Home_Card />
    </>
  );
};

export default FAQ;

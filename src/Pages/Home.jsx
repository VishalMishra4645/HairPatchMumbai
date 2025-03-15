import React from "react";
import "../style/Home.css";
import "../ResponsiveCSS/HomeRps.css";  
import Home_Card from "./Home_Card";
import { useForm } from "react-hook-form";
// import mp4 from '../images/Home/mp4.mp4'
import img1 from "../images/Home/img1.png";
import img2 from "../images/Home/image1.webp";
import img3 from "../images/Home/image2.webp";
import img4 from "../images/Home/image3.webp";
import img5 from "../images/Home/image4.webp";
import img6 from "../images/Home/offersImage1.webp";
import img7 from "../images/Home/offersImage2.webp";
import img8 from "../images/Home/offersImage3.webp";
import MultipleItems from "./MultipleItems";
import img9 from "../images/Home/services1.webp";
import img10 from "../images/Home/services2.webp";
import img11 from "../images/Home/services3.webp";
import img12 from "../images/Home/services4.webp";
import img13 from "../images/Home/result1.png";
import img14 from "../images/Home/result2.png";
import img15 from "../images/Home/result3.png";
import img16 from "../images/Home/result4.png";
import vdo from '../images/Home/1.mp4'
// import img18 from "../images/Home/TowEyeStepsRSP.webp.png";

const Home = () => {

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
      <div className="home" id="home">
        <video
          autoPlay
          loop
          muted
          src={vdo}
        ></video>
      </div>

{/* --------------------------------------------------Get The Hair You Want Today!---------------------------------- */}

      <div className="home_2nd">
        <h3>Get The Hair You Want Today!</h3>
        <img src={img1} />
        <h4>+918828257966</h4>
        <a href="https://wa.me/+918828257966" target="_blank">
          <button>
            <i class="bi bi-telephone-fill"></i>&nbsp;&nbsp;Call Now
          </button>
        </a>
      </div>

{/* -----------------------------------------------Hercovits hair studio-------------------------------------------- */}

      <div className="home_2nd_bottom">
        <h1>Hercovits hair studio</h1>
        <h2>
          <span>a</span>dd Volume, Length, Color or Coverage
        </h2>
        <h4>
          Explore an amazing selection of real human hair extensions for a
          flawlessly gorgeous and natural look.
        </h4>
      </div>

{/* ---------------------------------------------Global Leaders---------------------------------------------- */}

      <div className="home_Global">
        <div className="home_Global_left">
          <img src={img2} />
        </div>
          <div className="home_Global_left_text">
            <h1>
              The Global Leaders in Hair <br /> Renovation since 25 Years
            </h1>
            <p>
              For the past two and a half decades, we have been dedicated to
              providing unparalleled service and innovation in hair
              extensions, hair patches, and hair weaving. It’s been a
              journey marked by passion, creativity, and a commitment to
              our clients’ satisfaction. We extend heartfelt gratitude to 
              our loyal customers, whose trust
              and support have been the cornerstone of our success.
              <br /><br />As we look ahead to the future, we reaffirm our
              dedication to pushing boundaries and setting new standards
              of excellence in
              hair care.
            </p>
          </div>
      </div>

{/* ---------------------------------------------Hair Extension---------------------------------------------------- */}

      <div className="hair_extension">
        <div className="hair_extension_left">
          <h1>HAIR EXTENSION</h1>
          <p>
            Hair extensions are a popular way to add length, volume, and
            dimension to your hair without the commitment of a permanent
            change. Whether you’re looking to try a new hairstyle, add
            length to short hair, or just want to switch up your look, 
            hair extensions are a versatile option that can…
          </p>
          <a href="contact-us">
            <button>Get Offer Now</button>
          </a>
        </div>
        <div className="hair_extension_right">
          <img src={img3} />
        </div>
      </div>

{/* -------------------------------------------------Hai Replacement------------------------------------------- */}

      <div className="hair_replacement">
        <div className="hair_replacement_left">
          <img src={img4} />
        </div>
        <div className="hair_replacement_right">
          <h1>HAIR REPLACEMENT</h1>
          <p>
            Hair replacement is a non surgical hair restoration procedure 
            which is the latest and most advanced method used among the 
            non surgical hair restoration. In this procedure the hair unit are
            customised to match the client’s existing hair colour, pattern and
            hair density so that the unit blends seamlessly, The Hair unit is
            then placed…
          </p>
          <a href="contact-us">
            <button>Get Offer Now</button>
          </a>
        </div>
      </div>

{/* ----------------------------------------------Hair Patch------------------------------------------------------- */}

      <div className="hair_patch">
        <div className="hair_patch_left">
          <h1>HAIR PATCH</h1>
          <p>
            Hairs culture provides the best natural looking hair fixing 
            solutions, combining the state of the art custom made hair unit with
            this mode of attachment, we are able to deliver stunning results
            thats in par with hair replacement. Hair fixing is a non surgical
            Hair restoration procedure where a wig, Toupee or a hair piece, that
            is attached with hair clips are clipped to the clients existing hair…
          </p>
          <a href="contact-us">
            <button>Get Offer Now</button>
          </a>
        </div>
        <div className="hair_patch_right">
          <img src={img5} />
        </div>
      </div>

{/* ------------------------------------------Offers------------------------------------------- */}

      <div className="offers">
        <h1>OFFERS</h1>
        <h2>#FirSeLutegiHaryali</h2>
        <div className="offers_main_container">
          <div className="ofm offers_container_01">
            <img src={img6} />
            <div className="span">
              <h4>Save 30%</h4>
            </div>        
            <h1>HAIR PATCH</h1>     
            <span><del>₹ 10000</del>&nbsp;&nbsp;&nbsp;₹ 7000</span> <br />
            <a href="https://wa.me/+918828257966" target="_blank">
              <button><i class="bi bi-whatsapp"></i>&nbsp;&nbsp;Get Now</button>
            </a>
            <a href="https://wa.me/+918828257966" target="_blank">
              <button><i class="bi bi-telephone-fill"></i>&nbsp;&nbsp;Call Now</button>
            </a>
            <div className="ofm_bottom">
              <h2>0% EMI AVAILBLE</h2>
            </div>
          </div>
          <div className="ofm offers_container_02">
            <img src={img7} />
            <div className="span">
              <h4>Save 30%</h4>
            </div>    
            <h1>HAIR EXTENSIONS</h1>
            <h2>Starts at just ₹ 20000</h2>
            <a href="https://wa.me/+918828257966" target="_blank">
              <button><i class="bi bi-whatsapp"></i>&nbsp;&nbsp;Get Now</button>
            </a>
            <a href="https://wa.me/+918828257966" target="_blank">
            <button><i class="bi bi-telephone-fill"></i>&nbsp;&nbsp;Call Now</button>
            </a>
            <div className="ofm_bottom">
              <h2>0% EMI AVAILBLE</h2>
            </div>
          </div>
          <div className="ofm offers_container_03">
            <img src={img8} />
            <div className="span">
              <h4>Save 30%</h4>
            </div>             
            <h1>HAIR Weaving</h1> 
            <h2>Save ₹ 3000</h2>
            <a href="https://wa.me/+918828257966" target="_blank">
            <button><i class="bi bi-whatsapp"></i>&nbsp;&nbsp;Get Now</button>
            </a>
            <a href="https://wa.me/+918828257966" target="_blank">
            <button><i class="bi bi-telephone-fill"></i>&nbsp;&nbsp;Call Now</button>
            </a>
            <div className="ofm_bottom">
              <h2>0% EMI AVAILBLE</h2>
            </div>
          </div>
        </div>
      </div>

       {/* -----------------------------Two Eye Steps-------------------------  */}

      <div className="two_eye_step">
        {/* <img src={img18} /> */}
        <div className="two_eye_step_right">
          <h1>90 Mins</h1>
          <h2>Yes! that's all you need</h2>
          <h3>Get Hair Fixing solution in just 90 Mins</h3>
          <h4>Two Easy Steps</h4>
          <h5><i class="bi bi-check-circle"></i>&nbsp;&nbsp;Choose Hair Wig</h5>
          <hr />
          <h6><i class="bi bi-check-circle"></i>&nbsp;&nbsp;Choose Hair Color</h6>
          <a href="https://wa.me/+918828257966" target="_blank">
          <button><i class="bi bi-whatsapp"></i>&nbsp;&nbsp;Get Now</button>
            </a>
            <a href="https://wa.me/+918828257966" target="_blank">
            <button><i class="bi bi-telephone-fill"></i>&nbsp;&nbsp;Call Now</button>
            </a>
        </div>
      </div>

      {/* ----------------------------------------home_services--------------------------------------------- */}

      <div className="home_services">
        <h1>Services</h1>
        <div className="main_home_services_container">
          <div className="home_services_container home_services_container1">
            <img src={img9} />
            <h1>Non Surgical Hair <br /> Fixing</h1>
            <a href="https://wa.me/+918828257966" target="_blank">
            <button><i class="bi bi-whatsapp"></i>&nbsp;&nbsp;Get Now</button>
            </a>
            <a href="https://wa.me/+918828257966" target="_blank">
            <button><i class="bi bi-telephone-fill"></i>&nbsp;&nbsp;Call Now</button>
            </a>
          </div>
          <div className="home_services_container home_services_container2">
            <img src={img10} />
            <h1>Hair <br />Bonding</h1>
            <a href="https://wa.me/+918828257966" target="_blank">
            <button><i class="bi bi-whatsapp"></i>&nbsp;&nbsp;Get Now</button>
            </a>
            <a href="https://wa.me/+918828257966" target="_blank">
            <button><i class="bi bi-telephone-fill"></i>&nbsp;&nbsp;Call Now</button>
            </a>
          </div>
          <div className="home_services_container home_services_container3">
            <img src={img11} />
            <h1>Hair <br />Extensions</h1>
            <a href="https://wa.me/+918828257966" target="_blank">
            <button><i class="bi bi-whatsapp"></i>&nbsp;&nbsp;Get Now</button>
            </a>
            <a href="https://wa.me/+918828257966" target="_blank">
            <button><i class="bi bi-telephone-fill"></i>&nbsp;&nbsp;Call Now</button>
            </a>
          </div>
          <div className="home_services_container home_services_container4">
              <img src={img12} />
            <h1>Hair <br />Weaving</h1>
            <a href="https://wa.me/+918828257966" target="_blank">
            <button><i class="bi bi-whatsapp"></i>&nbsp;&nbsp;Get Now</button>
            </a>
            <a href="https://wa.me/+918828257966" target="_blank">
            <button><i class="bi bi-telephone-fill"></i>&nbsp;&nbsp;Call Now</button>
            </a>
          </div>
        </div>
      </div>
      
{/* ------------------------------------------Testimonials-------------------------------------------- */}

    <div className="main_testimonials">
      <h1>TESTIMONIALS</h1>
      <div className="testimonials">
        <MultipleItems/>
      </div>
    </div>  

{/* ----------------------------------------------Contact------------------------------------------------- */}

      <div className="home_contact">
        <div className="home_contact_left">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2>GET IN TOUCH</h2>
            <h3>Contact us for best Hair Therapy</h3>
            <input
              type="text"
              id="Name"
              placeholder={
                errors.Name ? "Please Enter Your Name " : "Name"
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
                errors.email ? "Please Enter Your Email" : "Email"
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
                  ? "Please Enter Your Phone Number" : "Phone"
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
                errors.subject ? "Please Enter Subject" : "Subject"
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
                errors.notes ? "Please Enter Sum Notes" : "Notes"
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
           <h4>This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy">Privacy Policy</a> and <a href="https://policies.google.com/terms">Terms of Service</a> apply.</h4>
        </div>
        <div className="home_contact_right">
          <img src={img7} className="img2" />
          <img src={img6} className="img1" />
        </div>
      </div>

{/* --------------------------------------------------Result--------------------------------------------- */}

      <div className="result">
        <h1>RESULT</h1>
        <div className="main_result_container">
          <div className="result_container">
            <h2>Hair Patch</h2>
            <img src={img13} alt="" />
            <a href="https://wa.me/+918828257966" target="_blank">
            <button><i class="bi bi-whatsapp"></i>&nbsp;&nbsp;Get Now</button>
            </a>
            <a href="https://wa.me/+918828257966" target="_blank">
            <button><i class="bi bi-telephone-fill"></i>&nbsp;&nbsp;Call Now</button>
            </a>
          </div>
          <div className="result_container">
            <h2>Hair Bonding</h2>
            <img src={img14} alt="" />
            <a href="https://wa.me/+918828257966" target="_blank">
            <button><i class="bi bi-whatsapp"></i>&nbsp;&nbsp;Get Now</button>
            </a>
            <a href="tel:+919623072602">
              <button><i class="bi bi-telephone-fill"></i>&nbsp;&nbsp;Call Now</button>
            </a>
          </div>
          <div className="result_container">
            <h2>Hair Weaving</h2>
            <img src={img15} alt="" />
            <a href="https://wa.me/+918828257966" target="_blank">
            <button><i class="bi bi-whatsapp"></i>&nbsp;&nbsp;Get Now</button>
            </a>
            <a href="https://wa.me/+918828257966" target="_blank">
            <button><i class="bi bi-telephone-fill"></i>&nbsp;&nbsp;Call Now</button>
            </a>
          </div>
          <div className="result_container result_container1">
            <h2>Hair Extension</h2>
            <img src={img16} alt="" />
            <a href="https://wa.me/+918828257966" target="_blank">
            <button><i class="bi bi-whatsapp"></i>&nbsp;&nbsp;Get Now</button>
            </a>
            <a href="https://wa.me/+918828257966" target="_blank">
            <button><i class="bi bi-telephone-fill"></i>&nbsp;&nbsp;Call Now</button>
            </a>
          </div>
        </div>
      </div>
      <Home_Card />
    </>
  );

};

export default Home;

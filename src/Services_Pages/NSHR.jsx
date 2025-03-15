import React from "react";
import "../Services_css/NSHR.css";
import img1 from "../Services_img/NSHR/img1.webp";
import img2 from "../Services_img/NSHR/img2.webp";
import img3 from "../Services_img/NSHR/img3.webp";
import img4 from "../Services_img/NSHR/img4.webp";
import img5 from "../Services_img/NSHR/img5.webp";
import img6 from "../Services_img/NSHR/img6.webp";
import img7 from "../Services_img/NSHR/img7.webp";
import img8 from "../Services_img/NSHR/img8.webp";
import img9 from "../Services_img/NSHR/img9.webp";
import img10 from "../Services_img/NSHR/img10.webp";
import img11 from "../Services_img/NSHR/img11.webp";

const NSHR = () => {
  return (
    <>
      <div className="NSHR">
        <div className="NSHR_left">
          <h1>
            Non-Surgical <br />
            Hair_loss Replacement
          </h1>
          <p>
            100% Human Hair_loss implanted <br />
            strand by strand to a base,
            <br /> which is the attached to your
            <br /> hair_lossloss area with help of
            <br /> Medicated glue, tapes or clips.
          </p>
          <button>GET A CONSULTATION</button>
        </div>
        <div className="NSHR_right">
          <img src={img1} />
        </div>
      </div>
      <div className="NSHR_main_div">
        {/* -----------------------------------------------About_top--------------------------------------------------- */}

        <div className="About">
          <div className="About_top">
            <div className="About_top_left">
              <h2>
                About Non Surgical <br /> Hair_loss Systems
              </h2>
              <hr />
            </div>
            <div className="About_top_right">
              <img src={img2} />
            </div>
          </div>

          {/* ---------------------------------------------------About_bottom------------------------------------------------ */}

          <div className="About_bottom">
            <div className="About_bottom_text">
              <h1>Types of Non-Surgical Hair_loss Systems</h1>
              <h3>
                There are 3 types of non-surgical hair_loss systems. They differ
                in their methods of application: <br />
                <br />
                <span className="span1">
                  1. Stick on (the top area of the head needs to be shaved){" "}
                  <br />
                  2. Full Clip on <br />
                  3. Combination (Sides & Back Clip) + (Front Tape)
                </span>
              </h3>
              <h1>Read more about: </h1>
              <h3>
                <span className="span2">
                  Stick on Systems <br />
                  <br />
                  Clip on Systems <br />
                  <br />
                  Combination Systems <br />
                  <br />
                </span>
              </h3>
              <h1>Designing a Non-Surgical Hair_loss System</h1>
              <p>
                Designing a non-surgical hair_loss system is the most important
                step in the entire non-surgical hair_loss replacement process.
                The expert handling your case must match the hair_loss texture,
                volume and color of the system to your natural hair_loss to make
                sure that the system looks realistic & fashionable, and blends
                well with your natural hair_loss. <br />
                <br />
                The secret to designing the perfect hair_loss system requires
                the understanding your desired look, choose the appropriate base
                for the hair_loss system — and choosing a system suiting your
                lifestyle. The time & energy you are willing to invest to
                maintain the hair_loss system will also affect the choice of a
                hair_loss system.
              </p>
              <h1>Maintenance of Non-Surgical Hair_loss Systems</h1>
              <h3>
                <ul>
                  <li>Stick-on: Servicing is required every 20 to 30 days.</li>
                </ul>
              </h3>
              <h3>
                <ul>
                  <li>
                    Clip-on: Needs basic shampoo, conditioning and styling (Do
                    it yourself)
                  </li>
                </ul>
              </h3>
              <h5>
                *All our hair_loss systems are made of 100% Human hair_loss
              </h5>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------Hair_loss Systems--------------------------------------------------- */}

        <div className="benefits_main">
          <div className="benefits_top">
            <div className="benefits_left">
              <h2>
                Benefits Non Surgical <br /> Hair Systems
              </h2>
              <hr />
            </div>
            <div className="benefits_right">
              <img src={img3} />
            </div>
          </div>

          {/* ------------------------------------------benefits_bottom -----benefits_bottom_left---------------------------------   */}

          <div className="benefits_bottom">
            <div className="benefits_bottom_left">
              <ul>
                <li>Self confidence</li>
              </ul>
              <p>
                Hair_loss loss can be very defeating for a man’s
                self-confidence. At American <br /> Hair_lossline, we believe
                every man deserves to feel good about himself. We do <br /> our
                best to design solutions that will help you regain your
                confidence.
              </p>
              <ul className="ul2">
                <li>No Pain/No Bleeding</li>
              </ul>
              <p>
                Unlike surgical methods, there is no pain and discomfort after
                the <br /> procedure. There is no bleeding or any form of
                medication prescribed in the <br /> non-surgical method.
              </p>
              <ul className="ul3">
                <li>No Side Effects</li>
              </ul>
              <p>
                At American Hair_lossline, we care about our customers. We only
                use medical- <br /> grade adhesives to attach the systems which
                are bacteria resistant and <br /> extremely safe.
              </p>

              {/* -------------------------------------------------benefit_bottom-bottom------------------------------------- */}

              <div className="benefit_bottom_bottom">
                <h1>Cons:</h1>
                <ul>
                  <li>
                    Non-surgical hair_loss systems need to be changed 2 to 3
                    times a year.
                  </li>
                </ul>
                <ul>
                  <li>
                    If you have chosen the stick-on method, your system will
                    require servicing every 20-30 days
                  </li>
                </ul>
              </div>
            </div>

            {/* ---------------------------------------------------benefits_bottom_right---------------------------------------- */}

            <div className="benefits_bottom_right">
              <h2>Pros:</h2>
              <ul className="ul4">
                <li>It’s Reversible</li>
              </ul>
              <p>
                If you decide that you are no longer interested in wearing your
                hair_loss <br /> replacement system, you can simply have it
                removed. There is no <br /> permanent commitment — you are
                always in control.
              </p>
              <ul className="ul5">
                <li>Get The Density You Desire</li>
              </ul>
              <p>
                With non-surgical hair_loss systems, you can achieve the density
                you desire; <br /> since the system is not dependent on your
                natural hair_loss density. This is not <br /> the case with
                Surgical methods of hair_loss replacement.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------Hair_loss Loss-------------------------------------------------- */}

      <div className="hair_loss_top">
        <div className="hair_loss_top_left">
          <h2>
            The Hair Loss <br /> Journey of a Man
          </h2>
          <hr />
        </div>
        <div className="hair_loss_top_right">
          <img src={img4} />
        </div>
      </div>
      <div className="hair_loss_bottom">
        <div className="hair_loss_bottom_left">
          <p>
            Let us follow the journey of Ajay, a business man from Hyderabad.
          </p>
          <p>
            1. Ajay always had a thick, vibrant head of hair. until he began
            experiencing hair loss between the ages of 25-35.
          </p>
          <p>
            2. In the early stages of his hair loss, he tried various shampoos
            based on what he could find on the internet, or what was recommended
            to him by friends — but nothing works.
          </p>
          <p>
            3. After much consideration, he approaches a doctor for his hair
            loss. The doctor suggests some topical lotions and tablets.
          </p>
          <p>
            4. Ajay follows his treatment plan diligently. Unfortunately — to no
            avail. His hair density does not increase and the hair loss remains
            the same, if not worse.
          </p>
        </div>
        <div className="hair_loss_bottom_right">
          <p>
            5. His last hope is treatments like mesoscalp, PRP treatments and
            similar approaches. But it does not give him the results he desires.
            (These can only control 10% of the hairloss which is negligible).
          </p>
          <p>
            6. Having tried everything, he considers a hair transplant, but
            decides it’s not the best fit for him. (In most cases, transplant
            cannot drastically increase hair density — it can just fill up the
            gap. Also, the existing hair continues to fall over a period of
            time, taking you back to square one.)
          </p>
          <p>
            7. After all of his troubles, Ajay is left with only one option —
            Non-Surgical Hair Replacement, a non-invasive procedure which gives
            you guaranteed results.
          </p>
          <p>
            Is the hair system detectable? If designed the right way, the hair
            system is not detectable at all.
          </p>
        </div>
      </div>

      {/* -------------------------------------------------------order Hair System-------------------------------------       */}

      <div className="order_hair_system_main">
        <div className="order_hair_system_top">
          <div className="order_hair_system_top_left">
            <h2>
              How do i order
              <br />
              my Hair System?
            </h2>
            <hr />
          </div>
          <div className="order_hair_system_top_right">
            <img src={img5} />
          </div>
        </div>
        <div className="order_hair_system_mid">
            <h2>For People from Mumbai</h2>
            <div className="order_hair_system_mid_bottom">
          <div className="order_hair_system_mid_left">
            <ul className="ul1">
              <li>Book a consultation with us.</li>
            </ul>
            <ul>
              <li>Visit our centre In Khar West.</li>
            </ul>
            <ul>
              <li>Clear up all your doubts about the process with us in person</li>
            </ul>
            <ul>
              <li>Your sample and mould will be taken.</li>
            </ul>
            <ul>
              <li>After this, your order will be successfully placed!</li>
            </ul>
          </div>
          <div className="order_hair_system_mid_right">
              <button className="btn1">Book a Consulation</button> <br />
              <button className="btn2">Google Map Location</button>
          </div>
          </div>
        </div>
        <div className="order_hair_system_bottom">
            <h2>For People from Mumbai</h2>
            <div className="order_hair_system_bottom_bottom">
          <div className="order_hair_system_bottom_left">
            <ul className="ul1">
              <li>Book a consultation with us.</li>
            </ul>
            <ul>
              <li>Visit our centre In Khar West.</li>
            </ul>
            <ul>
              <li>Clear up all your doubts about the process with us in person</li>
            </ul>
            <ul>
              <li>Your sample and mould will be taken.</li>
            </ul>
            <ul>
              <li>After this, your order will be successfully placed!</li>
            </ul>
          </div>
          <div className="order_hair_system_bottom_right">
              <button className="order_hair_system_bottom_right_btn1">Book a Consulation</button> <br />
              <button className="order_hair_system_bottom_right_btn2">Google Map Location</button>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NSHR;

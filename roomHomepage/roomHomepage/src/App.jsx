import "./Homepage.moudle.css";
import topLeftImage from "./assets/desktop-image-hero-1.jpg";
import topLeftImage2 from "./assets/desktop-image-hero-2.jpg";
import topLeftImage3 from "./assets/desktop-image-hero-3.jpg";
import bottomLeftImage from "./assets/image-about-dark.jpg";
import bottomRightImage from "./assets/image-about-light.jpg";
import left from "./assets/icon-angle-left.svg";
import right from "./assets/icon-angle-right.svg";
import arrow from "./assets/icon-arrow.svg";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const [pageState, SetPageState] = useState(0);
  const handleDecrement = () => {
    if (pageState > 0) {
      SetPageState(pageState - 1);
    }
  };
  const handleIncrement = () => {
    if (pageState < 2) {
      SetPageState(pageState + 1);
    }
  };

  const copy = [
    {
      heading: "Discover innovative ways to decorate",
      subheading:
        "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    },
    {
      heading: "Manufactured with the best materials",
      subheading:
        "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office. ",
    },
    {
      heading: "Discover innovative ways to decorate",
      subheading:
        "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    },
  ];

  return (
    <div className="home">
      <Navbar />
      <div className="bodyContainer">
        <section className="topSection">
          {pageState === 0 ? (
            <span className="imagegrp">
              <img className="image" src={topLeftImage}></img>
              <div className="btngrp2">
                <button className="pagebtn" onClick={handleDecrement}>
                  <img src={left}></img>
                </button>
                <button className="pagebtn" onClick={handleIncrement}>
                  <img src={right}></img>
                </button>
              </div>
            </span>
          ) : null}
          {pageState === 1 ? (
            <span className="imagegrp">
              <img className="image" src={topLeftImage2}></img>
              <div className="btngrp2">
                <button className="pagebtn" onClick={handleDecrement}>
                  <img src={left}></img>
                </button>
                <button className="pagebtn" onClick={handleIncrement}>
                  <img src={right}></img>
                </button>
              </div>
            </span>
          ) : null}
          {pageState === 2 ? (
            <span className="imagegrp">
              <img className="image" src={topLeftImage3}></img>
              <div className="btngrp2">
                <button className="pagebtn" onClick={handleDecrement}>
                  <img src={left}></img>
                </button>
                <button className="pagebtn" onClick={handleIncrement}>
                  <img src={right}></img>
                </button>
              </div>
            </span>
          ) : null}
          <div className="topRightInfo">
            <div className="infoBox">
              <div className="heading">{copy[pageState].heading}</div>
              <div className="subheading">{copy[pageState].subheading}</div>
              <button className="shopBtn">
                <div>SHOP NOW</div>
                <img src={arrow}></img>
              </button>
            </div>
            <div className="btngrp">
              <button className="pagebtn" onClick={handleDecrement}>
                <img src={left}></img>
              </button>
              <button className="pagebtn" onClick={handleIncrement}>
                <img src={right}></img>
              </button>
            </div>
          </div>
        </section>
        <section className="bottomSection">
          <img className="image" src={bottomLeftImage}></img>

          <div className="bottomInfo">
            <center className="infobox2">
              <div className="heading2">ABOUT OUR FURNITURE</div>
              <div className="subheading2">
                Our multifunctional collection blends design and function to
                suit your individual taste. Make each room unique, or pick a
                cohesive theme that best express your interests and what
                inspires you. Find the furniture pieces you need, from
                traditional to contemporary styles or anything in between.
                <div>
                  Product specialists are available to help you create your
                  dream space.
                </div>
              </div>
            </center>
          </div>

          <img className="image" src={bottomRightImage}></img>
        </section>
      </div>
    </div>
  );
}

export default App;

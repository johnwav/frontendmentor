import "./Homepage.moudle.css";
import topLeftImage from "./assets/desktop-image-hero-1.jpg";
import bottomLeftImage from "./assets/image-about-dark.jpg";
import bottomRightImage from "./assets/image-about-light.jpg";
import arrow from "./assets/icon-arrow.svg";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="home">
      <Navbar />
      <div className="bodyContainer">
        <section className="topSection">
          <img src={topLeftImage}></img>
          <div className="topRightInfo">
            <div className="infoBox">
              <div className="heading">
                Discover innovative ways to decorate
              </div>
              <div className="subheading">
                We provide unmatched quality, comfort, and style for property
                owners across the country. Our experts combine form and function
                in bringing your vision to life. Create a room in your own style
                with our collection and make your property a reflection of you
                and what you love.
              </div>
              <button className="shopBtn">
                <div>SHOP NOW</div>
                <img src={arrow}></img>
              </button>
            </div>
          </div>
        </section>
        <section className="bottomSection">
          <img src={bottomLeftImage}></img>
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
          <img src={bottomRightImage}></img>
        </section>
      </div>
    </div>
  );
}

export default App;

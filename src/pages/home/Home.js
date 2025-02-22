import React from "react";
import "./Home.scss";
import Button from "../../comp/button/Button";
import hero_image from "../../assets/hero_section.webp";
import About from "../about/About";
import ChooseUs from "../whychooseus/ChooseUs";
import Blog from "../blog/Blog";
import BeforeFooter from "../../comp/beforefooter/BeforeFooter";
import Courses from "../courses/Courses";
import VideoSection from "../../comp/videosection/VideoSection";
import Gallery from "../gallery/Gallery";
import Contact from "../contact/Contact";
import Inspiration from "../inspiration/Inspiration";
const Home = () => {
  return (
    <>
      <div class="home_parent parent">
        <div class="home_cont cont">
          <div class="right">
            <p className="tagline">
              <span></span>
              Certified Yoga Instructor | 8+ Years Experience
            </p>
            <h2>
            Find balance, Breathe better <br /> <span>Live healthier</span>
            </h2>
            <p>
            Transforming lives through Yoga, Meditation, and Mindfulness. Helping individuals build strength, flexibility, and inner peace.
            </p>

            <Button text="Contact Us" link="/contact" />
          </div>
          <div class="left">
            <img src={hero_image} alt="" />
          </div>
        </div>

        <div class="path">
          <div class="overlay bg-img-cover"></div>
        </div>

        <div class="leaf_image bg-img-contain"></div>
        <div class="leaf_image2 bg-img-contain"></div>
      </div>
      {/* <VideoSection /> */}

      <About />
      <ChooseUs />
      <Gallery />
      {/* <Courses /> */}
      <Inspiration />
      <Blog />
    <Contact />
      {/* <BeforeFooter /> */}
    </>
  );
};

export default Home;

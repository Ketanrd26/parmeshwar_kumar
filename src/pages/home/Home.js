import React from "react";
import "./Home.scss";
import Button from "../../comp/button/Button";
import hero_image from "../../assets/hero_section.webp";
import About from "../about/About";
import ChooseUs from "../whychooseus/ChooseUs";
import Blog from "../blog/Blog";
const Home = () => {
  return (
    <>
      <div class="home_parent parent">
        <div class="home_cont cont">
          <div class="right">
            <p className="tagline">
              <span></span>
              Lorem ipsum dolor sit amet.
            </p>
            <h2>
              Lorem ipsum dolor <br /> <span>sit amet.</span>
            </h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Architecto dolores itaque est eius perferendis, molestias quae
              quis suscipit quo reprehenderit!
            </p>

            <Button text="Contact Us" link="/contact-us" />
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

      <About />
      <ChooseUs />
      <Blog />
     
    </>
  );
};

export default Home;

import React from "react";
import "./Home.scss";
import Button from "../../comp/button/Button";

import hero_image from "../../assets/hero_section.webp";
const Home = () => {
  return (
    <>
      <div class="home_parent parent">
        <div class="home_cont cont">
          <div class="right">
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
      </div>
    </>
  );
};

export default Home;

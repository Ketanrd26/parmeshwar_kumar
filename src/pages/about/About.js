import React from "react";
import "./About.scss";
import Button from "../../comp/button/Button";
import about from "../../assets/about.jpg";

function About() {
  return (
    <>
      <div className="parent about-parent" id="about">
        <div className="cont about-cont">
          <div className="about-left">
            <p className="tagline">
              <span></span>
              About Us
            </p>
            <h2 >
              Hi ,I'm <br /> <span>Parmeshwar Kumar</span>
            </h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Architecto dolores itaque est eius perferendis, molestias quae
              quis suscipit quo reprehenderit! Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Architecto dolores itaque est eius
              perferendis, molestias quae quis suscipit quo reprehenderit! Lorem
              ipsum dolor sit, amet consectetur adipisicing elit. Architecto
              dolores itaque est eius perferendis, molestias quae quis suscipit
              quo reprehenderit! Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Architecto dolores itaque est eius perferendis,
              molestias quae quis suscipit quo reprehenderit!
            </p>
            <Button text="Contact Us" link="/contact" />
          </div>
          <div className="about-right bg-img-cover">
            <img src={about} />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;

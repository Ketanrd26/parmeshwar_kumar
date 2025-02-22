import React from "react";
import "./About.scss";
import Button from "../../comp/button/Button";
import about from "../../assets/gallery/about.webp";

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
              I am a creative Yoga Instructor with 08+ years of Yoga
              teaching experience, holding a degree Master’s in Yogashastra from
              Kavikulaguru Kalidas Sanskrit University Nagpur.
              I working as a YOGA INSTRUCTOR at Residency Club Pune, a Visiting
              Faculty for YOGA and MEDITATION in Cusrow Wadia Institute of Technology
              Pune.Expertise in various Yoga styles, Mindfulness practices and Meditation
              techniques, providing a holistic approach to well-being.
              Instructed Yoga classes for diverse groups including seniors, beginners and
              advanced practitioners tailoring each session the practitioner’s specific needs.
              I believes that positive attitude and enthusiasm are essential for practice, to
              overcome limitations and resistance.
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

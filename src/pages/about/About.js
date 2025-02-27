import React from "react";
import "./About.scss";
import Button from "../../comp/button/Button";
import about from "../../assets/gallery/about.webp";
import { Helmet } from "react-helmet";

function About() {
  return (
    <>
      <Helmet>
        <title>
          About | Experienced Yoga Instructor in Pune – Personalized Yoga &
          Meditation
        </title>
        <meta
          name="description"
          content="Discover my journey as a Yoga Instructor in Pune with 8+ years of experience. I blend traditional yoga with modern techniques to help you achieve mindfulness, strength, and flexibility."
        />
        <meta
          name="keywords"
          content="Yoga Instructor Pune, About Yoga Teacher, Yoga Classes Pune, Personalized Yoga, Mindfulness, Meditation Coach, Wellness Guide, Yoga Therapy Pune"
        />
        <link rel="canonical" href="https://parmeshwarkumar.com/" />
      </Helmet>

      <div className="parent about-parent" id="about">
        <div className="cont about-cont">
          <div className="about-left">
            <p className="tagline">
              <span></span>
              Our Story
            </p>
            <h2>
              Hi ,I'm <br /> <span>Parmeshwar Kumar</span>
            </h2>
            <p>
              I’m a passionate Yoga Instructor with over 8 years of experience,
              helping people move, breathe, and feel better. I hold a Master’s
              in Yogashastra from Kavikulaguru Kalidas Sanskrit University,
              Nagpur, and currently teach at Residency Club Pune and Cusrow
              Wadia Institute of Technology as a Visiting Faculty for Yoga &
              Meditation.
              <br />
              My approach is simple—blend traditional yoga with modern
              techniques to make it accessible for everyone, whether you’re a
              beginner, a senior, or an advanced practitioner. I believe yoga is
              more than just poses; it’s about energy, mindfulness, and breaking
              limits. With the right attitude, anyone can transform their
              practice and life. Let’s flow, grow, and breathe together!
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

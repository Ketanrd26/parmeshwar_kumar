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
import { Helmet } from "react-helmet";
const Home = () => {
  return (
    <>
      <Helmet>
        <title>
          Expert Yoga Instructor in Pune | Personalized Yoga & Meditation
          Classes
        </title>
        <meta
          name="description"
          content="Transform your well-being with personalized yoga classes in Pune. Experience 8+ years of traditional and modern yoga techniques for all levels."
        />
        <meta
          name="keywords"
          content="Yoga Instructor Pune, Yoga Classes Pune, Meditation Pune, Yoga for Beginners, Advanced Yoga, Personalized Yoga Sessions, Wellness Coach, Yoga and Mindfulness, Yoga Therapy Pune, Private Yoga Sessions"
        />
        <link rel="canonical" href="https://parmeshwarkumar.com/" />
      </Helmet>

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
              Transforming lives through Yoga, Meditation, and Mindfulness.
              Helping individuals build strength, flexibility, and inner peace.
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

      <About />
      <ChooseUs />
      <Gallery />
      {/* <VideoSection /> */}
      {/* <Courses /> */}
      <Inspiration />
      <Blog />
      <Contact />
      {/* <BeforeFooter /> */}
    </>
  );
};

export default Home;

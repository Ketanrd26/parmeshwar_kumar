import React from "react";
import "./Footer.scss";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div class="parent footer-parent ">
        <div className="f-overflow  "></div>
        <div class="cont cont-footer">
          <div class="footer-logo">
            <h2>Parmeshwar Kumar</h2>
          </div>

          <div className="about-us">
            <h3 style={{color:"white"}}>About Us</h3>
            <p>Quisuam est rui dolorem ipsum quia dolor sit amet, consectetur adipisci velit sea...</p>
          </div>
          <div class="footer-links">
            <h3 style={{color:"white"}}>Quicks Links</h3>
            <Link>Home</Link>
            <Link>About</Link>
            <Link>Courses</Link>
            <Link>Blogs</Link>
            <Link>Contact</Link>
          </div>
          <div class="social-links">
            <h3 style={{color:"white"}}>Social Links</h3>
            <div className="social">
            <FaFacebook />
            <FaInstagram />
            <RiTwitterXFill />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

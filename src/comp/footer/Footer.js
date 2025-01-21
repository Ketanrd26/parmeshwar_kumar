import React from "react";
import "./Footer.scss";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div class="parent footer-parent">
        <div class="cont cont-footer">
          <div class="footer-logo">
            <h2>Parmeshwar Kumar</h2>
          </div>
          <div class="footer-links">
            <Link>Home</Link>
            <Link>About</Link>
            <Link>Courses</Link>
            <Link>Blogs</Link>
            <Link>Contact</Link>
          </div>
          <div class="social-links">
            <FaFacebook />
            <FaInstagram />
            <RiTwitterXFill />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

import React from "react";
import "./Footer.scss";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
const Footer = () => {
  return (
    <>
      <div class="parent footer-parent ">
        <div class="cont cont-footer">
          <div class="footer-logo">
            <a href="https://wa.me/+917028997574" style={{ color: "rgba(255, 255, 255, 0.616)" }}> Developed by Wave Solutions</a>

            <h2><AiOutlineCopyrightCircle />Parmeshwar Kumar</h2>
            <div className="privacy">
              <Link to="/privacy">Privacy</Link>
              <Link to="/cookies">Cookies</Link>
            </div>
            <div className="social-icons">
              <a href="https://www.facebook.com/share/15rwp1h7FB/" target="_blank"><FaFacebook /></a>
              <a href=" https://www.instagram.com/parmeshwarkumar1846?igsh=YzljYTk1ODg3Zg==" target="_blank"><FaInstagram /></a>
              <a href="tel:+91 7620511606" target="_blank"><FaWhatsapp /></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

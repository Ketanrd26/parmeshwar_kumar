import React from "react";
import "./Footer.scss";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
const Footer = () => {
  return (
    <>
      <div class="parent footer-parent ">
        <div class="cont cont-footer">
          <div class="footer-logo">
            <h2><AiOutlineCopyrightCircle />Parmeshwar Kumar</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

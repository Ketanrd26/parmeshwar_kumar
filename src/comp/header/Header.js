import React, { useState } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const handleNavClose = () => {
    setNavOpen(false);
  };

  const links = [
    {
      link_name: "Home",
      link_path: "/",
    },
    {
      link_name: "About Us",
      link_path: "#about",
    },
    {
      link_name: "Inspiration",
      link_path: "#inspiration",
    },
    {
      link_name: "Blogs",
      link_path: "#blog",
    },
  ];

  return (
    <>
      <div class="header_parent parent">
        <div class="header-cont cont">
          <div class="logo">
            <Link to="/">Parmeshwar Kumar</Link>
          </div>
          <div class="links">
            {links.map((item, index) => (
              <a className="link" href={item.link_path} key={index}>
                <span className="nav_text">{item.link_name}</span>
              </a>
            ))}
          </div>

          <div class="hamburger-menu" onClick={() => setNavOpen(!navOpen)}>
            <span className="ham-burger">
              {" "}
              <RxHamburgerMenu className="ham-burger-icon" />
            </span>
          </div>

          <div class="button">
            <Button text="Contact Us" link="/contact" />
          </div>
        </div>
      </div>

      {/* mobile nav */}

      <div className={navOpen ? "mob-nav active" : "mob-nav"}>
        <div class="links" onClick={handleNavClose}>
          {links.map((item, index) => (
            <a className="link" href={item.link_path} key={index}>
              <span className="nav_text">{item.link_name}</span>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;

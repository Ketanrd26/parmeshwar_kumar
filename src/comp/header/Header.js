import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import Button from "../button/Button";
const Header = () => {
  const links = [
    {
      link_name: "Home",
      link_path: "/",
    },
    {
      link_name: "About Us",
      link_path: "about",
    },
    {
      link_name: "Courses",
      link_path: "course",
    },
    {
      link_name: "Blogs",
      link_path: "blog",
    },
  ];

  return (
    <>
      <div class="header_parent parent">
        <div class="header-cont cont">
          <div class="logo">
            <h2 style={{ fontSize: "32px" }}>Parmeshwar Kumar</h2>
          </div>
          <div class="links">
            {links.map((item, index) => (
              <Link className="link" to={item.link_path} key={index}>
                <span className="nav_text">{item.link_name}</span>
              </Link>
            ))}
          </div>
          <div class="button">
            <Button text="Contact Us" link="/contact-us" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

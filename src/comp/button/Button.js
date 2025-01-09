import React from "react";
import { GrYoga } from "react-icons/gr";
import { Link } from "react-router-dom";
const Button = ({text,link}) => {
  return (
    <>
      <Link class="btn"  to={link} >
        <p class="text">{text}</p>
       
        <div class="icon">
        <GrYoga />
        </div>
      </Link>
    </>
  );
};

export default Button;

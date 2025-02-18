
import React, { useState, useEffect } from "react";
import "./ScrollToTopButton.scss";
import { FaCircleUp } from "react-icons/fa6";

function ScrollToTopButton() {


  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    isVisible && (
      <div className="scroll-to-top" onClick={scrollToTop}>
        <FaCircleUp />
      </div>
    )
  );
}

export default ScrollToTopButton

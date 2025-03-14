import React from "react";
import "./Contact.scss";
import { SlLocationPin } from "react-icons/sl";
import { LiaMailBulkSolid } from "react-icons/lia";
import { MdOutlinePhone } from "react-icons/md";
import Button from "../../comp/button/Button";

function Contact() {



  const data = [
    {
      icon: <LiaMailBulkSolid />,
      name: "Mail",
      des: "paramkumarranchi@gmail.com",
    },

    {
      icon: <MdOutlinePhone />,
      name: "Mobile",
      des: "+91 7620511606",
    },
    {
      icon: <SlLocationPin />,
      name: "Address",
      des: "Survey no 213, Rajeev Nagar North, Viman Nagar, Pune, Maharashtra - 411014",
    },
  ];



  function Submit(e) {

    const formEle = document.querySelector("form");
    e.preventDefault();
    
    const formData = new FormData(formEle);
    const date = new Date().toDateString();

    formData.append("date", date)

    fetch(
      "https://script.google.com/macros/s/AKfycbzMfbQshgpO3kv8F_MyrDrFwS6xq4IL30i6XS46efWwV2vqu_hhJMWnUIVusaslZ3Ozdg/exec",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert(data);
        formEle.reset();
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Something went wrong. Please try again.");
      });
  }






  return (
    <>
      <div class="parent main-parent bg-img-cover" id="contact">
        <div class="contact-overlay bg-img-cover"></div>
        <div class="cont main-cont">
          <div className=" contact-parent">
            <div className=" contact-cont">
              <h2>Contact Us</h2>

              <div class="contact-company-info">
                {data.map((item, index) => (
                  <div class="location-main-box location-box">
                    <span className="contact-icons">{item.icon}</span>
                    <h4>{item.name}</h4>
                    <p style={{ margin: "0px" }}>{item.des}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* form */}
          <div className=" contact-parent-form">
            <div className=" contact-cont-form">
              <div className="contact-left">
                <h4 style={{ fontSize: "24px" }}>Get in touch</h4>
                <p>
                  Have questions or ready to begin your Yoga journey? Reach out today! Whether it’s flexibility, mindfulness, or overall well-being, I’m here to guide you. Let’s connect and transform together!
                </p>

                {/* form  */}
                <form class="form" onSubmit={(e) => Submit(e)}>
                  <div class="name-last">
                    <input type="text" name="fname"  id="fname" placeholder="Your Name" />

                  </div>
                  <div class="name-last">
                    <input type="text" name="contact" id="contact" placeholder="Contact " />
                    <input type="text" name="email" id="email" placeholder="Email" />
                  </div>
                  <textarea placeholder="Message" id="message" name="message" rows="4" cols="50"></textarea>
                  <div class="btn-div">
                    <Button type="submit" text="Submit" link="/contact" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;

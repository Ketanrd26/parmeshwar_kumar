import React from "react";
import "./ChooseUs.scss";
import yoga_pose from "../../assets/yoga_pose.png";
import healing_stone from "../../assets/stone.png";

function ChooseUs() {
  return (
    <>
      <div class="parent choose-us-parent">
        <div class="cont choose-us-cont">
          <div class="why-header">
            <p className="tagline">
              <span></span>
              Why Choose Us
            </p>
            <h2>
              Lessons Learned <br />
              on the Mat
            </h2>
            <p style={{ textAlign: "center", maxWidth: "85ch" }}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
              voluptate nesciunt nisi tempora eum nesciunt nisi tempora eum
              nesciunt nisi tempora eum error!
            </p>
          </div>
          <div class="why-bottom">
            <div class="why-left">
              <div class="div-div1">
                <div class="pose-name1 ">
                  <img src={healing_stone} alt="" />
                  <h3 style={{ fontSize: "30px", fontWeight: "400" }}>
                    Healing Stones
                  </h3>
                  <p>
                    Cubilia curae tortor amet ridiculus egestas sagittis tempor
                    nam
                  </p>
                </div>
              </div>
              <div class="div-div2">
                <div class="pose-name2">
                  <img src={healing_stone} alt="" />
                  <h3 style={{ fontSize: "30px", fontWeight: "400" }}>
                    Healing Stones
                  </h3>
                  <p>
                    Cubilia curae tortor amet ridiculus egestas sagittis tempor
                    nam
                  </p>
                </div>
              </div>
              <div class="div-div3">
                <div class="pose-name3 ">
                  <img src={healing_stone} alt="" />
                  <h3 style={{ fontSize: "30px", fontWeight: "400" }}>
                    Healing Stones
                  </h3>
                  <p>
                    Cubilia curae tortor amet ridiculus egestas sagittis tempor
                    nam
                  </p>
                </div>
              </div>
            </div>
            <div class="why-middle">
              <img src={yoga_pose} alt="" />
            </div>
            <div class="why-right">
            <div class="div-div-r1">
                <div class="pose-name1-r1 ">
                  <img src={healing_stone} alt="" />
                  <h3 style={{ fontSize: "30px", fontWeight: "400" }}>
                    Healing Stones
                  </h3>
                  <p>
                    Cubilia curae tortor amet ridiculus egestas sagittis tempor
                    nam
                  </p>
                </div>
              </div>

              <div class="div-div-r2">
                <div class="pose-name1-r2 ">
                  <img src={healing_stone} alt="" />
                  <h3 style={{ fontSize: "30px", fontWeight: "400" }}>
                    Healing Stones
                  </h3>
                  <p>
                    Cubilia curae tortor amet ridiculus egestas sagittis tempor
                    nam
                  </p>
                </div>
              </div>

              <div class="div-div-r3">
                <div class="pose-name1-r3 ">
                  <img src={healing_stone} alt="" />
                  <h3 style={{ fontSize: "30px", fontWeight: "400" }}>
                    Healing Stones
                  </h3>
                  <p>
                    Cubilia curae tortor amet ridiculus egestas sagittis tempor
                    nam
                  </p>
                </div>
              </div>
                
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChooseUs;

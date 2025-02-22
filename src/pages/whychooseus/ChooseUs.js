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
            <h2 style={{ textAlign: "center" }}>
              Lokah samastah sukino bhavantu
            </h2>
            <p style={{ textAlign: "center", maxWidth: "85ch" }}>
              May the entire universe
              Be filled with
              Peace, Joy, Love and Light
            </p>
          </div>
          <div class="why-bottom">
            <div class="why-left">
              <div class="div-div1">
                <div class="pose-name1 ">
                  <img src={healing_stone} alt="" />
                  <h3 style={{ fontSize: "30px", fontWeight: "400" }}>
                    Hatha Yoga
                  </h3>
                  <p style={{ textAlign: "center" }}>
                    Balance and fitness through traditional hatha yoga, discover
                    the Ancient yoga in Modern yoga style.
                  </p>
                </div>
              </div>
              <div class="div-div2">
                <div class="pose-name2">
                  <img src={healing_stone} alt="" />
                  <h3 style={{ fontSize: "30px", fontWeight: "400" }}>
                    Become Flexible
                  </h3>
                  <p style={{ textAlign: "center" }}>
                    Increase flexibility & agility, strengthens the muscles
                    & tendons reduce the risk of injury.
                  </p>
                </div>
              </div>
              <div class="div-div3">
                <div class="pose-name3 ">
                  <img src={healing_stone} alt="" />
                  <h3 style={{ fontSize: "30px", fontWeight: "400" }}>
                    Burn Extra Fat
                  </h3>
                  <p style={{ textAlign: "center" }}>
                    Reduce extra fat, learn yogic technique to maintain
                    weight and become stronger.
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
                    Breathing Techniques
                  </h3>
                  <p style={{ textAlign: "center" }}>
                    Learn powerful yogic breathing techniques and
                    find calmness, concentration, channelizing the energy, rest, rhythm,
                    repair & rejuvenation on body and mind.
                  </p>
                </div>
              </div>

              <div class="div-div-r2">
                <div class="pose-name1-r2 ">
                  <img src={healing_stone} alt="" />
                  <h3 style={{ fontSize: "30px", fontWeight: "400" }}>
                    Be Calm
                  </h3>
                  <p style={{ textAlign: "center" }}>
                    Reduce stress, “Chose peace over panic”. Improve
                    concentration.
                  </p>
                </div>
              </div>

              <div class="div-div-r3">
                <div class="pose-name1-r3 ">
                  <img src={healing_stone} alt="" />
                  <h3 style={{ fontSize: "30px", fontWeight: "400" }}>
                    Fall in Love with YOGA
                  </h3>
                  <p style={{ textAlign: "center" }}>
                    As the saying goes there is someone for
                    everyone - there is a Yoga or Exercise for everyone too, you just have to
                    search for it
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

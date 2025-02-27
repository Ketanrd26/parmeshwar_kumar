import React from "react";
import "./ChooseUs.scss";
import yoga_pose from "../../assets/hero_section.webp";
import healing_stone from "../../assets/stone.png";
import breathing from "../../assets/why-choose/Breathing.webp";
import hatya from "../../assets/why-choose/Hatha_Yoga.webp";
import flexible from "../../assets/why-choose/flexible.webp";
import calm from "../../assets/why-choose/calm.webp";
import burn_fat from "../../assets/why-choose/burn_fat.webp";
import loveWithYoga from "../../assets/why-choose/lovewithyoga.webp";

function ChooseUs() {
  return (
    <>
      <div class="parent choose-us-parent">
        <div class="cont choose-us-cont">
          <div class="why-header">
            <p className="tagline">
              <span></span>
              My Promise to You
            </p>
            <h2 style={{ textAlign: "center" }}>
              Lokah samastah sukino bhavantu
            </h2>
            <p style={{ textAlign: "center", maxWidth: "85ch" }}>
              May the entire universe Be filled with Peace, Joy, Love and Light
            </p>
          </div>
          <div class="why-bottom">
            <div class="why-left">
              <div class="div-div1">
                <div class="pose-name1 pose-name ">
                  <img src={hatya} alt="" />
                  <h3>Hatha Yoga</h3>
                  <p style={{ textAlign: "center" }}>
                    Balance and fitness through traditional hatha yoga, discover
                    the Ancient yoga in Modern yoga style.
                  </p>
                </div>
              </div>
              <div class="div-div2">
                <div class="pose-name2 pose-name">
                  <img src={burn_fat} alt="" />
                  <h3>Burn Extra Fat</h3>
                  <p style={{ textAlign: "center" }}>
                    Reduce extra fat, learn yogic technique to maintain weight
                    and become stronger.
                  </p>
                </div>
              </div>
              <div class="div-div3">
                <div class="pose-name3 ">
                  <img src={breathing} alt="" />
                  <h3 style={{ textAlign: "center" }}>Breathing Techniques</h3>
                  <p style={{ textAlign: "center" }}>
                    Learn powerful yogic breathing techniques and find calmness,
                    concentration, channelizing the energy, rest, rhythm, repair
                    & rejuvenation on body and mind.
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
                  <img src={flexible} alt="" />
                  <h3 style={{textAlign:"center"}}>Become Flexible</h3>
                  <p style={{ textAlign: "center" }}>
                    Increase flexibility & agility, strengthens the muscles &
                    tendons reduce the risk of injury.
                  </p>
                </div>
              </div>

              <div class="div-div-r2">
                <div class="pose-name1-r2 ">
                  <img src={calm} alt="" />
                  <h3>Peacefulness</h3>
                  <p style={{ textAlign: "center" }}>
                    Reduce stress, “Chose peace over panic”. Improve
                    concentration.
                  </p>
                </div>
              </div>

              <div class="div-div-r3">
                <div class="pose-name1-r3 ">
                  <img src={loveWithYoga} alt="" />
                  <h3 style={{ textAlign: "center" }}>
                    Fall in Love with YOGA
                  </h3>
                  <p style={{ textAlign: "center" }}>
                    As the saying goes there is someone for everyone - there is
                    a Yoga or Exercise for everyone too, you just have to search
                    for it
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

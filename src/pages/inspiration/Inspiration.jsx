import React from "react";
import "./Inspiration.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import image1 from "../../assets/Maharashi_Patanjali.webp";
import { Helmet } from "react-helmet";

function Inspiration() {
  const swiper_data = [
    {
      heading: "Maharshi Patanjali",
      content:
        "Maharshi Patanjali, the revered sage, is the father of Yoga and the author of the Yoga Sutras. His wisdom on discipline, self-mastery, and inner peace inspires me to approach challenges with clarity and balance. His teachings shape my journey, reminding me that progress comes through dedication and mindfulness.",
      img: image1,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Yoga Inspiration | Transform Your Mind, Body & Soul</title>
        <meta
          name="description"
          content="Find daily yoga inspiration, mindfulness insights, and motivational stories to deepen your practice. Unlock your true potential with yoga and meditation."
        />
        <meta
          name="keywords"
          content="Yoga Inspiration, Mindfulness, Yoga Motivation, Meditation Insights, Wellness Journey, Personal Growth, Yoga Lifestyle, Inner Peace, Transformative Yoga, Yoga Wisdom"
        />
        <link rel="canonical" href="https://parmeshwarkumar.com/" />
      </Helmet>

      <div className="parent inspiration-parent" id="inspiration">
        <div className="cont inspiration-container">
          <div className="inspiration-top">
            <p className="tagline">
              <span></span>
              My Inspiration
            </p>
            <h2>Explore, Learn, Grow, Inspire</h2>
            <p>
              Yoga is more than just movement—it’s a way of life. Inspired by
              ancient traditions and modern well-being, I strive to help others
              find balance, strength, and inner peace.
            </p>
          </div>

          <div className="inspiration-bottom">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={false}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              {swiper_data.map((item, index) => (
                <SwiperSlide className="inspire-box">
                  <div className="inspire-left">
                    <h3>{item.heading}</h3>
                    <p>{item.content}</p>
                  </div>
                  <div className="inspire-right">
                    <div
                      className="inspire-img-box bg-img-cover"
                      style={{ background: `url(${item.img})` }}
                    ></div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

export default Inspiration;

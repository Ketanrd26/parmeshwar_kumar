import React, { useState } from "react";


import "./Gallery.scss";

import gimg1 from "../../assets/gallery/img1.jpg";
import gimg2 from "../../assets/gallery/img2.jpg";
import gimg3 from "../../assets/gallery/img22.webp";
import gimg4 from "../../assets/gallery/img19.jpeg";
import gimg5 from "../../assets/gallery/img5.jpg";
import gimg6 from "../../assets/gallery/img6.jpg";
import gimg7 from "../../assets/gallery/img7.jpg";
import gimg8 from "../../assets/gallery/img20.jpeg";
import gimg9 from "../../assets/gallery/img15.jpeg";
import gimg10 from "../../assets/gallery/img10.jpeg";
import gimg11 from "../../assets/gallery/img11.jpg";
import gimg12 from "../../assets/gallery/img13.jpeg";
import gimg13 from "../../assets/gallery/img20.jpeg";
import gimg14 from "../../assets/gallery/img14.jpeg";
import gimg15 from "../../assets/gallery/img20.jpeg";
import gimg16 from "../../assets/gallery/img4.jpeg";
import gimg17 from "../../assets/gallery/img5.jpg";
import gimg18 from "../../assets/gallery/img18.jpeg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  Autoplay,
  Pagination,
  Navigation,
  EffectCoverflow,
} from "swiper/modules";

function Gallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const imageSlides = [
    { images: [gimg1, gimg2, gimg3, gimg4, gimg5, gimg6] },
    { images: [gimg7, gimg8, gimg9, gimg10, gimg11, gimg12] },
    { images: [gimg13, gimg14, gimg15, gimg16, gimg17, gimg18] },
  ];

  return (
    <div>
      <div className="parent gallery-parent">
        <div className="cont gallery-cont">
          <div className="gallery-top">
            <p className="tagline">
              <span></span>
              Frame & Focus
            </p>
            <h2>Explore Our Yoga Journey</h2>
            <p>
              Discover how Vinyasa Yoga energizes your body and mind through
              flowing Supportive movements and synchronized breath Supportive
              practice.
            </p>
          </div>
        </div>
      </div>
      <div className="gallery-images-parent">
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {imageSlides.map((slide, index) => (
            <SwiperSlide className="swiper-slide" key={index}>
              <div className="swiperr">
                {slide.images.map((img, imgIndex) => (
                  <img
                    key={imgIndex}
                    src={img}
                    alt={`Slide ${index * 6 + imgIndex}`}
                    onClick={() => {
                      setPhotoIndex(index * 6 + imgIndex); // ✅ Fix: Ensure correct index calculation
                      setIsOpen(true);
                    }}
                  />
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      

        {isOpen && (
          <div className="image-lightbox">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              initialSlide={photoIndex} // ✅ Fix: Directly use `photoIndex`
              loop={true}
              navigation={true} // ✅ Enable navigation properly
              modules={[EffectCoverflow, Autoplay, Navigation]}
              className="mySwiper"
              onClick={() => setIsOpen(false)}
            >
              {imageSlides
                .flatMap((slide) => slide.images)
                .map((image, index) => (
                  <SwiperSlide key={index} className="swiperslide">
                    <div
                      className="image bg-img-contain"
                      style={{ backgroundImage: `url(${image})` }} // ✅ Fix: Directly use `image`
                    ></div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        )}
      </div>
    </div>
  );
}

export default Gallery;

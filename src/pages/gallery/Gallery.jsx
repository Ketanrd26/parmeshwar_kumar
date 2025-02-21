import React, { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import "./Gallery.scss";
// import gimg1 from "../../assets/gallery/166369.jpg"
import gimg1 from "../../assets/gallery/261215.jpg";
import gimg2 from "../../assets/gallery/261215.jpg";
import gimg3 from "../../assets/gallery/261227.jpg";
import gimg4 from "../../assets/gallery/261314.jpg";
import gimg5 from "../../assets/gallery/261227.jpg";
import gimg6 from "../../assets/gallery/IMG_20240728_080520.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

function Gallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const imageSlides = [
    { images: [gimg1, gimg2, gimg3, gimg4, gimg5, gimg6] },
    { images: [gimg1, gimg2, gimg3, gimg4, gimg5, gimg6] },
    { images: [gimg1, gimg2, gimg3, gimg4, gimg5, gimg6] },
  ];

  return (
    <div>
      <div className="parent gallery-top-parent">
        <div className="cont gallery-cont">
          <div className="gallery-top">
            <p className="tagline">
              <span></span>
              Gallery
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
      <div className="parent gallery-parent">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {imageSlides.map((slide, index) => (
            <SwiperSlide className="swiper-slide" key={index}>
              <div 
               className="swiperr"
              >
                {slide.images.map((img, imgIndex) => (
                  <img
                    key={imgIndex}
                    src={img}
                    alt={img}
                    onClick={() => {
                      setPhotoIndex(index * 6 + imgIndex);
                      setIsOpen(true);
                    }}
                  />
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {isOpen && (
          <Lightbox
            mainSrc={imageSlides.flatMap((slide) => slide.images)[photoIndex]}
            nextSrc={
              imageSlides.flatMap((slide) => slide.images)[
                (photoIndex + 1) % 18
              ]
            }
            prevSrc={
              imageSlides.flatMap((slide) => slide.images)[
                (photoIndex + 17) % 18
              ]
            }
            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={() => setPhotoIndex((photoIndex + 17) % 18)}
            onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % 18)}
          />
        )}
      </div>
    </div>
  );
}

export default Gallery;

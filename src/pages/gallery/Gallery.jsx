import React, { useState } from 'react'
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import './Gallery.scss'
import gimg1 from "../../assets/g_1.jpg"
import gimg2 from "../../assets/g_2.jpg"

function Gallery() {

    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    const images = [
        gimg1, gimg2, gimg1, gimg2, gimg1, gimg2
    ]

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
                            Discover how Vinyasa Yoga energizes your body and mind through flowing Supportive movements and synchronized breath Supportive practice.
                        </p>
                    </div>
                </div>
            </div>
            <div className="parent gallery-parent">
                {images.map((item, index) => (
                    <>
                        <img
                            key={index}
                            src={item}
                            alt=""
                            onClick={() => {
                                setPhotoIndex(index);
                                setIsOpen(true);
                            }}


                        />
                    </>
                ))}

                {isOpen && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => setIsOpen(false)}
                        onMovePrevRequest={() =>
                            setPhotoIndex((photoIndex + images.length - 1) % images.length)
                        }
                        onMoveNextRequest={() =>
                            setPhotoIndex((photoIndex + 1) % images.length)
                        }
                    />
                )}
            </div>
        </div>
    )
}

export default Gallery

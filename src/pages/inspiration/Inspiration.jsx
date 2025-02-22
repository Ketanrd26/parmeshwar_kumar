import React from 'react'
import './Inspiration.scss'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import image1 from "../../assets/about.jpg";

function Inspiration() {


    const swiper_data = [
        {
            heading: "Inspiration 1",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit inventore voluptas necessitatibus, magnam quas porro labore eius nemo aspernatur repellendus Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit inventore voluptas necessitatibus, magnam quas porro labore eius nemo aspernatur repellendus",
            img: image1
        },
        {
            heading: "Inspiration 1",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit inventore voluptas necessitatibus, magnam quas porro labore eius nemo aspernatur repellendus Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit inventore voluptas necessitatibus, magnam quas porro labore eius nemo aspernatur repellendus",
            img: image1
        },
       
    ]


    return (
        <>
            <div className="parent inspiration-parent" id='inspiration'>
                <div className="cont inspiration-container">
                    <div className="inspiration-top">
                        <p className="tagline">
                            <span></span>
                            My Inspiration
                        </p>
                        <h2>Explore, Learn, Grow, Inspire</h2>
                        <p>
                        Yoga is more than just movement—it’s a way of life. Inspired by ancient traditions and modern well-being, I strive to help others find balance, strength, and inner peace.
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
                                <SwiperSlide className='inspire-box' >
                                    <div className="inspire-left">
                                        <h3>{item.heading}</h3>
                                        <p>{item.content}</p>
                                    </div>
                                    <div className="inspire-right">
                                        <div className="inspire-img-box bg-img-cover" style={{ background: `url(${item.img})` }}></div>
                                    </div>
                                </SwiperSlide>
                            ))}



                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Inspiration

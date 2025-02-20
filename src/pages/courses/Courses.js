import React from 'react'
import "./Coourses.scss"
import gif1 from "../../assets/yoga.gif";

function Courses() {


    const data = [
        {
            bgImage: gif1,
            heading: "Learn from a diverseteam of teachers",
            content: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printe."
        },
        {
            bgImage: gif1,
            heading: "Learn from a diverseteam of teachers",
            content: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printe."
        },
        {
            bgImage: gif1,
            heading: "Learn from a diverseteam of teachers",
            content: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printe."
        },
        {
            bgImage: gif1,
            heading: "Learn from a diverseteam of teachers",
            content: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printe."
        },
    ]

    return (
        <>
            <div  id="course"  className='courses-parent parent bg-img-cover'>
                <div className='courses-cont cont'>
                    <div className="course-top">
                        <p className="tagline">
                            <span></span>
                            Courses
                        </p>
                        <h2>Dive in to our Courses</h2>
                        <p style={{ textAlign: "center", maxWidth: "85ch" }}>
                            Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit
                            amet Ipsum long established fact that a reader will be distracted
                            by the readable.
                        </p>
                    </div>

                    <div className='course-bottom'>
                        {
                            data.map((item, index) => (
                                <div className="course-box">
                                    <div className='gif bg-img-cover' style={{ backgroundImage: `url${item.bgImage}` }}></div>
                                    <div className='heading-content'>
                                        <h3>{item.heading}</h3>
                                        <p>{item.content}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>

            </div>
        </>
    )
}

export default Courses

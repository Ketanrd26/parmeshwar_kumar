import React from "react";
import "./Blog.scss";
import { SlCalender } from "react-icons/sl";
import img1 from "../../assets/blog_img.jpg";
import Button from "../../comp/button/Button";
import { Helmet } from "react-helmet";
const Blog = () => {
  const data = [
    {
      img: img1,
      date: "January 12, 2025",
      title: "Yoga For better sleep and health",
      content: "when an unknown printer took a galley of type galley of type",
    },
    {
      img: img1,
      date: "January 12, 2025",
      title: "Yoga For better sleep and health",
      content: "when an unknown printer took a galley of type galley of type",
    },
    {
      img: img1,
      date: "January 12, 2025",
      title: "Yoga For better sleep and health",
      content: "when an unknown printer took a galley of type galley of type",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Yoga Blog | Tips, Techniques & Insights for a Healthier Life
        </title>
        <meta
          name="description"
          content="Explore expert yoga tips, techniques, and insights on mindfulness, meditation, and well-being. Stay updated with the latest yoga practices for a balanced and healthy life."
        />
        <meta
          name="keywords"
          content="Yoga Blog, Yoga Tips, Meditation Techniques, Mindfulness, Yoga for Beginners, Advanced Yoga, Wellness Blog, Healthy Lifestyle, Yoga Insights, Yoga Practices"
        />
        <link rel="canonical" href="https://parmeshwarkumar.com/" />
      </Helmet>

      <div className="parent blog-parent " id="blog">
        <div class="blog-overlay bg-img-cover"></div>
        <div className="cont blog-cont">
          <div className="blog-top">
            <p className="tagline">
              <span></span>
              Blog
            </p>
            <h2>Dive in to our blog</h2>
            <p>
              Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit
              amet Ipsum long established fact that a reader will be distracted
              by the readable.
            </p>
          </div>

          <div className="blog-bottom">
            {data.map((item, index) => (
              <div className="blog-box">
                <div
                  className="full-img bg-img-cover"
                  style={{ backgroundImage: `url(${item.img})` }}
                >
                  <div class="overlay"></div>
                </div>

                <div class="overlay-btn">
                  <Button link="/blog_detail" text="Read More" />
                </div>

                <div className="date">
                  <SlCalender />
                  <span>{item.date}</span>
                </div>
                <div className="below-content">
                  <h4>{item.title}</h4>
                  <p>{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;

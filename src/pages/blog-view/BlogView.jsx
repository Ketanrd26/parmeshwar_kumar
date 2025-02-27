import React from "react";
import "./BlogView.scss";
import data from "../../Data";
import { useSearchParams } from "react-router-dom";

function BlogView() {
  const [search] = useSearchParams();

  const id = search.get("blogId");
  return (
    <>
      <div className="parent blog-view-parent">
        <div className="cont cont-blog-view">
          
              <>
                <div className="image-content">
                  <div
                    className="image bg-img-cover"
                    style={{ background: `url(${data[id].img})` }}
                  ></div>
                  <div className="blogname-date">
                    <p>Blog Name : {data[id].title}</p>
                    <p>Date :{data[id].date}</p>
                  </div>
                </div>

                <div className="blog-details">
                  <h3>Blog Details</h3>
                  <p>{data[id].content}</p>
                </div>
              </>
           
        </div>
      </div>
    </>
  );
}

export default BlogView;

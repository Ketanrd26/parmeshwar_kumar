import React from "react";
import "./VideoSection.scss";
import yoga_video from "../../assets/video/yogavideo.mp4";

function VideoSection() {
  return (
    <>
      <div className="parent parent-video">
        <video
          autoPlay
          loop
          muted
          className="bg-vid"
          height="100%"
          width="100%"
        >
          <source src={yoga_video} type="video/webm" />
        </video>
      </div>
    </>
  );
}

export default VideoSection;

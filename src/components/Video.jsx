import React, { useEffect, useRef, useState } from "react";

const SingleVideoPlayer = ({ videoUrl }) => {
  const videoRef = useRef(null);
  const [isVideoPlaying, setVideoPlaying] = useState(false);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(handleIntersection, option);
    observer.observe(videoRef.current);

    return () => observer.disconnect();
  }, []);

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        setVideoPlaying(true);
        videoRef.current.play();
      } else {
        setVideoPlaying(false);
        videoRef.current.pause();
      }
    });
  };

  return (
    <div className="h-full w-full">
      <video
        className="h-full w-full absolute top-0 "
        ref={videoRef}
        src={videoUrl}
        loop
        autoPlay
        playsInline
        controls
      ></video>
    </div>
  );
};

export default SingleVideoPlayer;

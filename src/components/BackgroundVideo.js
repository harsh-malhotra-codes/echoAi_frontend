import React from 'react';

const BackgroundVideo = () => {
  return (
    <div className="video-bg" aria-hidden="true">
      <video
        className="video-bg-media"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/vid_d2_hd.mp4" type="video/mp4" />
        {/* Fallback text */}
        Your browser does not support the video tag.
      </video>
      <div className="bg-overlay" />
    </div>
  );
};

export default BackgroundVideo;

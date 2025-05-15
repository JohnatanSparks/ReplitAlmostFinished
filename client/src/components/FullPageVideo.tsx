import React, { useEffect, useRef } from 'react';

export default function FullPageVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Initialize video on component mount
    if (videoRef.current) {
      videoRef.current.play().catch(err => {
        console.error("Video playback failed:", err);
      });
    }
  }, []);

  return (
    <div className="fixed inset-0 z-[-2] pointer-events-none overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-screen object-cover"
      >
        <source src="/assets/3d abstract waves black background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-70 z-[-1]"></div>
    </div>
  );
}
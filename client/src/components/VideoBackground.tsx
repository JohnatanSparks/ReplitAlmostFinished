import React, { useRef, useEffect } from 'react';

interface VideoBackgroundProps {
  className?: string;
}

// Create a reusable video background component to ensure consistency
export default function VideoBackground({ className }: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  // When the component loads, ensure the video starts at a consistent time
  useEffect(() => {
    // Using a small timeout to ensure all videos start at nearly the same time
    // This helps with visual synchronization across multiple video instances
    const timer = setTimeout(() => {
      if (videoRef.current) {
        // Set to a specific time and play
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(err => {
          console.error("Video playback failed:", err);
        });
      }
    }, 10);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      className={`w-full h-full object-cover ${className || ''}`}
    >
      <source src="/assets/3d abstract waves black background.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
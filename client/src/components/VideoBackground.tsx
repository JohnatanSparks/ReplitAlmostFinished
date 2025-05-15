import React, { useRef, useEffect, useState } from 'react';

// Single video instance that will be shared across components
let sharedVideoInstance: HTMLVideoElement | null = null;
let isVideoPlaying = false;

interface VideoBackgroundProps {
  className?: string;
}

// Create a reusable video background component using a shared video element
export default function VideoBackground({ className }: VideoBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false);

  // Create or reuse a single video element for all instances
  useEffect(() => {
    // If this is the first instance, create the video
    if (!sharedVideoInstance) {
      sharedVideoInstance = document.createElement('video');
      sharedVideoInstance.autoplay = true;
      sharedVideoInstance.muted = true;
      sharedVideoInstance.loop = true;
      sharedVideoInstance.playsInline = true;
      sharedVideoInstance.className = 'w-full h-full object-cover';
      
      const source = document.createElement('source');
      source.src = '/assets/3d abstract waves black background.mp4';
      source.type = 'video/mp4';
      
      sharedVideoInstance.appendChild(source);
      
      // Start playback once
      if (!isVideoPlaying) {
        sharedVideoInstance.play().then(() => {
          isVideoPlaying = true;
          setIsReady(true);
        }).catch(err => {
          console.error("Video playback failed:", err);
        });
      } else {
        setIsReady(true);
      }
    } else {
      // Existing video is already playing
      setIsReady(true);
    }
    
    return () => {
      // Don't dispose the video when component unmounts
      // This ensures the video keeps playing in other components
    };
  }, []);
  
  // Clone the video for use in this specific component
  useEffect(() => {
    if (isReady && sharedVideoInstance && containerRef.current) {
      // Clone the video element so they all share the same source and time
      const clonedVideo = sharedVideoInstance.cloneNode(true) as HTMLVideoElement;
      clonedVideo.className = `w-full h-full object-cover ${className || ''}`;
      
      // Clear container and add the cloned video
      containerRef.current.innerHTML = '';
      containerRef.current.appendChild(clonedVideo);
      
      // Keep the videos in sync (jump to the original's time)
      clonedVideo.currentTime = sharedVideoInstance.currentTime;
    }
  }, [isReady, className]);

  return <div ref={containerRef} className="w-full h-full"></div>;
}
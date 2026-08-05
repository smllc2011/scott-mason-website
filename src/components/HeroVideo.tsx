"use client";

import { useRef, useState } from "react";
import { PlayIcon } from "./icons";

const VIDEO_SRC = "/videos/scott-story.mp4";
const VIDEO_POSTER = "/images/hero-video.jpg";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showPlayButton, setShowPlayButton] = useState(true);

  const handlePlay = async () => {
    const video = videoRef.current;
    if (!video) return;

    video.controls = true;

    try {
      await video.play();
      setShowPlayButton(false);
    } catch {
      setShowPlayButton(false);
    }
  };

  const handleEnded = () => {
    const video = videoRef.current;
    if (!video) return;

    video.controls = false;
    video.currentTime = 0;
    setShowPlayButton(true);
  };

  return (
    <div className="relative aspect-video bg-black">
      <video
        ref={videoRef}
        className="h-full w-full object-cover object-center"
        poster={VIDEO_POSTER}
        playsInline
        preload="metadata"
        onEnded={handleEnded}
      >
        <source src={VIDEO_SRC} type="video/mp4" />
        Your browser does not support embedded video.
      </video>

      {showPlayButton ? (
        <button
          type="button"
          className="absolute inset-0 flex items-center justify-center bg-black/25 transition-opacity hover:opacity-90"
          aria-label="Play Scott Mason's story video"
          onClick={handlePlay}
        >
          <PlayIcon className="h-16 w-16 lg:h-[4.5rem] lg:w-[4.5rem]" />
        </button>
      ) : null}
    </div>
  );
}

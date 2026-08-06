"use client";

import { useRef, useState } from "react";
import { PlayIcon } from "./icons";

type PromoVideoProps = {
  videoSrc: string;
  posterSrc: string;
  ariaLabel?: string;
  className?: string;
};

export default function PromoVideo({
  videoSrc,
  posterSrc,
  ariaLabel = "Play video",
  className = "",
}: PromoVideoProps) {
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
    <div className={`relative aspect-video bg-black ${className}`}>
      <video
        ref={videoRef}
        className="h-full w-full object-cover object-center"
        poster={posterSrc}
        playsInline
        preload="metadata"
        onEnded={handleEnded}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support embedded video.
      </video>

      {showPlayButton ? (
        <button
          type="button"
          className="absolute inset-0 flex items-center justify-center bg-black/25 transition-opacity hover:opacity-90"
          aria-label={ariaLabel}
          onClick={handlePlay}
        >
          <PlayIcon className="h-16 w-16 lg:h-[4.5rem] lg:w-[4.5rem]" />
        </button>
      ) : null}
    </div>
  );
}

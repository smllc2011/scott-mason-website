import PromoVideo from "./PromoVideo";

const VIDEO_SRC = "/videos/scott-story.mp4";
const VIDEO_POSTER = "/images/hero-video.jpg";

export default function HeroVideo() {
  return (
    <PromoVideo
      videoSrc={VIDEO_SRC}
      posterSrc={VIDEO_POSTER}
      ariaLabel="Play Scott Mason's story video"
    />
  );
}

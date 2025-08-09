import { useRef } from "react";

type VideoCardProps = {
  src: string;
};

const VideoCard = ({ src }: VideoCardProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    videoRef.current?.play();
  };

  const handleMouseLeave = () => {
    videoRef.current?.pause();
    videoRef.current!.currentTime = 0;
  };

  return (
    <video
      ref={videoRef}
      style={{ width: "100%", height: "100%" }}
      muted
      loop
      playsInline
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoCard;

import { useRef } from "react";
import { videoList } from "../../constant/videoList";

const VideoCard = () => {
  // 고유의 ref를 사용하여 각 비디오에 대한 참조를 저장
  const videoRefs = useRef<HTMLVideoElement[]>([]);

  // 마우스 올리면 비디오 재생
  const handleMouseEnter = (index: number) => {
    videoRefs.current[index].play();
  };

  // 마우스 떼면 비디오 정지
  const handleMouseLeave = (index: number) => {
    videoRefs.current[index].pause();
    videoRefs.current[index].currentTime = 0;
  };

  return (
    <>
      {videoList.map((item, index) => (
        <video
          key={index}
          ref={(el) => {
            if(el) {
              videoRefs.current[index] = el;
            }
          }}
          style={{ width: "100%", height: "100%", cursor: "pointer" }}
          muted
          loop
          playsInline
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={() => handleMouseLeave(index)}
        >
          <source src={item.src} type="video/mp4" />
        </video>
      ))}
    </>
  );
};

export default VideoCard;

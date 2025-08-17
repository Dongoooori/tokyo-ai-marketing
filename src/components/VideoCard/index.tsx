import { useRef } from "react";
import { videoList } from "../../constant/videoList";

const VideoCard = () => {
  // 고유의 ref를 사용하여 각 비디오에 대한 참조를 저장
  const videoRefs = useRef<HTMLVideoElement[]>([]);

  // 마우스 올리면 비디오 재생
  const handleMouseEnter = (index: number) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index].play().catch(e => console.log('Video play failed:', e));
    }
  };

  // 마우스 떼면 비디오 정지
  const handleMouseLeave = (index: number) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index].pause();
      videoRefs.current[index].currentTime = 0;
    }
  };

  // 터치 이벤트 처리 (모바일용)
  const handleTouchStart = (index: number) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index].play().catch(e => console.log('Video play failed:', e));
    }
  };

  const handleTouchEnd = (index: number) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index].pause();
      videoRefs.current[index].currentTime = 0;
    }
  };

  return (
    <>
      {videoList.map((item, index) => (
        <div 
          key={index}
          className="w-full h-full aspect-video rounded-lg overflow-hidden"
        >
          <video
            ref={(el) => {
              if(el) {
                videoRefs.current[index] = el;
              }
            }}
            className="w-full h-full object-cover"
            muted
            loop
            playsInline
            preload="metadata"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            onTouchStart={() => handleTouchStart(index)}
            onTouchEnd={() => handleTouchEnd(index)}
          >
            <source src={item.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ))}
    </>
  );
};

export default VideoCard;

import React from "react";
import ReactPlayer from "react-player";

interface PropType {
  src: string;
}

const VideoPlayer = (props: PropType) => {
  const { src } = props;

  return (
    <div className="w-[300px] h-[200px] md:w-[600px] md:h-[400px]">
      <ReactPlayer width="100%" height="100%" url={src} controls={true} />
    </div>
  );
};

export default VideoPlayer;

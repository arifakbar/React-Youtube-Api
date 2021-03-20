import React from "react";
import "./styles.css";
import VideoItem from "./videoItem";

const VideoList = (props) => {
  const videos = props.videos.map((video) => {
    return (
      <div key={video.id.videoId} className="video-item">
        <VideoItem video={video} onVideoSelect={props.onVideoSelect} />
      </div>
    );
  });
  return <div className="video-list">{videos}</div>;
};

export default VideoList;

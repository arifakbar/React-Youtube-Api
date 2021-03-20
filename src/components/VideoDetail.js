import React from "react";

const VideoDetail = ({ selectedVideo }) => {
  if (!selectedVideo) {
    return <div style={{ marginTop: "10px" }}>Search to see results...</div>;
  }
  return (
    <div style={{ marginTop: "10px" }}>
      <div className="video-player">
        <iframe src={ "https://www.youtube.com/embed/"+selectedVideo.id.videoId}></iframe>
      </div>
      <div className="video-description">
        <h3>{selectedVideo.snippet.title}</h3>
        <p>{selectedVideo.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;

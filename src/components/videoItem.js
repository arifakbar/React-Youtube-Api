import React from "react";

const VideoItem = (props) => {
  return (
    <div className="ui card" onClick={()=>props.onVideoSelect(props.video)}>
      <div className="ui content">
        <img
          src={props.video.snippet.thumbnails.medium.url}
          alt={props.video.snippet.description}
        />
        <h4>{props.video.snippet.title}</h4>
      </div>
    </div>
  );
};

export default VideoItem;

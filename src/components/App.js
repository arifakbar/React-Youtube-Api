import React,{useState,useEffect} from "react";
import Youtube from "../Apis/Youtube";
import VideoList from "./VideoList";
import Search from "./Search";
import VideoDetail from './VideoDetail';

const KEY = "AIzaSyCw6Pr1kprJjrfEYNGt6_C6lIJMPXssgIw";

function App() {
  const [videos,setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  useEffect(()=>{
    onSearchSubmit('Learn React');
  },[]);
  const onSearchSubmit = async (term) => {
    const response = await Youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 5,
        type: "video",
        key: KEY,
      },
    });
    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);
  };
  const onVideoSelect = (vide0) => {
    setSelectedVideo(vide0);
  }
    return (
      <div className="ui container" style={{ paddingTop: "20px" }}>
        <Search onSubmit={onSearchSubmit} />
        <VideoList videos={videos} onVideoSelect={onVideoSelect}/>
        <VideoDetail selectedVideo={selectedVideo} />
      </div>
    );
}

export default App;

import React from 'react';
import "./Cover.css";
import coverVideo from "../../media/coverVideo.mp4";

function Cover() {
  return (
    <div className='cover-container'>
        <video className='video' src={coverVideo} autoPlay loop muted/>
        <h1>José Martínez Ríos</h1>
        <p>Frontend developer</p>
    </div>
  )
}

export default Cover
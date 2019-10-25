import React from 'react';
/* import { Player, Video } from 'video-react'; */


import Title from '../Title';
import { NavLink } from 'react-router-dom';


const VideoPlayer = ({video}) => {
  return (
    <div id="videoWrapper" >
      <video className="paused" controls loop autoPlay onClick={() => {
        let video = document.querySelector('video');
        if (video.getAttribute('class') === 'paused') {
          video.play()
          video.setAttribute('class', 'played')
        } else {
          video.pause();
          video.setAttribute('class', 'paused')
        }
      }}>
        <source src={video}></source>
      </video>
      <NavLink to="/" >
        <Title title={'Back to the home page'} />
      </NavLink>
    </div>

  )
};

export default VideoPlayer;
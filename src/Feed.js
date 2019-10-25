import React, { useState, useEffect } from 'react';
import a from './images/a.jpg';
import b from './images/asap-rocky-underated-feature-image.jpg';
import c from './images/Best-ASAP-Rocky-Braid-Styles.jpg';
import agif from './images/agif.gif';
import bgif from './images/bgif.gif';
import cropped from './images/cropped.jpg';
import video from './videos/IMG_0048.mp4';

import { useSpring, animated } from 'react-spring';

//import Draggable from 'react-draggable';
//import posed from 'react-pose';
//import ImageZoom from 'react-medium-image-zoom';

import { NavLink } from 'react-router-dom';

//import * as moving from './effects/moveBackground';

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`
const trans2 = (x, y) => `translate3d(${x / 15 + 15}px,${y / 15 - 0}px,0)`
const trans3 = (x, y) => `translate3d(${x / 20 - 10}px,${y / 20 - 0}px,0)`;

const props = {
  draggable: true
}


export default function Feed() {
  const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }));
  let [dragged, setDragged] = useState(0);
  let [clickable] = useState(0);

  //the canvas movement should be set up somewhere here
  useEffect(() => {
    /* drawGridLines(); */

  });
  return (
    <div className="feedWrapper">
      <div
        className="feed"
        id="feed"
        onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
        onMouseOver={(event) => {
          const contentTitle = document.querySelector('#content_title');

          if (event.target.alt !== undefined) {
            contentTitle.innerHTML = event.target.alt;
          } else if (event.target.alt === undefined && event.target.getAttribute('type') === "video/mp4") {
            contentTitle.innerHTML = event.target.id;
          } else {
            contentTitle.innerHTML = "";
          }
          return event.target.alt;
        }}>
        <animated.div to="/A$apRocky-1" className="image1" style={{ transform: props.xy.interpolate(trans1) }}>
          {/*   <Draggable> */}
          <NavLink to="A$apRocky-1">
            <img src={a} alt="A$ap Rocky - 1" />
          </NavLink>
          {/*  </Draggable> */}
        </animated.div>
        <animated.div className=" image2" style={{ transform: props.xy.interpolate(trans2) }}>
          <NavLink to="A$apRocky-2">
            <img src={agif} alt="A$ap Rocky - 2" />
          </NavLink>
        </animated.div>
       {/*  <Draggable */}
        {/*   onMouseDown={() => { setDragged(dragged = false); console.log(dragged) }}
          onDrag={() => { setDragged(dragged = true); console.log(dragged) }}
          onMouseUp={(event) => {
            event.preventDefault();
            setDragged(dragged = false);
          }} > */}
          <animated.div className="image3" style={{ transform: props.xy.interpolate(trans3) }}>
            <NavLink to="A$apRocky-3">
              <img src={c} alt="A$ap Rocky - 3" onClick={(event) => { event.stopPropagation(); if (dragged === false) { console.log('fasz') } }} />
            </NavLink>
          </animated.div>
      {/*   </Draggable> */}
        <animated.div className="image4" style={{ transform: props.xy.interpolate(trans2) }}>
          {/*   <Draggable> */}
          <NavLink to="A$apRocky-4">
            <video id="A$ap Rocky - 4" autoPlay={true} loop muted type="video/mp4">
              <source src={video} />
            </video>
          </NavLink>
          {/*  </Draggable> */}
        </animated.div>
        <animated.div className="image5" style={{ transform: props.xy.interpolate(trans2) }}>
          <NavLink to="A$apRocky-5">
            <img src={b} alt="A$ap Rocky - 5" />
          </NavLink>
        </animated.div>
        <animated.div className="image6" style={{ transform: props.xy.interpolate(trans1) }}>
          <NavLink to="A$apRocky-6">
            <img src={c} alt="A$ap Rocky - 6" />
          </NavLink>
        </animated.div>
        <animated.div className="image7" style={{ transform: props.xy.interpolate(trans2) }}>
          {/*   <Draggable> */}
          <NavLink to="A$apRocky-7">
            <img src={cropped} alt="A$ap Rocky - 7"
              onMouseOver={() => {
                let img = document.querySelector('div.image7  img');

                (img.getAttribute('src') === cropped) ? img.setAttribute('src', bgif) : img.setAttribute('src', cropped);
              }}
              onMouseLeave={() => {
                let img = document.querySelector('div.image7 img');
                if (img.getAttribute('src') === bgif) {
                  img.setAttribute('src', cropped);
                }
              }}
            />
          </NavLink>
          {/*  </Draggable> */}
        </animated.div>
        <animated.div className="image8" style={{ transform: props.xy.interpolate(trans3) }}>
            <NavLink to="A$apRocky-8">
              <img src={c} alt="A$ap Rocky - 8" />
            </NavLink>
        </animated.div>
      </div>
    </div>
  );
};
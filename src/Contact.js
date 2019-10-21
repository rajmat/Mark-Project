import React from 'react';
import { useTrail, animated } from 'react-spring';

// import SlideToggle from "react-slide-toggle";

import envelope from './icons/envelope.png';
import mobile from './icons/mobile.png';
import pin from './icons/pin.png';

import Title from './Title';

import { NavLink } from 'react-router-dom';

const fast = { tension: 1200, friction: 40 }
const slow = { mass: 10, tension: 200, friction: 50 }
const trans = (x, y) => `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`

export default function Contact({onToggle, setCollapsibleElement}) {
  const [trail, set] = useTrail(3, () => ({ xy: [0, 0], config: i => (i === 0 ? fast : slow) }))
  return (
    <div>
      <div className="contact wrapper">
        <div className="contact email">
          <span className=" email mail">email: </span>
          <span className="email envelope"><img className="envelope" src={envelope} alt="" style={{width: "25px", height: "25px"}}/> : </span>
          <span className="email"> puszta.mark@gmail.com</span>
        </div>
        <div className="contact telephone">
          <span className="telephone phone">telephone: </span>
          <span className="telephone mobile"><img className="mobile" src={mobile} alt="" style={{width: "25px", height: "25px"}}/> : </span>
          <span> 062055547512</span>
        </div>
        <div className="contact address" onClick={onToggle}>
          <span className="address house">address: </span>
          <span className="address pin"><img className="pin" src={pin} alt="" style={{width: "25px", height: "25px"}}/> : </span>
          <span> Itt vagyunk BGY-n, de jó!</span>
        </div>
      </div>
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="30" />
          <feColorMatrix in="blur" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 30 -7" />
        </filter>
      </svg>
      <div className="hooks-main" onMouseMove={e => set({ xy: [e.clientX, e.clientY] })}>
        {trail.map((props, index) => (
          <animated.div key={index} style={{ transform: props.xy.interpolate(trans) }} />
        ))}
      </div>
      <NavLink to="/">
        <Title title={"Back to the home page"} />
      </NavLink>
    </div>
  )
};
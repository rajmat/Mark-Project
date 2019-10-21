import { render } from 'react-dom'
import React, { useState, useCallback } from 'react'
import { useTransition, animated } from 'react-spring'

import a from '../images/a.jpg';
import b from '../images/asap-rocky-underated-feature-image.jpg';
import c from '../images/Best-ASAP-Rocky-Braid-Styles.jpg';
import ric from '../images/ric.jpg';
import kep1 from '../images/kep1.jpg';


import Title from '../Title';

import { NavLink } from 'react-router-dom';



const pages = [
  ({ style }) => <animated.div style={{ ...style, maxHeight: "auto" }}><img src={a} /></animated.div>,
  ({ style }) => <animated.div style={{ ...style }}><img src={b} style={{width: "100vw", height: "100vh"}}/></animated.div>,
  ({ style }) => <animated.div style={{ ...style }}><img src={c} style={{width: "100vw", height: "100vh"}}/></animated.div>,
  ({ style }) => <animated.div style={{ ...style }}><img src={ric} style={{width: "100vw", height: "100vh"}}/></animated.div>,
  ({ style }) => <animated.div style={{ ...style }}><img src={kep1} style={{width: "100vw", height: "100vh"}}/></animated.div>,
]

export default function AsapRocky3() {
  const [index, set] = useState(0)
  const onClick = useCallback(() => set(state => (state + 1) % 5), [])
  const transitions = useTransition(index, p => p, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  })
  return (
    <div>
      <div className="simple-trans-main" onClick={onClick}>
        {transitions.map(({ item, props, key }) => {
          const Page = pages[item]
          return <Page key={key} style={props} />
        })}
      </div>
      <NavLink to="/">
        <Title title={"Back to the home page"} />
      </NavLink>
    </div>
  )
}

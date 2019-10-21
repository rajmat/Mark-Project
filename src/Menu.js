import React from 'react';

// Component example, simple - function as child
import SlideToggle from "react-slide-toggle";

import { NavLink } from 'react-router-dom';

// Add CSS: .my-collapsible__content { overflow: hidden;}
// Apply optional padding to .my-collapsible__content-inner

export default function Menu() {
  return (
    <div className="menu">
      <SlideToggle collapsed>
        {({ onToggle, setCollapsibleElement }) => (
          <div className="menu wrapper">
            <div className="menu header">
              <div id="pm" onClick={onToggle}>
                Puszta Márk
              </div>
              <NavLink to="/contact">
                <div id="polgi">polgármester</div>
              </NavLink>
            </div>
            <div className="menu body" ref={setCollapsibleElement}>
              <NavLink to="A$apRocky-1">
              <h3 id='1'>1. lecke kakakakakakakakakakak</h3>
              </NavLink>
              <NavLink to="A$apRocky-2">
              <h3 id='2'>2. lecke</h3>
              </NavLink>
              <NavLink to="A$apRocky-3">
              <h3 id='3'>3. lecke</h3>
              </NavLink>
              <NavLink to="A$apRocky-4">
              <h3 id='4'>4. lecke</h3>
              </NavLink>
              <NavLink to="A$apRocky-5">
              <h3 id='5'>5. lecke</h3>
              </NavLink>
              <NavLink to="A$apRocky-6">
              <h3 id='6'>6. lecke</h3>
              </NavLink>
              <NavLink to="A$apRocky-7">
              <h3 id='7'>7. lecke</h3>
              </NavLink>
            </div>
          </div>
        )}
      </SlideToggle>
    </div>
  );
};


{/* <div className="menu" >
            <div className=" menu header">
              <h1 onClick={onToggle}>Puszta Márk</h1>
              <h2>polgármester</h2>
            </div> 

            <div className="my-collapsible__content" ref={setCollapsibleElement}>
              <div className="my-collapsible__content-inner menu body">
                <h3>1. lecke</h3>
                <h3>2. lecke</h3>
                <h3>3. lecke</h3>
                <h3>4. lecke</h3>
                <h3>5. lecke</h3>
                <h3>6. lecke</h3>
                <h3>7. lecke</h3>
              </div>
            </div>
          </div> */}
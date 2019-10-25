import React from 'react';
import Title from '../src/Title';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h1 style={{ "color": "white" }}>Not Found</h1>
      <NavLink to='/'>
        <Title title={"Back to the home page"} />
      </NavLink>
    </div>
  )
};

export default NotFound;
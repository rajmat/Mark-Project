import React from 'react';

import Cassette from '../effects/Cassette';

import Title from '../Title';
import { NavLink } from 'react-router-dom';

export default Audio = ({audio}) => {
  return (
    <div>
      <Cassette audio={audio}/>
      <NavLink to="/">
        <Title title={'Back to the home page'} />
      </NavLink>
    </div>
  )
};
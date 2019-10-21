import React from 'react';
import './style/App.css';
import './style/index.css';

import Menu from './Menu';
import Feed from './Feed';
import Title from './Title';

function App() {
  return (
    <div className="App">
      <Menu />
      <Feed />
      <Title />
    </div> 
  );
}

export default App;

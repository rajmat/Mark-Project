import React from 'react';

export default function Title ({title}) {
  let style = {
    visibility: ""
  }
  return (
    <div className="title">
      <h3 id="content_title" style={style}></h3>
      <div className="title">{title}</div>
    </div>
  )
};
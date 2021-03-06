import React from "react";
import { withRouter } from "react-router-dom";

import './menu-item.scss';

const MenuItem = ({ title, subtitle, imageUrl, size, history, linkUrl, match }) => (
  <div  
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className='background-image'
      style={{
        background: `linear-gradient(
          rgba(135, 206, 235, 0.2), 
          rgba(135, 206, 235, 0.2)
        ),url(${imageUrl})`
      }}
    />
    <div className='content'>
      <h1 className='title'>{ title }</h1>
      <span className='subtitle'>{ subtitle }</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
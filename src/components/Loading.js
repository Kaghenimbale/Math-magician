import React from 'react';
import loadingIcon from './Loading_icon.gif';

const Loading = () => (
  <div className="loading">
    <img className="load" src={loadingIcon} alt="loading-icon" />
  </div>
);

export default Loading;

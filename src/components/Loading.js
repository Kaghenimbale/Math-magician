import React from 'react';
import loadingIcon from './Loading_icon.gif';

const Loading = () => (
  <div className="loading" data-testid="Loading">
    <img className="load" src={loadingIcon} alt="loading-icon" />
  </div>
);

export default Loading;

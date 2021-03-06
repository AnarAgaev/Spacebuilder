import React from 'react';
import './error-indicator.scss';
import image from '../../images/error.gif';

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <div className="error-indicator__msg">
        We're sorry.<br/>
        Service, unfortunately, temporarily does not work.<br/>
        We are already fixing this issue.
      </div>
      <div className="error-indicator__picture">
        <img src={ image }  alt="Error happened"/>
      </div>
    </div>
  );
};

export default ErrorIndicator;
import React from 'react';
import './error-indicator.css';
import icon from './death-star.png';

const ErrorIndicator = () => {
    return (
        <div className="error-indicator">
            <img src={icon} alt="error icon"/>

            <span className="boom">Boom!</span>
            <span>Something went wrong</span>
            <span>(droids are on the way to fix it)</span>
        </div>
    )
}

export default ErrorIndicator;
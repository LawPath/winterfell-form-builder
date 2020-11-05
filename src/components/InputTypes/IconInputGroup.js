import React from 'react';
import Tooltip from '../Tooltip';
import './style.scss';

const IconInput = ({ children, active, onClick, tooltipContent, iconImg }) => {
  return (
    <div className="input-group">
      {children}
      {active ? (
        <div className="input-group-append " data-img={iconImg}>
          <span className="input-group-text " onClick={onClick}>
              <span className="prefill-icon"></span>
          </span>
        </div>
      ) : null}
    </div>
  );
};

export default IconInput;

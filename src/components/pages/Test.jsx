import React, { useState } from 'react';

const Test = ({ title, test }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div className=" s-button">{isActive ? '-' : '+'}</div>
      </div>
      {isActive &&
      <ul className="d-block">
        <h4>{title}</h4>
        <li className="accordion-content d-block">{test}</li>

      </ul>}
    </div>
  );
};

export default Test;
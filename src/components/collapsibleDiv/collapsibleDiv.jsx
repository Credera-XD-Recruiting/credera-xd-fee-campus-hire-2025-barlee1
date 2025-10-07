import React, { useState } from 'react';
import './collapsibleDiv.css';

export const CollapsibleDiv = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="collapsible-container">
      <div className="collapsible-header" onClick={toggle}>
        <h2 className="page-heading-2">{title}</h2>
        <span>{isOpen ? '▲' : '▼'}</span>
      </div>
      {isOpen && <div className="collapsible-content">{children}</div>}
    </div>
  );
};

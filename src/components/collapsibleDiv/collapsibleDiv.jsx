import { useState } from 'react';
import './collapsibleDiv.css';

export const CollapsibleSection = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSection = () => setIsOpen(prev => !prev);

  const handleKeyDown = e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault(); // Prevent scrolling when pressing Space
      toggleSection();
    }
  };

  return (
    <div className="collapsible-section">
      <div
        role="button"
        tabIndex="0"
        aria-expanded={isOpen}
        aria-controls="collapsible-content"
        onClick={toggleSection}
        onKeyDown={handleKeyDown}
        className="collapsible-header"
      >
        <h3>{title}</h3>
        <span>{isOpen ? '▲' : '▼'}</span>
      </div>

      {isOpen && (
        <div id="collapsible-content" className="collapsible-content">
          {children}
        </div>
      )}
    </div>
  );
};
export default CollapsibleSection;

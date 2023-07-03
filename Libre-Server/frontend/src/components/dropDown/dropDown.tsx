import React, { useState, useEffect, useRef, MouseEvent } from 'react';
import './dropDown.scss';

const DropDown: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handler = (event: MouseEvent): void => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('click', haandler);
    
    return () => {
      document.removeEventListener('click', handler);
    };
  }, []);

  const toggleDropdown = () => {
    setOpen(!open);
  };

  return (
    <div className="dropDown">
      <div className="select" onClick={toggleDropdown}>
        <span className="selected">Option 0</span>
        <div className="caret"></div>
      </div>
      <ul className={`menu ${open ? 'open' : ''}`} ref={menuRef}>
        <li className="active">floor 1</li>
        <li>floor 2</li>
      </ul>
    </div>
  );
};


export default DropDown;
import React, { useState, useRef } from 'react';
import './dropdown.css';

const DropDown: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLUListElement>(null);

  const toggleDropdown = () => {
    setOpen(!open);
  };


  return (
    <label className="Dropdown">
      
      <select className="look">
        <option> Floor 3 </option>
        <option> Floor 4 </option>
        <option> option 1 </option>
        <option> option 1 </option>
        <option> option 1 </option>
      </select>
    </label>
    /*
    <div className="dropDown">
      <div className="select" onClick={toggleDropdown}>
        <span className="selected">Option 0</span>
        <div className="caret"></div>
      </div>
      <ul className={`menu ${open ? 'open' : ''}`} ref={menuRef}>
        <li className="active">floor 1</li>
        <li>floor 2</li>
      </ul>
    </div>*/
  );
};


export default DropDown;
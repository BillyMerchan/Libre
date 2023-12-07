import React, { useState } from 'react';
import './dropDown.scss';

interface DropDownProps {
  onSelectFloor: (floor: number) => void;
}

const DropDown: React.FC<DropDownProps> = ({ onSelectFloor }) => {
  const [selectedFloor, setSelectedFloor] = useState(3);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = parseInt(event.target.value, 10);
    setSelectedFloor(selected);
    onSelectFloor(selected);
  };

  return (
    <select className="select-floor" value={selectedFloor} onChange={handleSelectChange}>
      <option value={3}>Floor 3</option>
      <option value={4}>Floor 4</option>
    </select>
  );
};

export default DropDown;

import React, { FC } from 'react';
import './RoomPopup.scss';

interface RoomPopupProps {
  roomName: string;
  description: string;
  color: string;
  onClose: () => void;
}

const RoomPopup: FC<RoomPopupProps> = ({ roomName, description, color, onClose }) => {
  const rgbValues = color.match(/\d+/g);
  const [r, g, b] = rgbValues ? rgbValues.map(Number) : [255, 255, 255]; // Default to white
  // adjusted opacity
  const rgbaColor = `rgba(${r}, ${g}, ${b}, 0.4)`;
  return (
    <div className="ColorOverlap" style={{ backgroundColor: 'white' }}>
      <div className="RoomPopup" style={{ backgroundColor: rgbaColor }}>
        <button className="CloseButton" onClick={onClose}>
          X
        </button>
        <h2>{roomName}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default RoomPopup;

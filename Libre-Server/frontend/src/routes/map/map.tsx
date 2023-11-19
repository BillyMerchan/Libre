import React, { FC, useState } from 'react';
import './map.scss';
import NavBar from '../../components/NavBar/Navbar';
import DropDown from '../../components/dropDown/dropDown';
import MapFloor3 from '../../floors/floor3/Map.js';
import MapFloor4 from '../../floors/floor4/Map.js'; 
import RoomPopup from '../../components/RoomPopup/RoomPopup';

const Map: FC = () => {
  const [popupData, setPopupData] = useState({ roomName: '', description: '', color: '' });
  const [isPopupVisible, setPopupVisibility] = useState(false);
  const [selectedFloor, setSelectedFloor] = useState(3); // Default to Floor 3

  // NOTE: for description, in future we can add images/desc in Map.js. Once hardware is done, also pass in occupancy data
  const handleClick = (id: string, fill: string) => {
    setPopupData({ roomName: `Room: ${id}`, description: 'Description of the room.', color: `${fill}` });
    setPopupVisibility(true);
  };

  const handleClosePopup = () => {
    setPopupVisibility(false);
  };

  const handleSelectFloor = (floor: number) => {
    setSelectedFloor(floor);
  };

  return (
    <div>
      <NavBar />

      <div className="Map">
        <DropDown onSelectFloor={handleSelectFloor} />
        <div className="MapDiagramContainer">
          {selectedFloor === 3 ? (
            <MapFloor3 onClick={handleClick} />
          ) : selectedFloor === 4 ? (
            <MapFloor4 onClick={handleClick} /> // Render MapFloor4 for Floor 4
          ) : null}
        </div>
      </div>

      {isPopupVisible && <RoomPopup roomName={popupData.roomName} description={popupData.description} color={popupData.color} onClose={handleClosePopup} />}
    </div>
  );
};

export default Map;

import React, { FC, useState } from 'react';
import './map.scss';
import NavBar from '../../components/NavBar/Navbar';
import DropDown from '../../components/dropDown/dropDown';
import MapFloor3 from '../../floors/floor3/Map.js';
import RoomPopup from '../../components/RoomPopup/RoomPopup';

const Map: FC = () => {
  // const [selectedFloor, setSelectedFloor] = useState('floor3'); // Default floor is floor3

  // const handleFloorChange = (floor: string) => {
  //   setSelectedFloor(floor);
  // };
  
  const [popupData, setPopupData] = useState({ roomName: '', description: '', color: '' });
  const [isPopupVisible, setPopupVisibility] = useState(false);

  // NOTE: for description, in future we can add images/desc in Map.js. Once hardware is done, also pass in occupancy data
  const handleClick = (id: string, fill: string) => {
    setPopupData({ roomName: `Room: ${id}`, description: 'Description of the room.', color: `${fill}` });
    setPopupVisibility(true);
  };

  const handleClosePopup = () => {
    setPopupVisibility(false);
  };

  return (
    <div>
      <NavBar />

      <div className="Map">
        <DropDown />
        <div className="MapDiagramContainer">
          <MapFloor3 onClick={handleClick} />
        </div>
      </div>

      {isPopupVisible && <RoomPopup roomName={popupData.roomName} description={popupData.description} color={popupData.color} onClose={handleClosePopup} />}
    </div>
  );
};

export default Map;

import React, { FC, useState } from 'react';
import './map.scss';
import NavBar from '../../components/NavBar/Navbar';
import DropDown from '../../components/dropDown/dropDown';
import MapFloor3 from '../../floors/floor3/Map.js';
import MapFloor4 from '../../floors/floor4/Map.js';
import RoomPopup from '../../components/RoomPopup/RoomPopup';
import Legend from '../../components/Legend/Legend';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';


const Map: FC = () => {
  const [popupData, setPopupData] = useState({ roomName: '', description: '', color: '' });
  const [isPopupVisible, setPopupVisibility] = useState(false);
  const [selectedFloor, setSelectedFloor] = useState(3); // Default to Floor 3

  const handleClick = (id: string, fill: string, description: string) => {
    setPopupData({ roomName: `Room: ${id}`, description: `${description}`, color: `${fill}` });
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

        <div className="LegendContainer">
          <Legend />
        </div>

        <TransformWrapper initialScale={1} initialPositionX={0} initialPositionY={0} limitToBounds={false}>

          {({ zoomIn, zoomOut, resetTransform }) => (
            <React.Fragment>
              <div className="tools ZoomButtons">
                <button onClick={() => zoomIn()}>+</button>
                <button onClick={() => zoomOut()}>-</button>
                <button onClick={() => resetTransform()}>Reset</button>
              </div>
              <TransformComponent>
                <div className="FloorBackdrop" />

                <div className="MapDiagramContainer">
                  {selectedFloor === 3 ? (
                    <React.Fragment>
                      <div className="FloorBackdrop FloorBackdropImage Floor3" />
                      <MapFloor3 onClick={handleClick} />
                    </React.Fragment>
                  ) : selectedFloor === 4 ? (
                    <React.Fragment>
                      <div className="FloorBackdrop FloorBackdropImage Floor4" />
                      <MapFloor4 onClick={handleClick} />
                    </React.Fragment>
                  ) : null}
                </div>
              </TransformComponent>
            </React.Fragment>
          )}
        </TransformWrapper>

      </div>

      {isPopupVisible && <RoomPopup roomName={popupData.roomName} description={popupData.description} color={popupData.color} onClose={handleClosePopup} />}
    </div>
  );
};

export default Map;

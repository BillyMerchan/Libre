import React from 'react';
import "./Legend.css"

const Legend = () => {
  return (
    <div className="Legend">
      <div className="LegendItem">
        <div className="ColorBox" style={{ background: 'rgb(189, 255, 189)' }}></div>
        <span className="RoomLabel">Study Room</span>
      </div>

      <div className="LegendItem">
        <div className="ColorBox" style={{ background: 'rgb(160, 238, 224)' }}></div>
        <span className="RoomLabel">Stairs</span>
      </div>

      <div className="LegendItem">
        <div className="ColorBox" style={{ background: 'rgb(238, 248, 149)' }}></div>
        <span className="RoomLabel">Utility</span>
      </div>

      <div className="LegendItem">
        <div className="ColorBox" style={{ background: 'rgb(240, 190, 220)' }}></div>
        <span className="RoomLabel">Restroom</span>
      </div>
    </div>
  );
};

export default Legend;

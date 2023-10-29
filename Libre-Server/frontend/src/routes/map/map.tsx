import { FC } from 'react';
import './map.scss';
import NavBar from '../../components/NavBar/Navbar';
import DropDown from '../../components/dropDown/dropDown';
import MapDiagram from '../../floors/floor3/Map.js';

const handleClick = (id: string) => {
  console.log(`Clicked room: ${id}`);

  // implement popup with desc and room id

};


const Map: FC = () => {
  return (
    <div>
      <NavBar />

      <div className="Map">
        <DropDown />
        <div className="MapDiagramContainer">
          <MapDiagram onClick={handleClick} />
        </div>
      </div>

    </div>
  );
}

export default Map;

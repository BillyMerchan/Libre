import { FC } from 'react';
import './map.scss';
import NavBar from '../../components/NavBar/Navbar';
import DropDown from '../../components/dropDown/dropDown';
// import { ReactComponent as Map } from '../../floors/floor3/map.svg';
import Map from '../../floors/floor3/Map.js';
// const map = require("../../floors/floor3/map2.svg") as string;

const Map2: FC = () => {
  return (
    <div>
      <NavBar />
      <Map />
      <DropDown />
      <MapDiagram />
    </div>
  );
}

const MapDiagram: FC = () => {
  return (
    <div className='Map'>
      <div className="Room R332A">
        <div className='text'>332A</div>
      </div>
      <div className="Room R332B">
        <div className='text'>332B</div>
      </div>
      <div className="Room R332C">
        <div className='text'>332C</div>
      </div>
      <div className="Room R332D">
        <div className='text'>332D</div>
      </div>
      <div className="Room R332E">
        <div className='text'>332E</div>
      </div>
      <div className="Room R333">
        <div className='text'>333</div>
      </div>
      <div className="Room R337A">
        <div className='text'>337A</div>
      </div>
      <div className="Room R337B">
        <div className='text'>337B</div>
      </div>
      <div className="Room R337C">
        <div className='text'>337C</div>
      </div>
      <div className="Room R337D">
        <div className='text'>337D</div>
      </div>
      <div className="Room R337E">
        <div className='text'>337E</div>
      </div>
      <div className="Room R342A">
        <div className='text'>342A</div>
      </div>
      <div className="Room R342B">
        <div className='text'>342B</div>
      </div>
      <div className="Room R342C">
        <div className='text'>342C</div>
      </div>
      <div className="Room R352A">
        <div className='text'>352A</div>
      </div>
      <div className="Room R352B">
        <div className='text'>352B</div>
      </div>
      <div className="Room R352C">
        <div className='text'>352C</div>
      </div>
      <div className="Room R352D">
        <div className='text'>352D</div>
      </div>
      <div className="Room R352E">
        <div className='text'>352E</div>
      </div>
      <div className="Room R353A">
        <div className='text'>353A</div>
      </div>
      <div className="Room R353B">
        <div className='text'>353B</div>
      </div>
      <div className="Room R311">
        <div className='text'>311</div>
      </div>
      <div className="Room R323C">
        <div className='text'>323C</div>
      </div>
      <div className="Room R323B">
        <div className='text'>323B</div>
      </div>
      <div className="Room R323A">
        <div className='text'>323A</div>
      </div>
    </div>
  )
}

export default Map2;

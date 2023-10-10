import { FC } from 'react';
import './map.scss';
import NavBar from '../../components/NavBar/Navbar';
import DropDown from '../../components/dropDown/dropDown';
import React, { useState } from "react";
import {
  room1, room2, room3, room4, room5, room6, room7
} from '../../floors/floor3/index2';

const Map2: FC = () => {
  return (
    <div>
      <NavBar />
      <div className="Page">
        <div className="Map">
          <DB />
        </div>
      </div>
    </div>
  );
}

const DB: FC = () => {
  return (
    <div>
      <DropDown />
      <MapDiagram />
    </div>
  )
}

const MapDiagram: FC = () => {
  return (
    <div className='Room'>
      <div className="R2room332A">
        <div className='text'>Room 322C</div>
      </div>
      <div className="R2room332B">
        <div className='text'>Room 322B</div>
      </div>
      <div className="R2room332C">
        <div className='text'>Room 322C</div>
      </div>
      <div className="R2room332D">
        <div className='text'>Room 322C</div>
      </div>
      <div className="R2room332E">
        <div className='text'>Room 322C</div>
      </div>
      <div className="R2room333">
        <div className='text'>Room 322C</div>
      </div>


      <div className="R2room337A">
        <div className='text'>Room 322C</div>
      </div>
      <div className="R2room337B">
        <div className='text'>Room 322B</div>
      </div>
      <div className="R2room337C">
        <div className='text'>Room 322C</div>
      </div>
      <div className="R2room337D">
        <div className='text'>Room 322C</div>
      </div>
      <div className="R2room337E">
        <div className='text'>Room 322C</div>
      </div>

      <div className="R2room342A">
        <div className='text'>Room 322C</div>
      </div>
      <div className="R2room342B">
        <div className='text'>Room 322C</div>
      </div>
      <div className="R2room342C">
        <div className='text'>Room 322C</div>
      </div>

      <div className="R2room352A">
        <div className='text'>Room 322C</div>
      </div>
      <div className="R2room352B">
        <div className='text'>Room 322C</div>
      </div>
      <div className="R2room352C">
        <div className='text'>Room 322C</div>
      </div>
      <div className="R2room352D">
        <div className='text'>Room 322C</div>
      </div>
      <div className="R2room352E">
        <div className='text'>Room 322C</div>
      </div>
      <div className="R2room353A">
        <div className='text'>Room 322C</div>
      </div>
      <div className="R2room353B">
        <div className='text'>Room 322C</div>
      </div>

      <div className="R2room311">
        <div className='text'>Room 322C</div>
      </div>


      <div className="R2room323C">
        <div className='text'>Room 322C</div>
      </div>
      <div className="R2room323B">
        <div className='text'>Room 322C</div>
      </div>
      <div className="R2room323A">
        <div className='text'>Room 322C</div>
      </div>

    </div>
  )
}

export default Map2;

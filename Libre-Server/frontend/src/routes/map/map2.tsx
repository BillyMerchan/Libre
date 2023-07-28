import {FC} from 'react';
import './map.css';
import NavBar from '../../components/NavBar/Navbar';
import DropDown from '../../components/dropDown/dropDown';
import React, {useState} from "react";
import {room1, room2, room3, room4, room5, room6, room7
} from '../../floors/floor3/index2'; 

const Map2: FC = () => {
  return (
    <div>
      <NavBar/>
      <div className="Page">
        <div className="Map">
          <DB/>
        </div>
      </div>
      </div>
    );
}

const DB: FC = () => {
  return (
    <div> 
        <DropDown/>
        <MapDiagram/>
    </div>
  )
}

const MapDiagram: FC = () => {
  return (
    <div className='Room'>
      <div className="room311">
        <div className='overlay'>
          <div className='text'>Room 353B</div>
          </div>
        </div>
    </div>
  )
}

export default Map2;

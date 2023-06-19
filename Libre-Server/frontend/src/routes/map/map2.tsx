import {FC} from 'react';
import './map.css';
import NavBar from '../../components/NavBar/Navbar';
import DropDown from '../../components/dropDown/dropDown';
import React, {useState, useEffect} from "react";
import {room_311, room_323A, room_323B, room_323C, room_332A,
       room_332B, room_332C, room_332D, room_332E, room_333,
       room_337A, room_337B, room_337C, room_337D, room_337E,
       room_342A, room_342B, room_342C, room_352A, room_352B,
       room_352C, room_352D, room_352E, room_353A, room_353B
} from '../../floors/floor3/index'


const [isExpanded, setisExpanded] = useState(false);

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
        <button className='Dropdown'></button>
        <DropDown/>
        <MapDiagram/>
    </div>
  )
}

const MapDiagram: FC = () => {
  return (
    <div>
      <img src = {room_311} className = "mapRoom"/>
      <img src = {room_323A} className = "mapRoom"/>
      <img src = {room_323B} className = "mapRoom"/>
      <img src = {room_323C} className = "mapRoom"/>
      <img src = {room_332A} className = "mapRoom"/>
      <img src = {room_332B} className = "mapRoom"/>
      <img src = {room_332C} className = "mapRoom"/>
      <img src = {room_332D} className = "mapRoom"/>
      <img src = {room_332E} className = "mapRoom"/>
      <img src = {room_333} className = "mapRoom"/>
      <img src = {room_337A} className = "mapRoom"/>
      <img src = {room_337B} className = "mapRoom"/>
      <img src = {room_337C} className = "mapRoom"/>
      <img src = {room_337D} className = "mapRoom"/>
      <img src = {room_337E} className = "mapRoom"/>
      <img src = {room_342A} className = "mapRoom"/>
      <img src = {room_342B} className = "mapRoom"/>
      <img src = {room_342C} className = "mapRoom"/>
      <img src = {room_352A} className = "mapRoom"/>
      <img src = {room_352B} className = "mapRoom"/>
      <img src = {room_352C} className = "mapRoom"/>
      <img src = {room_352D} className = "mapRoom"/>
      <img src = {room_352E} className = "mapRoom"/>
      <img src = {room_353A} className = "mapRoom"/>
      <img src = {room_353B} className = "mapRoom"/>
    </div>
  )
}

export default Map2;

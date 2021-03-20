import React, {useState, useEffect} from 'react';
import {BombCounter} from '../bombCounter/bombCounter';
import {Timer} from '../timer/timer';
import { cellsArrGenerator } from '../../tools/tools'; 
import './header.scss';


export const Header = ({setCellsController}) => {
  const bombCount = 12;

  const [time, setTime] = useState(0);
  const [isClick, switchClick] = useState(false);
  const startGame = () => {
    // switchClick(true);
    setCellsController(cellsArrGenerator());
  }

  useEffect(() => {

    setInterval(() => {
      setTime((previos) => previos + 1)
    }, 1000)

  }, [])
  
  return (
    <div className="header">
      <div className="header-wrapper">
        <BombCounter bombCount={bombCount}/>
        <div onClick={startGame} className="start-btn">Start</div>
        <Timer time={time}></Timer>
      </div>
    </div>
  )
}

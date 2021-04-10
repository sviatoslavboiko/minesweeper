import React, {useState, useEffect} from 'react';
import { decreaseFlags, startTimer } from '../../redux/actions'
import {BombCounter} from '../bombCounter/bombCounter';
import { connect } from 'react-redux'
import {Timer} from '../timer/timer';
import { cellsArrGenerator } from '../../tools/tools'; 
import './header.scss';


 const Header = ({setCellsController, flagsCount, isTimerStarted}) => {
  // const bombCount = 12;

  const [started, startTimer] = useState(isTimerStarted)
  const [time, setTime] = useState(0);
  const [isClick, switchClick] = useState(false);
  const startGame = () => {
    // switchClick(true);
    setCellsController(cellsArrGenerator());
  }

  useEffect(() => {
    if(isTimerStarted) {
      const foo = () => {
        setTime((previos) => previos + 1)
      }
      setInterval(foo, 1000)
      
    }


  }, [isTimerStarted])

  
  return (
    <div className="header">
      <div className="header-wrapper">
        <BombCounter bombCount={flagsCount}/>
        <div>Sviatoslav Boiko Pituh</div>
        <Timer time={time}></Timer>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  console.log(state);
  return {
    myCells: state.cells.cells,
    flagsCount: state.app.flags,
    isTimerStarted: state.app.isTimerStarted
  }
}

const mapDispatchToProps = {
  decreaseFlags,
  startTimer,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux'
import { openZeroCell, openPositiveCell, openModalWindow, markCell, unMarkCell, decreaseFlags, increaseFlags, startTimer, generateCells, isBombRegenerateCell, openCell } from '../../redux/actions'
import classNames from 'classnames';
import './cell.scss';

const Cell = (
  {
    isBomb,
    isOpen,
    isChecked,
    number,
    coords,
    openZeroCell,
    myCells,
    markCell,
    unMarkCell,
    openPositiveCell,
    openModalWindow,
    decreaseFlags,
    increaseFlags,
    flagsCount,
    isTimerStarted,
    startTimer,
    isBombRegenerateCell,
    openCell
  }) => {

  const [bomb, setBomb] = useState(isBomb)
  const [open, setOpen] = useState(isOpen)
  // const [check, setCheck] = useState(isChecked)

  const rightClick = (e) => {

    e.preventDefault();
    if(!open){
      if(!isChecked) {
        markCell(coords, myCells);
        decreaseFlags()
      }else {
        unMarkCell(coords, myCells);
        if(flagsCount < 12) {
          increaseFlags()
        }
      }

    }
  }

  const cellClickHandler = () => {
    
    openCell(coords, isBomb, number)
  }

  return (
    <div className={classNames('cell', {gray: open && !isChecked && !bomb, red: open && bomb, orange: !open && isChecked})} onClick={cellClickHandler} onContextMenu={rightClick}>
       {open && number}
       {bomb ? 'bomb' : number}
    </div>
  )
}

const mapStateToProps = state => {
  console.log(state);
  return {
    myCells: state.cells.cells,
    isModalWindowOpen: state.app.modalWindowVisibility,
    flagsCount: state.app.flags,
    isTimerStarted: state.app.isTimerStarted
  }
}

const mapDispatchToProps = {
  openZeroCell,
  markCell,
  unMarkCell,
  openPositiveCell,
  openModalWindow,
  decreaseFlags,
  increaseFlags,
  startTimer,
  generateCells,
  isBombRegenerateCell,
  openCell,
}

export default connect(mapStateToProps, mapDispatchToProps)(Cell)
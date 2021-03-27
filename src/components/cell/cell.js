import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux'
import { openZeroCell, openPositiveCell } from '../../redux/actions'
import classNames from 'classnames';
import './cell.scss';

const Cell = ({title, isBomb, isOpen, isChecked, visibilytyConroller, number, resetCells, coords, openZeroCell, myCells, openPositiveCell}) => {

  const [bomb, setBomb] = useState(isBomb)
  const [open, setOpen] = useState(isOpen)
  const [check, setCheck] = useState(isChecked)

  const rightClick = (e) => {

    e.preventDefault();
    if(!open){
      setCheck(isChecked => !isChecked);
    }
    
  }

  const cellClickHandler = () => {
    if(!check){
      openPositiveCell(coords, myCells);

    if(bomb){
      visibilytyConroller(true);
    }   
    else {
      if(number === 0) {
        openZeroCell(coords, myCells)
      }
    }
    }
  }

  return (
    <div className={classNames('cell', {gray: open && !check && !bomb, red: open && bomb, orange: !open && check})} onClick={cellClickHandler} onContextMenu={rightClick}>
       {open && number}
    </div>
  )
}

const mapStateToProps = state => {
  console.log(state);
  return {
    myCells: state.cells.cells
  }
}

const mapDispatchToProps = {
  openZeroCell,
  openPositiveCell
}

export default connect(mapStateToProps, mapDispatchToProps)(Cell)
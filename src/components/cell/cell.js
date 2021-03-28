import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux'
import { openZeroCell, openPositiveCell, openModalWindow } from '../../redux/actions'
import classNames from 'classnames';
import './cell.scss';

const Cell = (
  {
    isBomb,
    isOpen,
    isChecked,
    visibilytyConroller,
    number,
    coords,
    openZeroCell,
    myCells,
    openPositiveCell,
    openModalWindow
  }) => {

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
      openModalWindow();
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
    myCells: state.cells.cells,
    isModalWindowOpen: state.app.modalWindowVisibility,
  }
}

const mapDispatchToProps = {
  openZeroCell,
  openPositiveCell,
  openModalWindow,
}

export default connect(mapStateToProps, mapDispatchToProps)(Cell)
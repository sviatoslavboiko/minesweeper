import React, {useState, useEffect} from 'react';
import classNames from 'classnames';
import './cell.scss';

export const Cell = ({title, isBomb, isOpen, isChecked, visibilytyConroller, number, resetCells, coords}) => {

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
      setOpen(true);

    if(bomb){
      visibilytyConroller(true);
    }   
    else {
      if(number === 0) {
        resetCells(coords)
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
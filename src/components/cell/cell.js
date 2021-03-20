import React, {useState, useEffect} from 'react';
import classNames from 'classnames';
import './cell.scss';

export const Cell = ({title, isBomb, isOpen, visibilytyConroller, number, resetCells, coords}) => {

  const [bomb, setBomb] = useState(isBomb)
  const [open, setOpen] = useState(isOpen)

  const cellClickHandler = () => {

    setOpen(true);

    if(bomb){
      visibilytyConroller(true);
    }   
    else {
      if(number === 0) {
        resetCells(coords)
      }
    }

    setOpen(true)
  }

  return (      
    <div className={classNames('cell', {green: open, gray: !open, red: open && bomb})} onClick={cellClickHandler}>
       {number}
       <br/>
       i : {coords.i}
       <br />
       j : {coords.j}
    </div>
  )
}
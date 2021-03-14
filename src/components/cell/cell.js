import React, {useState, useEffect} from 'react';
import classNames from 'classnames';
import './cell.scss';

export const Cell = ({isBomb, title, visibilytyConroller }) => {

  const [bomb, setBomb] = useState(isBomb)

  const cellClickHandler = () => {
    if(bomb){
      visibilytyConroller(true);
    }   
    else {
      console.log('ok')
    }
  }

  return (
    <div className={classNames('cell', {red: bomb, green: !bomb}) } onClick={cellClickHandler}>
      
    </div>
  )
}
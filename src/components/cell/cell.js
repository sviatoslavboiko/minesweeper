import React, {useState, useEffect} from 'react';
import classNames from 'classnames';
import './cell.scss'

export const Cell = ({isBomb, title, number}) => {

  const [bomb, setBomb] = useState(isBomb)

  return (
    <div className={classNames('cell', {red: bomb, green: !bomb})}>
       {number}
    </div>
  )
}
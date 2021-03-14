import React, {useState, useEffect} from 'react';
import {Cell} from '../cell/cell';
import './field.scss';
import { cellsArrGenerator } from '../../tools/tools';


export const Field = () => {

  const [cells, setSells] = useState([]);

  useEffect(() => {
    setSells(cellsArrGenerator())
  }, [])
 
  return (
    <div className="field">
      <div className="field-wrapper">
      { cells.map(row => row.map(cell => (<Cell isBomb={cell.isBomb} title={cell.title}/>)))}
      </div>
    </div>
  )
}
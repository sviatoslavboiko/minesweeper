import React, {useState, useEffect} from 'react';
import {Cell} from '../cell/cell'
import './field.scss'


export const Field = () => {

  const [cells, setSells] = useState([]);

  useEffect(() => {
    setSells(cellsArrGenerator())
  }, [])

  const cellsArrGenerator = () => {
    const I = 10, J = 10;
    
    const cells = new Array(I);

    for (let i = 0; i < J; i++) {
      cells[i] = new Array(J);
    }

    for (let i = 0; i < I; i++) {
      for (let j = 0; j < J; j++) {
        cells[i][j] = {
          title: "Hello I am cell",
          isBomb: false
        }
      }
    }

    return cells;
  }
 
  return (
    <div className="field">
      <div className="field-wrapper">
      { cells.map(row => row.map(cell => (<Cell isBomb={cell.isBomb} title={cell.title}/>)))}
      </div>
    </div>
  )
}
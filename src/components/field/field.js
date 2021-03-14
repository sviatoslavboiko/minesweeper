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
    
    let numberGenerator = function(arr) {
      if (arr.length >= 12) return;
      let newNumber = Math.floor(Math.random() * 99);
      if (arr.indexOf(newNumber) < 0) {
        arr.push(newNumber);
      }
      numberGenerator(arr);
    };

    const numbersToCoords = [];

    numberGenerator(numbersToCoords)


    const cooardinator = (numbers) => {

      const cords = [];
    
      numbers.forEach(number => {
        const numberCords = {
          i: Math.floor(number / 10),
          j: number % 10,
        }
      
        cords.push(numberCords)
      })
      return cords;
    }

    const coords = cooardinator(numbersToCoords);

    for (let i = 0; i < I; i++) {
      for (let j = 0; j < J; j++) {
        cells[i][j] = {
          title: "Hello I am cell",
          isBomb: false
        }
      }
    }

    for (let coord of coords) {
      const {i, j} = coord;
      cells[i][j].isBomb = true;
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
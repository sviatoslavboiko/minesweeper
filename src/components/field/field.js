import React, {useState, useEffect} from 'react';
import {Cell} from '../cell/cell';
import './field.scss';
import { cellsArrGenerator } from '../../tools/tools';
import ModalInFunctionalComponent from '../modal/modal';


export const Field = () => {

  const [cells, setCells] = useState([]);
  const [isModalWindowOpen, setMWVisibility] = useState(false);

  useEffect(() => {
    setCells(cellsArrGenerator())
  }, [])

  const resetCells = ({i, j}) => {
    const reccurenceHolder = [];
    const openedZeros = []

    const newCells = JSON.parse(JSON.stringify(cells));

const foo = (i, j) => {

  if(reccurenceHolder.includes(`${i}${j}`)) {
    return;
  }

  reccurenceHolder.push(`${i}${j}`)
  if(!newCells[i] || !newCells[i][j]) {
    return;
  }

  if(newCells[i][j].number === 0) {
    newCells[i][j].isOpen = true;
    openedZeros.push(`${i}${j}`)
  }else {
    return;
  }


  for (let inI = -1; inI <= 1; inI++) {
    for (let inJ = -1; inJ <= 1; inJ++) {
      const Is = i + inI;
      const Js = j + inJ;
      if(Is !== i || Js !== j) {
         foo(Is, Js)
        }
      }
    }
  }


    foo(i, j)

    openedZeros.forEach(item => {
      const k = item.split('');
      const i = +k[0];
      const j = +k[1];

        for (let inI = -1; inI <= 1; inI++) {
          for (let inJ = -1; inJ <= 1; inJ++) {
            const Is = i + inI;
            const Js = j + inJ;
            if(Is !== i || Js !== j) {
              if(!newCells[Is] || !newCells[Is][Js]) {
                continue;
              }
              if(!newCells[Is][Js].isBomb) {
                newCells[Is][Js].isOpen = true
              }
              }
            }
          }
      
    })

    setCells((previous) => {
      previous.length = 0;

      previous = [...newCells];
      return previous;
    });
  }
 
  return (
    <div className="field">
      <div className="field-wrapper">
      { cells.map(row => row.map(cell => (
      <
        Cell
        key={new Date() * Math.random()}
        isBomb={cell.isBomb}
        isOpen={cell.isOpen}
        title={cell.title}
        visibilytyConroller={setMWVisibility}
        number={cell.number}
        coords={cell.coords}
        resetCells={resetCells}
      />
      )))
      
      }
      </div>
      <ModalInFunctionalComponent isModalWindowOpen={isModalWindowOpen} visibilytyConroller={setMWVisibility} setCellsController={setCells} />
    </div>
  )
}

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
 
  return (
    <div className="field">
      <div className="field-wrapper">
      { cells.map(row => row.map(cell => (<Cell key={new Date() * Math.random()} isBomb={cell.isBomb} title={cell.title} isChecked={cell.isChecked} visibilytyConroller={setMWVisibility} number={cell.number}/>)))}
      </div>
      <ModalInFunctionalComponent isModalWindowOpen={isModalWindowOpen} visibilytyConroller={setMWVisibility} setCellsController={setCells} />
    </div>
  )
}

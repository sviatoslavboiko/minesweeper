import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux'
import Cell from '../cell/cell';
import {generateCells} from '../../redux/actions'
import './field.scss';
import { cellsArrGenerator } from '../../tools/tools';
import ModalInFunctionalComponent from '../modal/modal';


const Field = ({generateCells, myCells}) => {

  const [cells, setCells] = useState();
  const [isModalWindowOpen, setMWVisibility] = useState(false);

  useEffect(() => {
    generateCells();
  }, [])

 
  return (
    <div className="field">
      <div className="field-wrapper">
      { myCells.map(row => row.map(cell => (
      <
        Cell
        key={new Date() * Math.random()}
        isBomb={cell.isBomb}
        isOpen={cell.isOpen}
        title={cell.title}
        visibilytyConroller={setMWVisibility}
        number={cell.number}
        coords={cell.coords}
      />
      )))
      
      }
      </div>
      <ModalInFunctionalComponent isModalWindowOpen={isModalWindowOpen} visibilytyConroller={setMWVisibility} setCellsController={setCells} />
    </div>
  )
}

const mapStateToProps = state => {
  console.log(state);
  return {
    myCells: state.cells.cells
  }
}

const mapDispatchToProps = {
  generateCells
}

export default connect(mapStateToProps, mapDispatchToProps)(Field);

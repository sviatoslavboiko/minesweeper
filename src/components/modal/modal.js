import React, {useState} from 'react';
import Modal from 'react-modal';
import './modal.scss';
import { connect } from 'react-redux'
import {generateCells, closeModalWindow} from '../../redux/actions'
// import { cellsArrGenerator } from '../../tools/tools'; 


function ModalInFunctionalComponent ({isOpen, visibilytyConroller, generateCells, closeModalWindow}){

    const setModalIsOpenToFalse = () => {
        closeModalWindow();
        generateCells();
    }

    const customStyles = {
      content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        backgroundColor       : '#F0AA89'      
      }
  };

    return(
        <>
            <Modal isOpen={isOpen} style={customStyles} onRequestClose={()=> setModalIsOpenToFalse()} ariaHideApp={false}>
              <button onClick={setModalIsOpenToFalse}>x</button>
              <p>You lose!</p>
            </Modal>
        </>
    )
}

const mapStateToProps = state => {
  console.log(state);
  return {
    isOpen: state.app.modalWindowVisibility
  }
}

const mapDispatchToProps = {
  generateCells,
  closeModalWindow
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalInFunctionalComponent);

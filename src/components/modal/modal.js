import React, {useState} from 'react';
import Modal from 'react-modal';
import './modal.scss';
import { cellsArrGenerator } from '../../tools/tools'; 


function ModalInFunctionalComponent ({isModalWindowOpen, visibilytyConroller, setCellsController}){

    const setModalIsOpenToFalse = () => {
        visibilytyConroller(false);
        setCellsController(cellsArrGenerator());
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
            <Modal isOpen={isModalWindowOpen} style={customStyles} onRequestClose={()=> setModalIsOpenToFalse()} ariaHideApp={false}>
              <button onClick={setModalIsOpenToFalse}>x</button>
              <p>You lose!</p>
            </Modal>
        </>
    )
}
export default ModalInFunctionalComponent;  
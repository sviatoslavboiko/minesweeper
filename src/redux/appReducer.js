import { CLOSE_MODAL_WINDOW, OPEN_MODAL_WINDOW } from "./types"


const initialState = {
  modalWindowVisibility: false,
}


export const appReducer = (state = initialState, action) => {
  switch(action.type) {
    case OPEN_MODAL_WINDOW:
      return {...state, modalWindowVisibility: true}
    case CLOSE_MODAL_WINDOW:
      return {...state, modalWindowVisibility: false}
    default:
      return state
  }
}
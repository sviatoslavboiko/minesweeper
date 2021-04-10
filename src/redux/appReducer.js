import { CLOSE_MODAL_WINDOW, OPEN_MODAL_WINDOW, DECREASE_FLAGS, INCREASE_FLAGS, START_TIMER } from "./types"


const initialState = {
  modalWindowVisibility: false,
  flags: 12,
  isTimerStarted: false,
}


export const appReducer = (state = initialState, action) => {
  switch(action.type) {
    case OPEN_MODAL_WINDOW:
      return {...state, modalWindowVisibility: true}
    case CLOSE_MODAL_WINDOW:
      return {...state, modalWindowVisibility: false}
    case DECREASE_FLAGS:
      return {...state, flags: state.flags - 1}
    case INCREASE_FLAGS:
      return {...state, flags: state.flags + 1}
    case START_TIMER:
      return {...state, isTimerStarted: true}
    default:
      return state
  }
}
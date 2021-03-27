import { GENERATE_CELLS, OPEN_POSITIVE_CELL, OPEN_ZERO_CELL } from "./types"

const initialState = {
  cells: [],
}

export const cellsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GENERATE_CELLS:
      return {...state, cells: action.payload}
    case OPEN_ZERO_CELL:
      return {...state, cells: action.payload}
    case OPEN_POSITIVE_CELL:
      return {...state, cells: action.payload}
    default: return state
  }
}
import { GENERATE_CELLS, OPEN_POSITIVE_CELL, OPEN_ZERO_CELL, MARK_CELL, UNMARK_CELL, IS_BOMB_REGENERATE_CELLS, OPEN_CELL } from "./types"

const initialState = {
  cells: [],
}

export const cellsReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_CELL:
      return {...state, cells: action.payload}
    case GENERATE_CELLS:
      return {...state, cells: action.payload}
    case OPEN_ZERO_CELL:
      return {...state, cells: action.payload}
    case OPEN_POSITIVE_CELL:
      return {...state, cells: action.payload}
    case MARK_CELL:
      return {...state, cells: action.payload}
    case UNMARK_CELL:
      return {...state, cells: action.payload}
    case IS_BOMB_REGENERATE_CELLS:
      return {...state, cells: action.payload}
    default: return state
  }
}
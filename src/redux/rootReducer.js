import { combineReducers } from "redux";
import { cellsReducer } from "./cellsReducer";

export const rootReducer = combineReducers({
  cells: cellsReducer
})
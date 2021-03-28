import { combineReducers } from "redux";
import { appReducer } from "./appReducer";
import { cellsReducer } from "./cellsReducer";

export const rootReducer = combineReducers({
  cells: cellsReducer,
  app: appReducer
})
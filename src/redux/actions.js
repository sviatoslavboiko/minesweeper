import { cellsArrGenerator, zerosOpener, openPositive, flagCell, unflagCell, regenerateAndOpenCell } from "../tools/tools";
import {
  CLOSE_MODAL_WINDOW,
  GENERATE_CELLS,
  MARK_CELL,
  OPEN_MODAL_WINDOW,
  OPEN_POSITIVE_CELL,
  OPEN_ZERO_CELL,
  UNMARK_CELL,
  DECREASE_FLAGS,
  INCREASE_FLAGS,
  START_TIMER,
  IS_BOMB_REGENERATE_CELLS,
} from "./types";

export function generateCells() {
  return {
    type: GENERATE_CELLS,
    payload: cellsArrGenerator()
  }
}

export function openZeroCell(coords, cells) {
  return {
    type: OPEN_ZERO_CELL,
    payload: zerosOpener(coords, cells)
  }
}

export function openPositiveCell(coords, cells) {
  return {
    type: OPEN_POSITIVE_CELL,
    payload: openPositive(coords, cells)
  }
}

export function isBombRegenerateCell(coords) {
  return {
    type: IS_BOMB_REGENERATE_CELLS,
    payload: regenerateAndOpenCell(coords),
  }
}

export function markCell(coords, cells) {
  return {
    type: MARK_CELL,
    payload: flagCell(coords, cells)
  }
}

export function unMarkCell(coords, cells) {
  return {
    type: UNMARK_CELL,
    payload: unflagCell(coords, cells)
  }
}



export function openModalWindow() {
  return {
    type: OPEN_MODAL_WINDOW,
    payload: true,
  }
}

export function closeModalWindow() {
  return {
    type: CLOSE_MODAL_WINDOW,
    payload: false,
  }
}

export function decreaseFlags() {
  return {
    type: DECREASE_FLAGS,
  }
}

export function increaseFlags() {
  return {
    type: INCREASE_FLAGS,
  }
}

export function startTimer() {
  return {
    type: START_TIMER
  }
}
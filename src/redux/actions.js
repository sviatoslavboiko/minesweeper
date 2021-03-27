import { cellsArrGenerator, zerosOpener, positiveOpener } from "../tools/tools";
import { GENERATE_CELLS, OPEN_POSITIVE_CELL, OPEN_ZERO_CELL } from "./types";

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
    payload: positiveOpener(coords, cells)
  }
}
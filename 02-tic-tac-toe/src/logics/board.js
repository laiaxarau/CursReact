import { WINNER_COMBOS } from "../constants.js"

export const checkWinnerFrom = (boardtoCheck) => {
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo
      if (
        boardtoCheck[a] && //aquí veu si hi ha X o O
        boardtoCheck[a] === boardtoCheck[b] &&
        boardtoCheck[a] === boardtoCheck[c]
      ) {
        return boardtoCheck[a]
      }
    }
    // si no hi ha guanyador retorna null
    return null
  }
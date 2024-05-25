import { useState } from 'react'
import './App.css'
import confetti from "canvas-confetti"
import { Square } from './components/Square.jsx'
import { TURNS } from './constants.js'
import { checkWinnerFrom } from './logics/board.js'
import { WinnerModal } from './components/WinnerModal.jsx'



function App() {
  const [board, setBoard] = useState(Array(9).fill(null))

  const [turn, setTurn] = useState(TURNS.X)
  //null es q no hi ha guanyador, false és empat
  const [winner, setWinner] = useState(null)

  const resetGame = ()=> {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  const checkEndGame = (newBoard)=>{
    // revisa si hi ha empat quan no hi ha més espais en blanc al taulell.
  return newBoard.every((square)=>square !== null)
  }

  const updateBoard = (index) => {
    //no actualitza aquesta posició si ja té alguna cosa, ja no és null:
    if (board[index] || winner) return
    //aquí, actualitza taulell
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    //aquí canvia el torn
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    //revisar si hi ha guanyador
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)){
      setWinner(false)
    }
  }

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Torna a començar</button>
      <section className='game'>
        {
          board.map((_, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}>
                {_}
              </Square>
            )
          })
        }
      </section>
      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
      <section>
       <WinnerModal resetGame={resetGame} winner={winner}/>
      </section>
    </main>
  )
}

export default App

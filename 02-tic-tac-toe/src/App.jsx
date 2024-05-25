import { useState } from 'react'
import './App.css'

const TURNS = {
X: 'x',
O: 'o'
}

const Square = ({children, isSelected, updateBoard, index})=>{
  const className = `square ${isSelected? 'is-selected': ''}`
 
  const handleClick = ()=>{
    updateBoard(index)
  }
  return(
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}

const WINNER_COMBOS = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],
]

function App() {
  const [board,setBoard] = useState(Array(9).fill(null))

  const [turn, setTurn] = useState(TURNS.X)
  //null es q no hi ha guanyador, false és empat
  const [winner, setWinner] = useState(null) 

  const checkWinner = (boardtoCheck)=>{
  for(const combo of WINNER_COMBOS){
    const [a,b,c]=combo
    if(
      boardtoCheck[a]&& //aquí veu si hi ha X o O
      boardtoCheck[a]=== boardtoCheck[b]&&
      boardtoCheck[a]=== boardtoCheck[c]
    ) {
      return boardtoCheck[a]
    }
  }
  // si no hi ha guanyador retorna null
  return null
}
    
  const updateBoard=(index)=>{
    //no actualitza aquesta posició si ja té alguna cosa, ja no és null:
    if (board[index] || winner) return
    //aquí, actualitza taulell
    const newBoard = [...board] 
    newBoard[index] = turn
    setBoard(newBoard)
//aquí canvia el torn
    const newTurn = turn === TURNS.X? TURNS.O: TURNS.X
    setTurn(newTurn)
    //revisar si hi ha guanyador
    const newWinner = checkWinner(newBoard)
    if (newWinner){
      setWinner(newWinner)
      alert (`El guanyador és ${newWinner}`)
    }
  }

 return (
 <main className='board'>
  <h1>Tic Tac Toe</h1>
  <section className='game'>
{
  board.map((_,index)=>{
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
    <Square isSelected={turn===TURNS.X}>{TURNS.X}</Square>
    <Square isSelected={turn===TURNS.O}>{TURNS.O}</Square>
  </section>
</main>
)}

export default App

import { Square } from "./Square.jsx"

export function WinnerModal({winner,resetGame}) {
    if (winner === null) return null

    const winnerText = winner === false ? 'Empatats' : 'Ha guanyat:'

    return (
        <section className='winner'>
          <div className='text'>
            <h2>
              {winnerText}
            </h2>
           
              {winner &&  <header className="win"><Square>{winner}</Square></header>}
           
            <footer>
              <button onClick={resetGame}>Comença de nou</button>
            </footer>
          </div>
        </section>
        )
    }
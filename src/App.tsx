import './App.css'
import { PlayerCard } from './components/PlayerCard'
import { Player } from './types/types'

function App() {

  const cards: Player[] = [
    {id: 0, name: 'Thorsten', image: '🦍'},
    {id: 1, name: 'Georgie', image: '🐒'},
  ]

  const PlayerCards = () => cards.map(card => (
    <PlayerCard key={card.id} card={card}  />
  ))

  return (
    <>
    <PlayerCards/>
    </>
  )
}

export default App

import './App.css'
import { PlayerCard } from './components/PlayerCard'
import { Player } from './types/types'

function App() {

  const cards: Player[] = [
    {
      id: 0,
      name: 'Thorsten',
      teamName: 'Daring Durians',
      picture: 'https://codeworks.blob.core.windows.net/public//assets/img/avatars/thorsten.png',
      wins: 8,
      matches: 12,
      rarity: 'rare',
      teamColor: '#90ff74',
      value: 5.34,
      count: 1
    },
    {
      id: 1,
      name: 'georgie',
      teamName: 'Rambutan Rampage',
      picture: 'https://codeworks.blob.core.windows.net/public//assets/img/avatars/georgie.png',
      wins: 10,
      matches: 20,
      rarity: 'common',
      teamColor: '#ff5789',
      value: 2.17,
      count: 2
    },
    {
      id: 2,
      name: 'Sprinkles',
      teamName: 'Daring Durians',
      picture: 'https://codeworks.blob.core.windows.net/public//assets/img/avatars/sprinkles.png',
      wins: 11,
      matches: 11,
      rarity: 'ultra-rare',
      teamColor: '#90ff74',
      value: 8.84,
      count: 0
    },
    {
      id: 3,
      name: 'Yubi',
      teamName: 'Rambutan Rampage',
      picture: 'https://codeworks.blob.core.windows.net/public//assets/img/avatars/yubi.png',
      wins: 7,
      matches: 22,
      rarity: 'common',
      teamColor: '#ff5789',
      value: 3.11,
      count: 0
    }
  ]

  const PlayerCards = () => cards.map(player => (
    <PlayerCard key={player.id} player={player}  />
  ))

  return (
    <>
    <PlayerCards/>
    </>
  )
}

export default App

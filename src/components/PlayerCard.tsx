import { useState } from "react";
import { Player } from "../types/types";
import './PlayerCard.css'

type PlayerCardProps = {player: Player}

export function PlayerCard({player}: PlayerCardProps) {

  const [count, setCount] = useState(player.count)

  const winPercentage = ((player.wins / player.matches) *100).toFixed(0)

  const teamColor = {'--team-color': player.teamColor} as React.CSSProperties 

  function incrementCount(){
    const updatedCount = count + 1
    setCount(updatedCount)
    // ⚠️ Mutations are bad
    player.count = updatedCount
    // console.log('[PlayerData]', player.name, player.count)
  }

  return (
  <div className="player-card clickable" style={teamColor} onClick={incrementCount}>
    <h4>{count}</h4>
    <img src={player.picture} alt={player.name} />
    <h2>{player.name}</h2>
    <p>{player.teamName}</p>
    <p className="stats">
      🏆 {player.wins} | 🏓 {player.matches} | {winPercentage}
    </p>
    <p>{player.rarity} - {player.value}</p>
  </div>
  )
}
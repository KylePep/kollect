import { Player } from "../types/types";

type PlayerCardProps = {card: Player}

export function PlayerCard({card}: PlayerCardProps) {
  return <div>
          <h1>{card.image}</h1>
          <h2>{card.name}</h2>
        </div>
}
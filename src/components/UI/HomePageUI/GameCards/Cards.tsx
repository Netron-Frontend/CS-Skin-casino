import React from 'react'
import type {IGameCard} from "../../../../types/IGamesCard.ts";


const Cards: React.FC<{ gameCard: IGameCard }> = ({ gameCard  }) => {
  return (
      <div style={{backgroundImage: `url(${gameCard.backgroundImageUrl})`, width: '151px', height: '137px', borderRadius: '8px',display:'flex', flexDirection: 'column-reverse', alignItems: 'center', gap: '15px'
      }}>
        <p>{gameCard.title}</p>
        <button>{gameCard.buttonText}</button>
      </div>
  )
}

export default Cards
import React from 'react'
import type {IGameCard} from "../../../../types/IGamesCard.ts";


const Cards: React.FC<{ gameCard: IGameCard }> = ({ gameCard  }) => {
  return (
      <div style={{backgroundImage: `url(${gameCard.backgroundImageUrl})`, width: '151px', height: '137px', borderRadius: '8px',display:'flex', flexDirection: 'column-reverse', alignItems: 'center', gap: '15px'
      }}>
        <p style={{
            color: '#FFFFFF',
            textShadow: '-2px -2px 0 #6473E2, 2px -2px 0 #6473E2, -2px 2px 0 #6473E2, 2px 2px 0 #6473E2, 0 0 3px #6473E2',
            fontFamily: "Syncopate, sans-serif",
            fontWeight: 700,
            fontStyle: 'normal',
            fontSize: '14px',
            width: '86px',
            height: '30px',
            textAlign: 'center',
            marginBottom: '6px'

        }}>{gameCard.title}</p>
        <button style={{
            color: '#DFECF3',
            width: '140px',
            height: '35px',
            backgroundColor: 'rgba(100, 115, 226, 0.26)',
            border: '1px solid rgba(255, 255, 255, 0.23)',
            borderRadius: '4px',
            backdropFilter: 'blur(5px)',
            fontFamily: "Libre Franklin, sans-serif",
            fontOpticalSizing: 'auto',
            fontWeight: 800,
            fontStyle: 'normal',
            fontSize: '12px',
            padding: '10px 41.5px',
        }}
        >{gameCard.buttonText}</button>
      </div>
  )
}

export default Cards
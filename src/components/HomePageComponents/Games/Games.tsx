import {gameCards, type IGameCard} from "../../../types/IGamesCard.ts";
import Cards from "../../UI/HomePageUI/GameCards/Cards.tsx";

const Games = () => {
		return (
		  <>
				  <div style={{
						  display: 'flex',
						  justifyContent: 'space-between',
						  alignItems: 'center',
						  width: '100%',
						  padding: '23px 13px 6px 13px'
				  }}>
						  <div style={{
								  display: 'flex',
								  gap: '3px',
								  justifyContent: 'space-between',
								  alignItems: 'center',
								  color: '#fff'
						  }}><img src="/HomePage/UI/Games.svg" alt=""/>Games
						  </div>
						  <button style={{display: 'flex', gap: '3px', flexDirection: 'row', alignItems: 'center', color: '#fff'}}>
								  <img src="/HomePage/UI/Calender.svg" alt=""/>Daily<img src="/HomePage/UI/down_line.svg" alt=""/>
						  </button>
				  </div>
				  <div style={{width: '100%', height: '1px', backgroundColor: '#323232', margin: '0px 0 13px 0'}}/>

				  {/* Список карточек */}
				  <div style={{display: 'flex', width: '100%', alignItems: 'center',justifyContent: 'space-between', gap: '10px', flexWrap: 'wrap'}}>
						  {gameCards.map((gameCard: IGameCard, index: number) => (
								  <Cards key={index} gameCard={gameCard}/>
						  ))}
				  </div>
		  </>
  )
}

export default Games
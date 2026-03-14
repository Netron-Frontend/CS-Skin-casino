import { Link } from "react-router-dom";
import {SidebarWrapper} from "./Sidebar.styled.ts";

const Sidebar = () => {
  return (
   <SidebarWrapper>
       <div style={{ display: "flex", flexDirection: "column", gap: "26px", alignItems: "start" }}>
        <Link to ="#" style={{display: 'flex', alignItems: "center", gap: '6px', fontSize: '12px', fontFamily: "Libre Franklin, sans-serif", fontOpticalSizing: 'auto', fontWeight: '400'}}><img src="/Sidebar/Games/game_cards.svg" alt=""/>CASES</Link>
        <Link to ="#" style={{display: 'flex', alignItems: "center", gap: '6px', fontSize: '12px', fontFamily: "Libre Franklin, sans-serif", fontOpticalSizing: 'auto', fontWeight: '400'}}><img src="/Sidebar/Games/game_battles.svg" alt=""/>BATTLES</Link>
        <Link to ="#" style={{display: 'flex', alignItems: "center", gap: '6px', fontSize: '12px', fontFamily: "Libre Franklin, sans-serif", fontOpticalSizing: 'auto', fontWeight: '400'}}><img src="/Sidebar/Games/game_roulette.svg" alt=""/>ROULETTE</Link>
        <Link to ="#" style={{display: 'flex', alignItems: "center", gap: '6px', fontSize: '12px', fontFamily: "Libre Franklin, sans-serif", fontOpticalSizing: 'auto', fontWeight: '400'}}><img src="/Sidebar/Games/game_coin.svg" alt=""/>COIN FLIP</Link>
        <Link to ="#" style={{display: 'flex', alignItems: "center", gap: '6px', fontSize: '12px', fontFamily: "Libre Franklin, sans-serif", fontOpticalSizing: 'auto', fontWeight: '400'}}><img src="/Sidebar/Games/game_pinko.svg" alt=""/>PINKO</Link>
        <Link to ="#" style={{display: 'flex', alignItems: "center", gap: '6px', fontSize: '12px', fontFamily: "Libre Franklin, sans-serif", fontOpticalSizing: 'auto', fontWeight: '400'}}><img src="/Sidebar/Games/game_dice.svg" alt=""/>ROLL</Link>
       </div>
       <div style={{width: '154px', height: '1px', backgroundColor: "white"  }} />
       <div style={{width: '172px', height: '190px', backgroundColor: "#232531", borderRadius: '12px', margin: '0 11px', padding: '15px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '10px' }} >
           <Link to ="#" style={{display: 'flex', alignItems: "center", gap: '6px', fontSize: '12px', fontFamily: "Libre Franklin, sans-serif", fontOpticalSizing: 'auto', fontWeight: '400'}} ><img src="/Sidebar/Links/steam.svg" alt=""/>Link Steam Account</Link>
           <Link to ="#" style={{display: 'flex', alignItems: "center", gap: '6px', fontSize: '12px', fontFamily: "Libre Franklin, sans-serif", fontOpticalSizing: 'auto', fontWeight: '400'}} ><img src="/Sidebar/Links/referrals.svg" alt=""/>Referrals</Link>
           <Link to ="#" style={{display: 'flex', alignItems: "center", gap: '6px', fontSize: '12px', fontFamily: "Libre Franklin, sans-serif", fontOpticalSizing: 'auto', fontWeight: '400'}} ><img src="/Sidebar/Links/gift_card.svg" alt=""/>Gift Card</Link>
           <Link to ="#" style={{display: 'flex', alignItems: "center", gap: '6px', fontSize: '12px', fontFamily: "Libre Franklin, sans-serif", fontOpticalSizing: 'auto', fontWeight: '400'}} ><img src="/Sidebar/Links/p2p.svg" alt=""/>P2P</Link>
           <Link to ="#" style={{display: 'flex', alignItems: "center", gap: '6px', fontSize: '12px', fontFamily: "Libre Franklin, sans-serif", fontOpticalSizing: 'auto', fontWeight: '400'}} ><img src="/Sidebar/Links/trade.svg" alt=""/>Trade Skin</Link>
       </div>
   </SidebarWrapper>

  )
}

export default Sidebar
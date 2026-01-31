import {SidebarWrapper} from "./Sidebar.styled.ts";

const Sidebar = () => {
  return (
   <SidebarWrapper>
       <div style={{ display: "flex", flexDirection: "column", gap: "26px", alignItems: "start" }}>
        <a style={{display: 'flex', alignItems: "center", gap: '6px'}} href="#"><img src="/Sidebar/Games/game_cards.svg" alt=""/>CASES</a>
        <a style={{display: 'flex', alignItems: "center", gap: '6px'}} href="#"><img src="/Sidebar/Games/game_battles.svg" alt=""/>BATTLES</a>
        <a style={{display: 'flex', alignItems: "center", gap: '6px'}} href="#"><img src="/Sidebar/Games/game_roulette.svg" alt=""/>ROULETTE</a>
        <a style={{display: 'flex', alignItems: "center", gap: '6px'}} href="#"><img src="/Sidebar/Games/game_coin.svg" alt=""/>COIN FLIP</a>
        <a style={{display: 'flex', alignItems: "center", gap: '6px'}} href="#"><img src="/Sidebar/Games/game_pinko.svg" alt=""/>Roll</a>
        <a style={{display: 'flex', alignItems: "center", gap: '6px'}} href="#"><img src="/Sidebar/Games/game_dice.svg" alt=""/>PINKO</a>
       </div>
       <div style={{width: '154px', height: '1px', backgroundColor: "white"  }} />
       <div style={{width: '172px', height: '190px', backgroundColor: "#232531", borderRadius: '12px', margin: '0 11px', padding: '15px' }} >
           <a style={{display: 'flex', alignItems: "center", gap: '6px'}} href="#"><img src="/Sidebar/Links/steam.svg" alt=""/>Link Steam Account</a>
           <a style={{display: 'flex', alignItems: "center", gap: '6px'}} href="#"><img src="/Sidebar/Links/referrals.svg" alt=""/>Referrals</a>
           <a style={{display: 'flex', alignItems: "center", gap: '6px'}} href="#"><img src="/Sidebar/Links/gift_card.svg" alt=""/>Gift Card</a>
           <a style={{display: 'flex', alignItems: "center", gap: '6px'}} href="#"><img src="/Sidebar/Links/p2p.svg" alt=""/>P2P</a>
           <a style={{display: 'flex', alignItems: "center", gap: '6px'}} href="#"><img src="/Sidebar/Links/trade.svg" alt=""/>Trade Skin</a>
       </div>
   </SidebarWrapper>

  )
}

export default Sidebar
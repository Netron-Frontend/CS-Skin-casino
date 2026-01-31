import {HeaderTopBox} from "./HeaderTop.styled.ts";
import Container from '@mui/material/Container';

const HeaderTop = () => {

  return (
    <HeaderTopBox>
        <Container sx={{display: 'flex', justifyContent: 'space-between'}}>
            <div
                 style={{
                     display: 'flex',
                     flexDirection: 'row',
                     alignItems: 'center',
                     gap: '20px',
                 }}
            >
              <a href="#" style={{color: "#5D6A81"}}>FAIR GAME</a>
              <a href="#" style={{color: "#5D6A81"}}>Terms & Conditions</a>
              <a href="#" style={{color: "#5D6A81"}}>Privacy Policy</a>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '20px'}}>
              <a href="#"><img src="/HomePage/socials/discord.svg" alt="discord"/></a>
              <a href="#"><img src="/HomePage/socials/instagram.svg" alt="instagram"/></a>
              <a href="#"><img src="/HomePage/socials/telegram.svg" alt="telegram"/></a>
            </div>
        </Container>
    </HeaderTopBox>
  )
}

export default HeaderTop
import {HeaderTopBox} from "./HeaderTop.styled.ts";
import Container from '@mui/material/Container';

const HeaderTop = () => {

  return (
    <HeaderTopBox>
        <Container maxWidth = "lg" sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
            <div
                 style={{
                     display: 'flex',
                     flexDirection: 'row',
                     alignItems: 'center',
                     gap: '20px',
                 }}
            >
              <a href="#" style={{color: "#5D6A81", fontSize: '12px', fontFamily: "Libre Franklin, sans-serif", fontOpticalSizing: 'auto', fontWeight: '400'}}>FAIR GAME</a>
              <a href="#" style={{color: "#5D6A81", fontSize: '12px', fontFamily: "Libre Franklin, sans-serif", fontOpticalSizing: 'auto', fontWeight: '400'}}>Terms & Conditions</a>
              <a href="#" style={{color: "#5D6A81", fontSize: '12px', fontFamily: "Libre Franklin, sans-serif", fontOpticalSizing: 'auto', fontWeight: '400'}}>Privacy Policy</a>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '20px'}}>
              <a href="#"><img src="/Header/socials/discord.svg" alt="discord"/></a>
              <a href="#"><img src="/Header/socials/instagram.svg" alt="instagram"/></a>
              <a href="#"><img src="/Header/socials/telegram.svg" alt="telegram"/></a>
            </div>
        </Container>
    </HeaderTopBox>
  )
}

export default HeaderTop
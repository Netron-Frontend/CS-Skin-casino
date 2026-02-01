import {HeaderContentBox} from "./HeaderContent.styled.ts";
import Container from '@mui/material/Container';

const HeaderContent = () => {
  return (
    <HeaderContentBox>
        <Container maxWidth="lg" sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <a href="/" style={{display: 'flex', justifyContent: 'space-between', gap: '3px', alignItems: 'center' }}><img src="/HomePage/logo.svg" alt=""/>CS Skin casino</a>
          <div style={{display: 'flex', justifyContent: 'space-between', gap: '14px', alignItems: 'center', marginRight: 'auto', marginLeft: '68px'}}>
              <a href="#" style={{display: 'flex', justifyContent: 'space-between', gap: '3px', alignItems: 'center', fontSize: '12px', fontFamily: "Libre Franklin, sans-serif", fontOpticalSizing: 'auto', fontWeight: '400'}}><img style={{width: '24px', height: '24px'}} src="/HomePage/HeaderContent/users.svg" alt="users"/>111111</a>
              <a href="#" style={{display: 'flex', justifyContent: 'space-between', gap: '3px', alignItems: 'center', fontSize: '12px', fontFamily: "Libre Franklin, sans-serif", fontOpticalSizing: 'auto', fontWeight: '400'}}><img style={{width: '24px', height: '24px'}} src="/HomePage/HeaderContent/gift.svg" alt="gift"/>Daily Free</a>
              <a href="#" style={{display: 'flex', justifyContent: 'space-between', gap: '3px', alignItems: 'center', fontSize: '12px', fontFamily: "Libre Franklin, sans-serif", fontOpticalSizing: 'auto', fontWeight: '400'}}><img style={{width: '24px', height: '24px'}} src="/HomePage/HeaderContent/ranks.svg" alt="ranks"/>Ranks</a>
              <a href="#" style={{display: 'flex', justifyContent: 'space-between', gap: '3px', alignItems: 'center', fontSize: '12px', fontFamily: "Libre Franklin, sans-serif", fontOpticalSizing: 'auto', fontWeight: '400'}}><img style={{width: '24px', height: '24px'}} src="/HomePage/HeaderContent/help.svg" alt="help"/>Help</a>
          </div>
          <div style={{display: 'flex', justifyContent: 'space-between', gap: '15px', alignItems: 'center'}}>
              <div>
                  lang
              </div>
              <a href="#" style={{backgroundColor: '#3E495F', padding: '6.5px 28px', height: '28px', border: '1px solid rgba(246, 246, 246, 0.12)', borderRadius: '12px', fontSize: '12px', fontFamily: "Libre Franklin, sans-serif"}}>Log in</a>
              <a href="#" style={{backgroundColor: '#1CB0FE', padding: '6.5px 24px', height: '28px', border: '1px solid rgba(255, 255, 255, 0.25)', borderRadius: '12px', fontSize: '12px', fontFamily: "Libre Franklin, sans-serif"}}>Sign up</a>
              <div style={{height: '27.5px', width: '1px', backgroundColor: '#FFF'}} />
              <a  href="#"><img style={{width: '24px', height: '24px'}} src="/HomePage/HeaderContent/setting.svg" alt=""/></a>
          </div>
      </Container>
    </HeaderContentBox>
  )
}

export default HeaderContent
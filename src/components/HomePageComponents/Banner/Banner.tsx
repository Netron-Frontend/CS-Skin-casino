
const Banner = () => {
  return (
		  <div style={{ backgroundImage: `url(/HomePage/Banner/advertising.png)`, width: '965px', height: '285px', borderRadius: '8px', display: 'flex', alignItems: 'flex-start', flexDirection: 'column', gap: '13px', padding: '64px 58px' }}>
				  <p style={{ fontFamily: "Syncopate, sans-serif", fontWeight: 700, fontStyle: 'normal', fontSize: '30px', width: '312px',	height: '93px', color: '#fff' }}
				  >SIGN UP TODAY AND RECIEVE $1,000</p>
				  <button style={{width:'204px', height: '50px', padding: '16.5px 57.5px', backgroundColor: '#1CB0FE', borderRadius: '8px', fontFamily: "Syncopate, sans-serif", fontWeight: 700, fontStyle: 'normal', fontSize: '16px', color: '#fff'}}
				  ><a href="#">SIGN UP</a></button>
		  </div>
  )
}

export default Banner
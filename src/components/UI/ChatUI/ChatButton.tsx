
const ChatButton = () => {
  return (
      <button style={{
        width: '40px',
        height: '32px',
        padding: '10px',
        borderRadius: '0px 12px 12px 0px',
        backgroundColor: '#1CB0FE',
        border: '1px solid rgba(112, 206, 255, 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'row',
      }}
              onClick={() => {}}>
        <a href="#" style={{backgroundColor: '#70CEFF', borderRadius: '50%', width: '100%'}}>
          <img src="/Chat/send_button.svg" alt="chat_button" style={{width: '24px', height: '24px'}}/>
        </a>
      </button>
  )
}

export default ChatButton
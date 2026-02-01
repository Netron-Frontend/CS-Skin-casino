import ChatButton from "./ChatButton.tsx";

const ChatInput = () => {
  return (
    <>
        <img src="/ChatImages/message.svg" alt="" style={{width: '27px', height: '24px'}}/>
        <div style={{width: '1px', height: '23px', backgroundColor: 'white'}}/>
        <input type="text" placeholder="Enter your text" style={{backgroundColor: '#303137'}}/>
        <ChatButton />
    </>
  )
}

export default ChatInput
import ChatInput from "../../UI/ChatUI/ChatInput.tsx";
import {ChatWrapper} from "./Chat.styled.ts";

const Chat = () => {
  return (
		  <ChatWrapper>
					<div>
							asdasd
							asdasd
							asd
					</div>
				  <div style={{filter: 'drop-shadow(5px 4px 5px #3D3D3D)', width: '315px',}}>
				    <div style={{ width: '315px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderRadius: '0px 12px 12px 0px'}}>
							  <ChatInput />
						</div>
				  </div>
		  </ChatWrapper>
  )
}

export default Chat
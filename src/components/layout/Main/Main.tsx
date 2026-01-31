import Sidebar from "../Sidebar/Sidebar.tsx";
import Chat from "../Chat/Chat.tsx";

interface MainProps {
		children?: React.ReactNode;
}

const Main = ({ children }: MainProps) => {
  return (
    <div style={{ backgroundColor: "#04081F", maxWidth: "100vw", minHeight: "100vh", flex: "1 0 auto", display: 'flex'}}>
		    <Sidebar />
		    {children}
		    <Chat />
    </div>
  )
}

export default Main
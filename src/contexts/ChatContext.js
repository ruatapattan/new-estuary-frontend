import { createContext, useState } from "react";

const ChatContext = createContext();

function ChatContextProvider(props) {
	const [chatRoomInfo, setChatRoomInfo] = useState({});
	const [isGroupChat, setIsGroupChat] = useState("");

	return (
		<ChatContext.Provider value={{ chatRoomInfo, setChatRoomInfo, isGroupChat, setIsGroupChat }}>
			{props.children}
		</ChatContext.Provider>
	);
}
export { ChatContext, ChatContextProvider };

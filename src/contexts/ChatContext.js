import { createContext, useState } from "react";

const ChatContext = createContext();

function ChatContextProvider(props) {
	const [chatRoomId, setChatRoomId] = useState("");
	const [isGroupChat, setIsGroupChat] = useState("");

	return (
		<ChatContext.Provider value={{ chatRoomId, setChatRoomId, isGroupChat, setIsGroupChat }}>
			{props.children}
		</ChatContext.Provider>
	);
}
export { ChatContext, ChatContextProvider };

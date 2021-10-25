import { createContext, useState } from "react";

const ChatContext = createContext();

function ChatContextProvider(props) {
	const [chatRoomId, setChatRoomId] = useState("");

	return <ChatContext.Provider value={{ chatRoomId, setChatRoomId }}>{props.children}</ChatContext.Provider>;
}
export { ChatContext, ChatContextProvider };

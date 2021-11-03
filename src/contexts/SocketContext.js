import { createContext, useContext, useEffect, useRef, useState } from "react";
import * as io from "socket.io-client";
import { API_URL } from "../config/env";
import { AuthContext } from "./AuthContext";

const SocketContext = createContext();

function SocketContextProvider(props) {
	const { user, userRole } = useContext(AuthContext);
	// const socketRef = useRef(io.connect(API_URL));
	// const socketRef = useRef();
	const [socketState, setSocketState] = useState(null);
	const [userAdded, setUserAdded] = useState(false);
	const [unreadNotificationCount, setUnreadNotificationCount] = useState(0);
	const [unreadChatCount, setUnreadChatCount] = useState(0);

	useEffect(() => {
		if (userRole !== "guest") {
			// socketRef.current = io.connect(API_URL);
			setSocketState(io.connect(API_URL));
			// // console.log("new");
			// // socketRef.current.emit("join room", user.id, chatRoomInfo.id, isGroupChat);
			// socketRef.current.emit("new user", user.id);
		}
	}, [user]);

	useEffect(() => {
		if (socketState !== null) {
			socketState.emit("new user", user.id);
			setUserAdded(true);
		}
	}, [socketState]);

	const resetNotificationBadge = () => {
		setUnreadNotificationCount(0);
		socketState.emit("notifications viewed", user.id);
	};
	const resetChatBadge = () => {
		setUnreadChatCount(0);
		socketState.emit("chat notifications viewed", user.id);
	};

	const sendNotification = (
		senderId,
		senderName,
		receiverId,
		actionType,
		actionOn,
		columnToSave,
		columnToSaveId,
		content,
		newMemberId
	) => {
		console.log(
			senderId,
			senderName,
			receiverId,
			actionType,
			actionOn,
			columnToSave,
			columnToSaveId,
			content,
			newMemberId
		);
		socketState.emit("send notification", {
			senderId,
			senderName,
			receiverId,
			actionType,
			actionOn,
			columnToSave,
			columnToSaveId,
			content,
			newMemberId,
		});
	};

	return (
		<SocketContext.Provider
			value={{
				// socketRef
				socketState,
				userAdded,
				sendNotification,
				resetNotificationBadge,
				resetChatBadge,
				unreadNotificationCount,
				setUnreadNotificationCount,
				unreadChatCount,
				setUnreadChatCount,
			}}
		>
			{props.children}
		</SocketContext.Provider>
	);
}
export { SocketContext, SocketContextProvider };

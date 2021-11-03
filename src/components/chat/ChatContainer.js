import {
	ListItem,
	Avatar,
	Button,
	Collapse,
	List,
	ListItemAvatar,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Typography,
	Badge,
} from "@mui/material";
import { API_URL } from "../../config/env";
import * as io from "socket.io-client";
import { Box, styled, typography } from "@mui/system";
import { useContext, useEffect, useRef, useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import Send from "@mui/icons-material/Send";
import { ChatContext } from "../../contexts/ChatContext";
import { AuthContext } from "../../contexts/AuthContext";
import { SocketContext } from "../../contexts/SocketContext";
function ChatContainer() {
	const ChatBlob = styled(Box)(({ theme, who }) => ({
		minWidth: "25%",
		borderRadius: 8,
		padding: "0.5rem",
		backgroundColor: who === "me" ? theme.palette.primary.main : theme.palette.secondary.main,
		color: who === "me" ? "white" : theme.palette.text.secondary,
	}));

	const { chatRoomInfo, setChatRoomInfo, isGroupChat } = useContext(ChatContext);
	console.log("chatroomInfo", chatRoomInfo);

	const { user } = useContext(AuthContext);
	// const socketRef = useRef();
	// const socketRef = useRef(io.connect(API_URL));
	const [chatLog, setChatLog] = useState([]);
	// const [sent, setSent] = useState(false);
	const [membersInfo, setMembersInfo] = useState([]);
	const [message, setMessage] = useState("");
	const chatScrollRef = useRef();

	// const { socketRef } = useContext(SocketContext);
	const { socketState } = useContext(SocketContext);

	console.log(chatRoomInfo);
	// console.log("join room", user.id, chatRoomInfo.id, isGroupChat);
	useEffect(() => {
		// console.log(isGroupChat);
		// socketRef.current = io.connect(API_URL);
		// if (user.id ===  )
		// socketRef.current.emit("join room", user.id, chatRoomInfo.id, isGroupChat);
		socketState.emit("join room", user.id, chatRoomInfo.id, isGroupChat);

		// socketRef.current.on("fetched log", (chatLog, chatMembers) => {
		socketState.on("fetched log", (chatLog, chatMembers) => {
			// alert("hi");
			// console.log("fetched members", chatMembers);
			setMembersInfo(chatMembers);
			setChatLog(chatLog);
		});

		socketState.on("n", (newMessage) => {
			// socketRef.current.on("n", (newMessage) => {
			// alert("in event");
			console.log(newMessage);
			// const clone = [...chatLog];
			// clone.push(newMessage);
			console.log(`chatLog after`, chatLog);
			// setChatLog(clone);
			setChatLog((cur) => [...cur, newMessage]);
		});
		// }, [socketRef]);
	}, [chatRoomInfo]);

	useEffect(() => {
		chatScrollRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [chatLog]);

	// useEffect(() => {
	// 	// console.log("useeffect");
	// 	socketRef.current.on("n", (newMessage) => {
	// 		// alert("in event");
	// 		console.log(newMessage);
	// 		// const clone = [...chatLog];
	// 		// clone.push(newMessage);
	// 		// setChatLog(newMessage);
	// 		console.log(`chatLog`, chatLog);
	// 	});
	// }, [sent]);

	console.log(`oldChatLog`, chatLog);
	// console.log("chatlog", chatLog);

	// console.log("chatroominfo", chatRoomInfo);
	// console.log("chatmemberstate", membersInfo);

	function sendMessage(e) {
		e.preventDefault();
		if (message !== "") {
			const messageObj = {
				content: message,
				senderId: user.id,
				roomId: chatRoomInfo.id,
				isGroupChat,
			};
			socketState.emit("send message", messageObj);
			setMessage("");
		}
	}

	function handleChangeInputMessage(e) {
		setMessage(e.target.value);
	}

	const [open, setOpen] = useState(true);

	const handleClickToggleChatBox = () => {
		setOpen(!open);
	};

	const handleLeaveChat = () => {
		setChatRoomInfo({});
		// socketState.current.emit("leave-room");
		// socketRef.current.emit("leave-room");
	};

	return (
		<>
			<Box
				className="CHATTTTTTTTTTTTTTT"
				sx={{
					boxShadow: 3,
					width: {
						xs: "100vw",
						sm: "50vw",
						md: "25vw",
					},
					height: open ? "70vh" : "5vh",
					position: "fixed",
					bottom: "0",
					right: "0",
					zIndex: "10000",
					marginRight: { sm: 0, md: "1rem" },
					marginBottom: "1rem",
					display: "flex",
					flexDirection: "column",
					backgroundColor: "white",
				}}
			>
				<Button
					sx={{ borderRadius: 0, width: "100%" }}
					height="5vh"
					variant="contained"
					onClick={handleClickToggleChatBox}
					color="primary"
				>
					{chatRoomInfo.name}
				</Button>
				<Button sx={{ position: "absolute", right: 0 }} onClick={() => handleLeaveChat()}>
					<Typography color="error">X</Typography>
				</Button>
				{/* </Badge> */}
				<Collapse
					className="COLLAPSE"
					in={open}
					timeout="auto"
					unmountOnExit
					sx={{
						border: "1px solid black",

						height: "100% !important",
						"& .MuiCollapse-wrapperInner": {
							display: "flex",
							flexDirection: "column",
						},
						"& .MuiCollapse-wrapper": {
							height: "100%",
						},
					}}
				>
					<Box
						className="UNDERCOLLAPSE"
						sx={{
							// width: "100%",
							boxSizing: "border-box",
							flexGrow: 1,
							// padding: "1rem",
							display: "flex",
							flexDirection: "column",
							overflow: "scroll",
						}}
					>
						{chatLog.map((item, idx) => {
							//render my side of message if id matches
							// console.log("ad");
							if (item.senderId === user.id) {
								return (
									<>
										<ListItem ref={chatScrollRef} sx={{ display: "flex", justifyContent: "right" }}>
											{/* <ListItemText
												primary={item.body}
												secondary="me"
												sx={{ textAlign: "right" }}
											/> */}
											<Box
												sx={{
													display: "flex",
													justifyContent: "right",
													flexDirection: "column",
													maxWidth: "80%",
													overflow: "hidden",
												}}
											>
												<ChatBlob
													sx={{ wordWrap: "break-word" }}
													width="100%"
													who="me"
													display="flex"
													flexDirection="column"
												>
													<Typography sx={{ textAlign: "right" }}>{item.content}</Typography>
												</ChatBlob>
												<Typography
													sx={{ textAlign: "right" }}
													variant="caption"
													color="text.secondary"
												>
													{item.createdAt}
												</Typography>
											</Box>
										</ListItem>
									</>
								);
							}
							//if not mine, render the other side's message
							let chatterName;
							let pfp;
							membersInfo.forEach((elem) => {
								// console.log();
								if (elem.id === item.senderId) {
									chatterName = elem.username;
									pfp = elem.profilePic;
								}
							});
							// console.log(chatterName);
							return (
								<>
									<ListItem ref={chatScrollRef} alignItems="flex-start">
										<ListItemAvatar>
											<Avatar src={pfp} />
										</ListItemAvatar>
										{/* <Box display="flex" flexDirection="column">
											<Typography color="text.secondary">{item.body}</Typography>
											<Typography color="text.primary">{chatterName}</Typography>
										</Box> */}

										<Box
											sx={{
												display: "flex",
												justifyContent: "right",
												flexDirection: "column",
												maxWidth: "80%",
											}}
										>
											<Typography color="text.primary">{chatterName}</Typography>

											<ChatBlob
												sx={{ wordWrap: "break-word" }}
												width="100%"
												display="flex"
												flexDirection="column"
											>
												<Typography>{item.content}</Typography>
											</ChatBlob>
											<Typography variant="caption" color="text.secondary">
												{item.createdAt}
											</Typography>
										</Box>
									</ListItem>
								</>
							);
						})}
					</Box>
					<Box
						// component="form"
						// onSubmit={sendMessage}
						style={{ width: "100%", boxSizing: "border-box", display: "flex" }}
					>
						<input
							value={message}
							onChange={handleChangeInputMessage}
							placeholder="say something..."
							style={{
								paddingLeft: "1rem",
								width: "80%",
								boxSizing: "border-box",
								height: "2rem",
								border: "none",
								borderTop: "1px solid black",
							}}
						/>
						<Button
							onClick={sendMessage}
							type="button"
							variant="gradient"
							sx={{ height: "2rem", width: "20%", borderRadius: "0" }}
						>
							<SendIcon />
						</Button>
					</Box>
				</Collapse>
			</Box>
		</>
	);
}

export default ChatContainer;

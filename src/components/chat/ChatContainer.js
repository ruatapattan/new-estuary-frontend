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
import { Box, styled, typography } from "@mui/system";
import { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import Send from "@mui/icons-material/Send";
function ChatContainer({ chatRoomId, setChatRoomId }) {
	const ChatBlob = styled(Box)(({ theme, who }) => ({
		minWidth: "25%",
		borderRadius: 8,
		padding: "0.5rem",
		backgroundColor: who === "me" ? theme.palette.primary.main : theme.palette.secondary.main,
		color: who === "me" ? "white" : theme.palette.text.secondary,
	}));

	const [yourId, setYourId] = useState("1");

	//will get these from axios where chatroomId
	const [membersInfo, setMembersInfo] = useState([
		{
			id: "1",
			name: "jondoe",
		},
		{
			id: "2",
			name: "jane",
		},
	]);
	const [messages, setMessages] = useState({
		// chatRoomId: 1,
		// participants: [
		// 	{
		// 		participantId: 2,
		// 		name: "Jane",
		// 	},
		// 	{
		// 		participantId: 1,
		// 		name: "jondoe",
		// 	},
		// ],
		chatRoomName: "jane",
		chatLog: [
			{
				id: "1",
				body: "hi",
			},
			{
				id: "2",
				body: "hi",
			},
			{
				id: "2",
				body: "how are you?",
			},
			{
				id: "1",
				body: "p gud u?",
			},
			{
				id: "2",
				body: "I'm alright",
			},
			{
				id: "2",
				body: "I'm alright",
			},
			{
				id: "2",
				body: "I'm alright",
			},
			{
				id: "2",
				body: "I'm alright",
			},
			{
				id: "2",
				body: "I'm alright",
			},
			{
				id: "2",
				body: "I'm alright",
			},
			{
				id: "2",
				body: "I'm alright",
			},
			{
				id: "1",
				body: "ok I get it",
			},
		],
	});
	const [message, setMessage] = useState("");
	console.log(messages);

	function sendMessage(e) {
		e.preventDefault();
		const messageObj = {
			body: message,
			id: yourId,
		};
		setMessage("");
		// socketRef.current.emit("send message", messageObj);
	}

	function handleChange(e) {
		setMessage(e.target.value);
	}

	const [open, setOpen] = useState(true);

	const handleClickToggleChatBox = () => {
		setOpen(!open);
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
					// marginLeft: { sm: 0, md: "240px" },
					// border: "3px solid black",
					// position: "sticky",
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
					{messages.chatRoomName}
					<Button sx={{ position: "absolute", right: 0 }} onClick={() => setChatRoomId("")}>
						<Typography color="error">X</Typography>
					</Button>
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
						{messages.chatLog.map((item, idx) => {
							//render my side of message if id matches
							console.log("ad");
							if (item.id === yourId) {
								return (
									<>
										<ListItem sx={{ display: "flex", justifyContent: "right" }}>
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
												}}
											>
												<ChatBlob who="me" display="flex" flexDirection="column">
													<Typography sx={{ textAlign: "right" }}>{item.body}</Typography>
												</ChatBlob>
												<Typography color="text.primary" sx={{ textAlign: "right" }}>
													me
												</Typography>
											</Box>
										</ListItem>
									</>
								);
							}
							//if not mine, render the other side's message
							let chatterName;
							membersInfo.forEach((elem) => {
								console.log();
								if (elem.id === item.id) {
									chatterName = elem.name;
								}
							});
							console.log(chatterName);
							return (
								<>
									<ListItem alignItems="flex-start">
										<ListItemAvatar>
											<Avatar src="/static/images/avatar/1.jpg" />
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
											}}
										>
											<ChatBlob display="flex" flexDirection="column">
												<Typography sx={{ textAlign: "right" }}>{item.body}</Typography>
											</ChatBlob>
											<Typography color="text.primary">{chatterName}</Typography>
										</Box>
									</ListItem>
								</>
							);
						})}
					</Box>
					<Box
						component="form"
						onSubmit={sendMessage}
						style={{ width: "100%", boxSizing: "border-box", display: "flex" }}
					>
						<input
							value={message}
							onChange={handleChange}
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
						<Button variant="gradient" sx={{ height: "2rem", width: "20%", borderRadius: "0" }}>
							<SendIcon />
						</Button>
					</Box>
				</Collapse>
			</Box>
		</>
	);
}

export default ChatContainer;

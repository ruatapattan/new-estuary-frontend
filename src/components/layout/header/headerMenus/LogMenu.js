import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { IconButton, Menu, MenuItem } from "@mui/material";
import limitStringLength from "../../../../services/limitStringLength";
import { useContext, useEffect, useState } from "react";
import { ChatContext } from "../../../../contexts/ChatContext";
import axios from "../../../../config/axios";
import { SocketContext } from "../../../../contexts/SocketContext";
import { AuthContext } from "../../../../contexts/AuthContext";
import { useHistory } from "react-router-dom";

function LogMenu({ anchorLogEl, handleLogMenuClose, type }) {
	const { user } = useContext(AuthContext);
	// const { socketRef } = useContext(SocketContext);
	const { socketState, userAdded, setUnreadNotificationCount } = useContext(SocketContext);
	const history = useHistory();
	const { setChatRoomInfo } = useContext(ChatContext);
	const menuId = "primary-chatLog-menu";
	const [log, setLog] = useState([]);
	const isChatLogMenuOpen = Boolean(anchorLogEl);

	// console.log(log);

	const handleClickStartChat = (id, name) => {
		handleLogMenuClose();
		setChatRoomInfo({ id, name });
	};
	const handleClickOnItem = (params, chatRoomId) => {
		if (type === "notification") {
			handleLogMenuClose();
			history.push(params);
		} else if (type === "chat") {
			alert(chatRoomId);
			handleLogMenuClose();
		}
	};

	useEffect(() => {
		console.log("to fetchhhhhhh");

		// if (type === "notification" && socketState !== null && user) {
		if (type === "notification" && userAdded) {
			console.log("userId", user.id);
			socketState.emit("fetch notification", user.id);
			socketState.on("fetched notification", (notificationLog, unreadNotificationCount) => {
				// alert("hi");
				// console.log("fetched members", chatMembers);
				setLog(notificationLog);
				setUnreadNotificationCount(unreadNotificationCount);
			});

			socketState.on("new notification", (newNotification) => {
				alert("new noti incoming");
				console.log("new notification", newNotification);
				// setChatLog((cur) => [...cur, { senderId: user.id, content: message }]);
				setLog((cur) => [...cur, newNotification]);
			});
		}
	}, [userAdded]);

	console.log("log", log);

	// console.log("socketRef", socketRef.current);

	return (
		<Menu
			anchorEl={anchorLogEl}
			anchorOrigin={{
				vertical: "bottom",
				horizontal: "right",
			}}
			id={menuId}
			keepMounted
			transformOrigin={{
				vertical: "top",
				horizontal: "right",
			}}
			open={isChatLogMenuOpen}
			onClose={handleLogMenuClose}
		>
			<MenuItem>
				<Typography color="text.secondary" variant="h6">
					Recent {type}
				</Typography>
			</MenuItem>
			<List
				sx={{ width: { xs: "100vw", sm: "50vw", md: "25vw", maxHeight: "50vh" }, bgcolor: "background.paper" }}
			>
				{log.map((item, index) => (
					<ListItem
						key={index}
						onClick={() => handleClickOnItem(item.params, item.chatRoomId)}
						// onClick={() => handleClickStartChat(item.chatRoomInfo.id, item.chatRoomInfo.name)}
						// onClick={() => handleClickRedirect(item.param)}
						alignItems="flex-start"
						width="100%"
						sx={{
							"&:hover": {
								background:
									"linear-gradient(90deg, rgba(64, 169, 223, 1) 0%, rgba(115, 194, 130, 0.5) 100%)",
								color: "white",
							},
						}}
					>
						<ListItemAvatar>
							<Avatar src={item.profilePic} />
						</ListItemAvatar>
						<ListItemText
							primary={item.senderName}
							secondary={
								<>
									{type === "notification" && (
										<Typography
											sx={{ display: "inline", fontWeight: "bold" }}
											component="span"
											variant="body2"
										>
											Has {item.actionType} your {item.actionOn}
											{item.content && ":"}
										</Typography>
									)}

									{item.content && (
										<Typography
											variant="body2"
											color="text.secondary"
											sx={{ paddingRight: "1rem", overflowWrap: "break-word" }}
										>
											{limitStringLength(item.content, 70)}
										</Typography>
									)}
								</>
							}
						/>
					</ListItem>
				))}
				{/* {log.map((item, index) => (
					<ListItem
						key={index}
						{...(type === "chat" && {
							onClick: () => handleClickStartChat(item.chatRoomInfo.id, item.chatRoomInfo.name),
						})}
						alignItems="flex-start"
						width="100%"
						sx={{
							"&:hover": {
								background:
									"linear-gradient(90deg, rgba(64, 169, 223, 1) 0%, rgba(115, 194, 130, 0.5) 100%)",
								color: "white",
							},
						}}
					>
						<ListItemAvatar>
							<Avatar src="/static/images/avatar/1.jpg" />
						</ListItemAvatar>
						<ListItemText
							primary={item.name}
							secondary={
								<>
									{type === "notification" && (
										<Typography
											sx={{ display: "inline", fontWeight: "bold" }}
											component="span"
											variant="body2"
										>
											Has {item.actionType} your {item.actionOn}
											{item.content && ":"}
										</Typography>
									)}

									{item.content && (
										<Typography
											variant="body2"
											color="text.secondary"
											sx={{ paddingRight: "1rem", overflowWrap: "break-word" }}
										>
											{limitStringLength(item.content, 70)}
										</Typography>
									)}
								</>
							}
						/>
					</ListItem>
				))} */}
				<Divider variant="inset" component="li" />
			</List>
		</Menu>
	);
}

export default LogMenu;

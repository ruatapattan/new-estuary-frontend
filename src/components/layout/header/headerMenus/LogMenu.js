import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { IconButton, Menu, MenuItem } from "@mui/material";
import limitStringLength from "../../../../services/limitStringLength";

function LogMenu({ anchorLogEl, handleLogMenuClose, type, log, setChatRoomId }) {
	const menuId = "primary-chatLog-menu";

	const isChatLogMenuOpen = Boolean(anchorLogEl);

	// console.log(log);

	const handleClickStartChat = (id) => {
		handleLogMenuClose();
		setChatRoomId(id);
	};

	return (
		<Menu
			anchorEl={anchorLogEl}
			anchorOrigin={{
				vertical: "bottom",
				horizontal: "right",
			}}
			id={menuId}
			keepMounted
			transformOrigin={
				{
					// vertical: "top",
					// horizontal: "right",
				}
			}
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
				{log.map((item) => (
					<ListItem
						{...(type === "chat" && { onClick: () => handleClickStartChat(item.chatRoomId) })}
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
				))}
				<Divider variant="inset" component="li" />
			</List>
		</Menu>
	);
}

export default LogMenu;

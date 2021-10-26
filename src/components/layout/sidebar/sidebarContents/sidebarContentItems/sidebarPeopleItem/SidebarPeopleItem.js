import {
	Avatar,
	Button,
	Collapse,
	Divider,
	IconButton,
	Link,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Menu,
} from "@mui/material";
import WavesIcon from "@mui/icons-material/Waves";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import ForumIcon from "@mui/icons-material/Forum";
import { Box, styled } from "@mui/system";
import { useContext, useState } from "react";
// import { SidePopupContext } from "../../../../../contexts/SidePopupContext";
import AccountCircle from "@mui/icons-material/AccountCircle";
import TextsmsIcon from "@mui/icons-material/Textsms";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { ChatContext } from "../../../../../../contexts/ChatContext";

function SidebarPeopleItem({ item, type }) {
	const { setChatRoomId, setIsGroupChat } = useContext(ChatContext);
	const [open, setOpen] = useState(false);
	const handleClickOpenSidebarItem = () => {
		setOpen(!open);
	};
	const PeopleItem = styled(ListItem)(({ theme }) => ({
		// backgroundColor: alpha(theme.palette.common.white, 0.15),
		width: "100%",
		color: theme.palette.text.secondary,
	}));

	const handleClickChat = () => {
		handleClickOpenSidebarItem();
		console.log(item.id);
		setIsGroupChat(type === "people" ? false : type === "community" ? true : "");
		setChatRoomId(item.id);
	};

	return (
		<>
			<PeopleItem button key={item.id} onClick={handleClickOpenSidebarItem}>
				<ListItemIcon>
					<Avatar sx={{ background: "inherit" }} src={item.profilePic} />
				</ListItemIcon>
				<ListItemText primary={item.name} />
				{open ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
			</PeopleItem>

			<Collapse in={open} timeout="auto" unmountOnExit>
				<List component="div" disablePadding>
					<Box width="100%" display="flex" justifyContent="center">
						<Link
							sx={{ textDecoration: "none", display: "flex", justifyContent: "center", width: "90%" }}
							href={type === "people" ? `profile/${item.id}` : `community/${item.id}`}
						>
							<Button
								variant="gradient"
								sx={{ marginY: 1, display: "flex", justifyContent: "center", width: "100%" }}
							>
								<ListItemIcon>
									<AccountCircle />
								</ListItemIcon>
								<ListItemText primary="Visit" />
							</Button>
						</Link>
					</Box>
					<Box width="100%" display="flex" justifyContent="center">
						<Button
							variant="gradient"
							key={item.id}
							sx={{ marginY: 1, display: "flex", justifyContent: "center", width: "90%" }}
							onClick={handleClickChat}
						>
							<ListItemIcon>
								<TextsmsIcon />
							</ListItemIcon>
							<ListItemText primary="Chat" />
						</Button>
					</Box>
					);
					{/* })} */}
				</List>
			</Collapse>
		</>
	);
}

export default SidebarPeopleItem;

import { Avatar, Badge, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import TextsmsIcon from "@mui/icons-material/Textsms";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../contexts/AuthContext";
import { SocketContext } from "../../../../contexts/SocketContext";

import axios from "../../../../config/axios";
function UserNav({
	handleProfileMenuOpen,
	// handleMobileMenuOpen,
	handleChatLogMenuOpen,
	handleNotificationMenuOpen,
}) {
	const { unreadNotificationCount } = useContext(SocketContext);
	const menuId = "primary-search-account-menu";
	const [userInfo, setUserInfo] = useState({});
	const mobileMenuId = "primary-search-account-menu-mobile";
	const { user } = useContext(AuthContext);
	console.log(user);

	useEffect(() => {
		const callProfile = async () => {
			await axios
				.get(`/profile/${user.id}`)
				.then((res) => {
					setUserInfo(res.data.user);
				})
				.catch((err) => {
					console.dir(err);
				});
		};
		callProfile();
	}, []);

	return (
		<>
			{/* <Box sx={{ display: { xs: "none", md: "flex" } }}> */}
			<Box sx={{ display: "flex" }}>
				<IconButton
					size="large"
					aria-label="show 17 new notifications"
					color="inherit"
					onClick={handleNotificationMenuOpen}
				>
					<Badge badgeContent={unreadNotificationCount} color="error">
						<NotificationsIcon />
					</Badge>
				</IconButton>
				<IconButton
					size="large"
					aria-label="show 17 new notifications"
					color="inherit"
					onClick={handleChatLogMenuOpen}
				>
					<Badge badgeContent={1} color="error">
						<TextsmsIcon />
					</Badge>
				</IconButton>
				<IconButton
					size="large"
					edge="end"
					aria-label="account of current user"
					aria-controls={menuId}
					aria-haspopup="true"
					onClick={handleProfileMenuOpen}
					color="inherit"
				>
					{/* <AccountCircle /> */}
					<Avatar src={userInfo.profilePic} />
				</IconButton>
			</Box>
			{/* <Box sx={{ display: { xs: "flex", md: "none" } }}>
				<IconButton
					size="large"
					aria-label="show more"
					aria-controls={mobileMenuId}
					aria-haspopup="true"
					onClick={handleMobileMenuOpen}
					color="inherit"
				>
					<Avatar src="https://res.cloudinary.com/dbaavttgh/image/upload/v1634039431/euopnlkdkag488x5l8jc.png" />

				</IconButton>
			</Box> */}
		</>
	);
}

export default UserNav;

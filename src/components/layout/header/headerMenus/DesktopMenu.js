import AccountCircle from "@mui/icons-material/AccountCircle";
import { IconButton, Link, Menu, MenuItem } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import AddIcon from "@mui/icons-material/Add";
import { Box } from "@mui/system";
import ForumIcon from "@mui/icons-material/Forum";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import axios from "../../../../config/axios";

function DesktopMenu({ anchorEl, handleMenuClose, handleClickSignOut, handleToggleBackdrop }) {
	const history = useHistory();
	const menuId = "primary-search-account-menu";
	const isMenuOpen = Boolean(anchorEl);
	const { user } = useContext(AuthContext);
	const [ownedCommunityId, setOwnedCommunityId] = useState(null);

	useEffect(() => {
		if (user) {
			const fetch = async () => {
				const ownedCommunityId = await axios.get(`/user/${user.id}/ownedCommunity`);
				setOwnedCommunityId(ownedCommunityId.data.ownedCommunityId);
			};
			fetch();
		}
	}, [user]);

	return (
		<Menu
			anchorEl={anchorEl}
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
			open={isMenuOpen}
			onClose={handleMenuClose}
		>
			<MenuItem onClick={handleMenuClose}>
				<Link
					href={`/profile/${user?.id}`}
					color="text.primary"
					underline="none"
					display="flex"
					alignItems="center"
				>
					<IconButton
						size="large"
						aria-label="account of current user"
						aria-controls="primary-search-account-menu"
						aria-haspopup="true"
						color="inherit"
					>
						<AccountCircle />
					</IconButton>
					<p>Profile</p>
				</Link>
			</MenuItem>
			{!ownedCommunityId ? (
				<MenuItem onClick={handleToggleBackdrop}>
					<Box color="text.primary" underline="none" display="flex" alignItems="center">
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="primary-search-account-menu"
							aria-haspopup="true"
							color="inherit"
						>
							<AddIcon />
						</IconButton>
						<p>Create Community</p>
					</Box>
				</MenuItem>
			) : (
				<MenuItem onClick={() => history.push(`/community/${ownedCommunityId}`)}>
					<Box color="text.primary" underline="none" display="flex" alignItems="center">
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="primary-search-account-menu"
							aria-haspopup="true"
							color="inherit"
						>
							<ForumIcon />
						</IconButton>
						<p>My Community</p>
					</Box>
				</MenuItem>
			)}
			<MenuItem onClick={handleClickSignOut}>
				{/* <Link href="#" underline="none" display="flex" alignItems="center"> */}
				<IconButton
					size="large"
					aria-label="account of current user"
					aria-controls="primary-search-account-menu"
					aria-haspopup="true"
					color="inherit"
				>
					<LogoutIcon />
				</IconButton>
				<p>Sign Out</p>
				{/* </Link> */}
			</MenuItem>
		</Menu>
	);
}

export default DesktopMenu;

import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Button, Collapse, List, ListItem, ListItemText } from "@mui/material";
import { styled } from "@mui/system";
import { useState } from "react";

const options = [{ name: "Navigation" }, { name: "People" }, { name: "Community" }];

function SidebarNavHeader({ isShowing, setIsShowing }) {
	const [open, setOpen] = useState(false);
	const handleClickOpenSidebarHeader = () => {
		setOpen(!open);
	};

	const NavButton = styled(Button)(({ theme }) => ({
		// backgroundColor: alpha(theme.palette.common.white, 0.15),
		width: "100%",
		color: theme.palette.text.secondary,
		"&:hover": {
			backgroundColor:
				isShowing === "Navigation"
					? theme.palette.secondary.main
					: isShowing === "People"
					? theme.palette.secondary.light
					: theme.palette.text.primary,
			color: "white",
		},
	}));

	const handleClickNavType = (type) => {
		setIsShowing(type);
		setOpen(!open);
	};

	return (
		<>
			<ListItem sx={{ display: "flex", justifyContent: "center" }} onClick={handleClickOpenSidebarHeader}>
				<NavButton variant="text">
					<ListItemText primary={isShowing === "Navigation" ? isShowing : `${isShowing}`} />
					{open ? <ExpandLess /> : <ExpandMore />}
				</NavButton>
			</ListItem>
			<Collapse in={open} timeout="auto" unmountOnExit>
				<List component="div" disablePadding>
					{options.map((item) => {
						if (item.name !== isShowing) {
							return (
								<ListItem
									key={item}
									sx={{ display: "flex", justifyContent: "center" }}
									onClick={() => handleClickNavType(item.name)}
								>
									<NavButton variant="text">
										<ListItemText sx={{ textTransform: "none" }} primary={item.name} />
									</NavButton>
								</ListItem>
							);
						}
					})}
				</List>
			</Collapse>
		</>
	);
}

export default SidebarNavHeader;

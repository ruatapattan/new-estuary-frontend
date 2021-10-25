import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Button, Collapse, Divider, List, ListItem, ListItemText, MenuItem, TextField } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, styled } from "@mui/system";
import { useState } from "react";

const options = [{ name: "All Tags" }, { name: "Art" }, { name: "Music" }, { name: "Other" }];
const priceRange = ["0", "50", "100", "300", "500", "1000", ">1000"];

function SidebarFilter() {
	const [open, setOpen] = useState(false);
	const [openPrice, setOpenPrice] = useState(false);
	const [currentTag, setCurrentTag] = useState(options[0].name);
	const [currentPrice, setCurrentPrice] = useState({
		from: 0,
		to: ">1000",
	});
	const handleClickOpenSidebarHeader = () => {
		setOpen(!open);
	};
	const handleClickOpenSidebarPrice = () => {
		setOpenPrice(!openPrice);
	};

	const NavButton = styled(Button)(({ theme }) => ({
		// backgroundColor: alpha(theme.palette.common.white, 0.15),
		width: "100%",
		color: theme.palette.text.secondary,
		"&:hover": {
			backgroundColor: theme.palette.secondary.main,
			color: "white",
		},
	}));

	const handleClickNavType = (tag) => {
		setCurrentTag(tag);
		setOpen(!open);
	};

	const handleChangeFromPrice = (e) => {
		setCurrentPrice((cur) => ({ ...cur, from: e.target.value }));
	};
	const handleChangeToPrice = (e) => {
		setCurrentPrice((cur) => ({ ...cur, to: e.target.value }));
	};

	return (
		<>
			<ListItem>
				<ListItemText sx={{ textAlign: "center", color: "text.secondary" }} primary="Filter by Tag" />
			</ListItem>
			<ListItem sx={{ display: "flex", justifyContent: "center" }} onClick={handleClickOpenSidebarHeader}>
				<NavButton variant="text">
					{open ? <ExpandMore /> : <ArrowForwardIosIcon />}
					<ListItemText primary={currentTag} />
				</NavButton>
			</ListItem>
			<Collapse in={open} timeout="auto" unmountOnExit>
				<List component="div" disablePadding>
					{options.map((item) => {
						if (item.name !== currentTag) {
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
			<Divider />
			<ListItem>
				<ListItemText sx={{ textAlign: "center", color: "text.secondary" }} primary="Filter by Price" />
			</ListItem>
			<Box display="flex" p="0.5rem" justifyContent="space-around">
				<Box component="form">
					<TextField
						id="standard-select-currency"
						select
						label="From"
						value={currentPrice.from}
						onChange={handleChangeFromPrice}
						variant="standard"
						sx={{ minWidth: "10ch" }}
					>
						{priceRange.map((item) => (
							<MenuItem key={item} value={item}>
								{item}
							</MenuItem>
						))}
					</TextField>
				</Box>
				<Box component="form">
					<TextField
						id="standard-select-currency"
						select
						label="To"
						value={currentPrice.to}
						onChange={handleChangeToPrice}
						variant="standard"
						sx={{ minWidth: "10ch" }}
					>
						{priceRange.map((item) => (
							<MenuItem key={item} value={item}>
								{item}
							</MenuItem>
						))}
					</TextField>
				</Box>
			</Box>
			<Divider />
		</>
	);
}

export default SidebarFilter;

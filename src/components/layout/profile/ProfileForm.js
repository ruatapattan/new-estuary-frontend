import React from "react";
import { Box } from "@mui/system";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";
import DashboardIcon from "@mui/icons-material/Dashboard";
import TuneIcon from "@mui/icons-material/Tune";
import { Button, Container } from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

function ProfileForm() {
	const Search = styled("div")(({ theme }) => ({
		position: "relative",
		borderRadius: theme.shape.borderRadius,
		backgroundColor: alpha(theme.palette.common.white, 0.15),
		"&:hover": {
			backgroundColor: alpha(theme.palette.common.white, 0.25),
		},
		marginRight: theme.spacing(2),
		marginLeft: 0,
		width: "100%",
		[theme.breakpoints.up("sm")]: {
			marginLeft: theme.spacing(3),
			width: "auto",
		},
	}));

	const SearchIconWrapper = styled("div")(({ theme }) => ({
		padding: theme.spacing(0, 2),
		height: "100%",
		position: "absolute",
		pointerEvents: "none",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	}));

	const StyledInputBase = styled(InputBase)(({ theme }) => ({
		color: "inherit",
		"& .MuiInputBase-input": {
			padding: theme.spacing(1, 1, 1, 0),
			// vertical padding + font size from searchIcon
			paddingLeft: `calc(1em + ${theme.spacing(4)})`,
			transition: theme.transitions.create("width"),
			width: "100%",
			[theme.breakpoints.up("md")]: {
				width: "20ch",
			},
		},
	}));

	const ITEM_HEIGHT = 48;
	const ITEM_PADDING_TOP = 8;
	const MenuProps = {
		PaperProps: {
			style: {
				maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
				width: 250,
			},
		},
	};
	return (
		<Box
			className="BOXXXXXXXXX"
			display="flex"
			flexWrap="wrap"
			flexDirection="column"
			sx={{ width: "80%" }}
			border="1px solid red"
		>
			<Box
				display="flex"
				justifyContent="flex-start"
				alignItems="flex-start"
				width="100%"
				// height="5vh"
				border="1px dashed red"
			>
				<Search>
					<SearchIconWrapper>
						<SearchIcon />
					</SearchIconWrapper>
					<StyledInputBase
						placeholder="Search…"
						inputProps={{ "aria-label": "search" }}
						sx={{
							width: "250px",
							height: "48px",
							margin: "8px",
						}}
					/>
				</Search>
				<FormControl sx={{ m: 1, width: 250 }}>
					<Select></Select>
				</FormControl>
				<FormControl sx={{ m: 1, width: 250 }}>
					<Select></Select>
				</FormControl>
				<DashboardIcon sx={{ m: 2, fontSize: 40 }} />
				<Button variant="gradient" sx={{ m: 2, width: 130, height: "48px" }}>
					<TuneIcon sx={{ marginRight: 1 }} />
					Filter
				</Button>
			</Box>
			<Box display="flex" flexWrap="wrap" justifyContent="center" border="1px solid blue" width="100%">
				<Card sx={{ width: 350, height: 350, margin: 2 }} display="flex" flexWrap="wrap">
					<CardHeader
						action={
							<IconButton aria-label="settings">
								<MoreHorizIcon />
							</IconButton>
						}
					/>
					<CardMedia
						component="img"
						height="194"
						image="https://picsum.photos/id/237/200/300"
						alt="Paella dish"
					/>
					<CardContent>
						<Typography variant="body2" color="text.secondary">
							This impressive paella is a perfect party dish and a fun meal to cook together with your
							guests. Add 1 cup of frozen peas along with the mussels, if you like.
						</Typography>
					</CardContent>
				</Card>

				<Card sx={{ width: 350, height: 350, margin: 2 }} display="flex">
					<CardHeader
						action={
							<IconButton aria-label="settings">
								<MoreHorizIcon />
							</IconButton>
						}
					/>
					<CardMedia
						component="img"
						height="194"
						image="https://picsum.photos/id/237/200/300"
						alt="Paella dish"
					/>
					<CardContent>
						<Typography variant="body2" color="text.secondary">
							This impressive paella is a perfect party dish and a fun meal to cook together with your
							guests. Add 1 cup of frozen peas along with the mussels, if you like.
						</Typography>
					</CardContent>
				</Card>

				{/* <Card sx={{ width: 350, height: 350, margin: 2, display: "flex", flexWrap: "wrap" }}>
					<CardHeader
						action={
							<IconButton aria-label="settings">
								<MoreHorizIcon />
							</IconButton>
						}
					/>
					<CardMedia
						component="img"
						height="194"
						image="https://picsum.photos/id/237/200/300"
						alt="Paella dish"
					/>
					<CardContent>
						<Typography variant="body2" color="text.secondary">
							This impressive paella is a perfect party dish and a fun meal to cook together with your
							guests. Add 1 cup of frozen peas along with the mussels, if you like.
						</Typography>
					</CardContent>
				</Card> */}

				<Card sx={{ width: 350, height: 350, margin: 2 }} display="flex">
					<CardHeader
						action={
							<IconButton aria-label="settings">
								<MoreHorizIcon />
							</IconButton>
						}
					/>
					<CardMedia
						component="img"
						height="194"
						image="https://picsum.photos/id/237/200/300"
						alt="Paella dish"
					/>
					<CardContent>
						<Typography variant="body2" color="text.secondary">
							This impressive paella is a perfect party dish and a fun meal to cook together with your
							guests. Add 1 cup of frozen peas along with the mussels, if you like.
						</Typography>
					</CardContent>
				</Card>
			</Box>
		</Box>
	);
}

export default ProfileForm;

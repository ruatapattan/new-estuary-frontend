import {
	Avatar,
	Divider,
	Link,
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
	MenuItem,
	Typography,
} from "@mui/material";
import { Box } from "@mui/system";

function SearchResultContainer({ searchResult }) {
	return (
		<Box
			bgcolor="background.paper"
			color="text.secondary"
			position="absolute"
			width="100%"
			maxHeight="50vh"
			overflow="scroll"
		>
			<MenuItem>
				<Typography color="text.secondary" variant="h6">
					Search Result:
				</Typography>
			</MenuItem>
			<List
				sx={{
					width: "100%",
					height: "100%",
				}}
			>
				{searchResult.length === 0 ? (
					<Box width="100%">
						<Typography sx={{ textAlign: "center" }} color="error">
							No Results found.
						</Typography>
					</Box>
				) : (
					searchResult.map((item, index) => (
						<Link href={`/product/${item.id}`} sx={{ textDecoration: "none" }}>
							<ListItem
								key={index}
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
									<Avatar src={item.coverPic} />
								</ListItemAvatar>
								<Box>
									<ListItemText primary={item.name} />
									<ListItemText
										sx={{ color: "text.primary" }}
										primary={`Category: ${item.category.name}`}
									/>
								</Box>
							</ListItem>
							<Box width="100%" display="flex" justifyContent="center">
								<Divider sx={{ width: "80%" }} />
							</Box>
						</Link>
					))
				)}
			</List>
		</Box>
	);
}

export default SearchResultContainer;

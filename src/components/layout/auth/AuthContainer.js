import { Box } from "@mui/system";
import SideBar from "../sidebar/SideBarL";
import AuthContent from "./AuthContent";

function AuthContainer({ pageType }) {
	return (
		<>
			<Box
				className="BOXXXXXXXXX"
				display="flex"
				flexDirection="column"
				justifyContent="center"
				alignItems="center"
				sx={{
					boxShadow: 3,
					width: { xs: "100%", sm: "90%", md: "55%", lg: "55%" },
					height: { xs: "100vh", sm: "90vh", md: "90vh" },
					// bgcolor: (theme) => theme.palette.secondary.dark,
				}}
			>
				{/* <Box sx={{ height: "100%", width: "100%", border: "5px dashed lime" }}> */}
				<AuthContent pageType={pageType} />
				{/* </Box> */}
			</Box>
		</>
	);
}

export default AuthContainer;

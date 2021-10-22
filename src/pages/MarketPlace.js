import { Container } from "@mui/material";
import { Box } from "@mui/system";
import MarketplaceContent from "../components/layout/marketplace/MarketplaceContent";
import SideBar from "../components/layout/sidebar/SideBarL";

function MarketPlace() {
	return (
		<Box width="100%">
			<SideBar />
			<Box boxSizing="border-box" marginLeft={{ sm: 0, md: "240px" }} minHeight="80vh">
				<MarketplaceContent />
			</Box>
			<br />
		</Box>
	);
}

export default MarketPlace;

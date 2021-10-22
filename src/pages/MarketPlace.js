import { Container } from "@mui/material";
import { Box } from "@mui/system";
import MarketplaceContent from "../components/layout/marketplace/MarketplaceContent";
import SideBar from "../components/layout/sidebar/SideBarL";

function MarketPlace() {
	return (
		<>
			<SideBar />
			<Box width="80%" marginLeft="20%" minHeight="80vh">
				<MarketplaceContent />
			</Box>
		</>
	);
}

export default MarketPlace;

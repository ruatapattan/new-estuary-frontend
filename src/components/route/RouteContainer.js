import { display } from "@mui/system";
import { useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { allPages } from "../../config/routes";
import { SidebarContextProvider } from "../../contexts/SidebarContext";
import Footer from "../layout/footer/Footer";
import Header from "../layout/header/Header";

function RouteContainer() {
	const location = useLocation();
	const path = location.pathname;
	return (
		<>
			<SidebarContextProvider>
				{path !== "/login" && path !== "/signup" && <Header />}
				<div
					style={{
						flexGrow: 1,
						// border: "10px solid red",
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
						width: "100%",
						height: "100%",
					}}
				>
					<Switch>
						{allPages.map((item, idx) => {
							return (
								<Route
									key={idx}
									exact
									path={item.path}
									component={item.component}
									// handleDrawerToggle={handleDrawerToggle}
									// mobileOpen={mobileOpen}
								/>
							);
						})}
					</Switch>
				</div>
			</SidebarContextProvider>
			{path !== "/login" && path !== "/signup" && <Footer />}
		</>
	);
}

export default RouteContainer;

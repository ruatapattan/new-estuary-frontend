import { display } from "@mui/system";
import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { allPages } from "../../config/routes";
import Footer from "../layout/footer/Footer";
import Header from "../layout/header/Header";

function RouteContainer() {
	const [noHeader, setNoHeader] = useState(false);
	return (
		<>
			<Header />
			<Switch>
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
					{allPages.map((item, idx) => {
						return <Route key={idx} exact path={item.path} component={item.component} />;
					})}
				</div>
			</Switch>
			<Footer />
		</>
	);
}

export default RouteContainer;

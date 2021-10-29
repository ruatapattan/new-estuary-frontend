import { Button, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import RouteContainer from "./components/route/RouteContainer";
import { UserContextProvider } from "./contexts/UserContext";

import "./App.css";
import { theme } from "./style";
import { ProductFilterContextProvider } from "./contexts/ProductFilterContext";

function App() {
	return (
		<UserContextProvider>
			<ProductFilterContextProvider>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<RouteContainer />
				</ThemeProvider>
			</ProductFilterContextProvider>
		</UserContextProvider>
	);
}

export default App;

import { Button, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import RouteContainer from "./components/route/RouteContainer";
import { UserContextProvider } from "./contexts/UserContext";

import "./App.css";
import { theme } from "./style";

function App() {
	return (
		<UserContextProvider>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<RouteContainer />
			</ThemeProvider>
		</UserContextProvider>
	);
}

export default App;

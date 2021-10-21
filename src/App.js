import { Button, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import RouteContainer from "./components/route/RouteContainer";
import "./App.css";
import { theme } from "./style";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<RouteContainer />
		</ThemeProvider>
	);
}

export default App;

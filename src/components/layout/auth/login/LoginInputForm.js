import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { setToken } from "../../../../services/localStorage";
import jwtDecode from "jwt-decode";

import { Button, TextField, Typography } from "@mui/material";
import { Box, display, Grid } from "@mui/system";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";

import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { AuthContext } from "../../../../contexts/AuthContext";
import { useHistory } from "react-router";
function LoginInputForm() {
	const history = useHistory();
	const [userInput, setUserInput] = useState({
		username: "",
		password: "",
	});
	const [error, setError] = useState("");
	const { setUser, setUserRole } = useContext(AuthContext);

	const handleInputUsername = (e) => {
		setError("");
		setUserInput((cur) => ({ ...cur, username: e.target.value }));
	};
	const handleInputPassword = (e) => {
		setError("");
		setUserInput((cur) => ({ ...cur, password: e.target.value }));
	};

	const handleSubmitLogin = async (e) => {
		try {
			e.preventDefault();
			const result = await axios.post("/login", {
				username: userInput.username,
				password: userInput.password,
			});
			setToken(result.data.token);
			setUser(jwtDecode(result.data.token)); //obj from authcontroller
			const decoded = jwtDecode(result.data.token).userType;
			setUserRole(decoded);
			console.log(result.data.token);
			// history.push("/");
			// window.location.reload();
		} catch (err) {
			console.dir(err);
			if (err.response && err.response.status === 400 && err.response.data.name === "loginError") {
				setError(err.response.data.message);
			}
		}
	};

	console.log(error);

	return (
		<Box
			sx={{
				height: "100%",
				width: "100%",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				flexDirection: "column",
				// '& .MuiTextField-root': { m: 1, width: '25ch' },
				"& .buttonBox": { m: 1, width: "25ch" },
				"& .MuiTextField-root": { m: 1, width: "25ch" },
			}}
			component="form"
			onSubmit={handleSubmitLogin}
			noValidate
			autoComplete="off"
		>
			<Typography variant="h4" sx={{ mb: "2rem" }}>
				Login
			</Typography>

			<TextField
				id="outlined-multiline-flexible"
				label="Username"
				error={error !== "" ? true : false}
				InputProps={{
					startAdornment: (
						<InputAdornment position="start">
							<EmailOutlinedIcon />
						</InputAdornment>
					),
				}}
				value={userInput.username}
				onChange={handleInputUsername}
			/>
			<TextField
				id="outlined-multiline-flexible"
				label="Password"
				type="password"
				error={error !== "" ? true : false}
				InputProps={{
					startAdornment: (
						<InputAdornment position="start">
							<LockOutlinedIcon />
						</InputAdornment>
					),
				}}
				value={userInput.password}
				onChange={handleInputPassword}
			/>
			{error && (
				<p className="errorText" style={{ color: "red" }}>
					{error}
				</p>
			)}
			{/* <Box className='buttonBox' sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}> */}
			<Button type="submit" variant="gradient" sx={{ mt: ".8rem" }}>
				Log In
			</Button>
			{/* </Box> */}
		</Box>
		// </Box>
	);
}

export default LoginInputForm;

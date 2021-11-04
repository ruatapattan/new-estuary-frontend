import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { setToken } from "../../../../services/localStorage";
import jwtDecode from "jwt-decode";

import { Button, CircularProgress, Link, TextField, Typography } from "@mui/material";
import { borderRadius, Box, display, Grid } from "@mui/system";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import { GoogleLogin } from "react-google-login";
import GoogleIcon from "@mui/icons-material/Google";

import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { AuthContext } from "../../../../contexts/AuthContext";
import { useHistory } from "react-router";

function LoginInputForm() {
	const history = useHistory();
	const [inProgress, setInProgress] = useState(false);
	const [userInput, setUserInput] = useState({
		username: "",
		password: "",
	});

	// const [userGoogle, setUserGoogle] = useState({
	//   email: '',
	//   firstName: '',
	//   lastName: '',
	//   profilePic: ''
	// });

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
			setInProgress(true);
			const result = await axios.post("/login", {
				username: userInput.username,
				password: userInput.password,
			});
			setToken(result.data.token);
			setUser(jwtDecode(result.data.token)); //obj from authcontroller
			const decoded = jwtDecode(result.data.token);
			console.log(decoded);
			setUserRole(decoded.role);
			// console.log(result.data.token);
			setInProgress(false);
			// setUserRole('');
			history.push("/");
			window.location.reload();
		} catch (err) {
			setInProgress(false);
			console.dir(err);
			if (err.response && err.response.status === 400 && err.response.data.name === "loginError") {
				setError(err.response.data.message);
			}
		}
	};

	// const handleSubmitLoginWhitGoogle = async e => {
	//   try {
	//     e.preventDefault();
	//     setInProgress(true);
	//     const result = await axios.post('/login/google', {
	//       username: userGoogle.firstName,
	//       email: userGoogle.email,
	//       firstName: userGoogle.firstName,
	//       lastName: userGoogle.lastName,
	//       profilePic: userGoogle.profilePic
	//     });
	//     setToken(result.data.token);
	//     setUser(jwtDecode(result.data.token)); //obj from authcontroller
	//     const decoded = jwtDecode(result.data.token);
	//     console.log(decoded);
	//     setUserRole(decoded.role);
	//     // console.log(result.data.token);
	//     setInProgress(false);
	//     // setUserRole('');
	//     history.push('/');
	//     // window.location.reload();
	//   } catch (err) {
	//     setInProgress(false);
	//     console.dir(err);
	//   }
	// };

	///////////////google login///////////////////////////
	const clientId = "982300328780-hom5dl0i1hk439t3vlj37vntg42fljp2.apps.googleusercontent.com";

	const onLoginSuccess = async (res) => {
		setInProgress(true);
		console.log("login success", res.profileObj);
		// setUserGoogle(cur => ({
		//   ...cur,
		//   email: res.profileObj.email,
		//   firstName: res.profileObj.givenName,
		//   lastName: res.profileObj.familyName,
		//   profilePic: res.profileObj.imageUrl
		// }));

		try {
			const result = await axios.post("/login/google", {
				username: res.profileObj.givenName,
				password: res.profileObj.googleId,
				email: res.profileObj.email,
				firstName: res.profileObj.givenName,
				lastName: res.profileObj.familyName,
				profilePic: res.profileObj.imageUrl,
			});
			setToken(result.data.token);
			setUser(jwtDecode(result.data.token)); //obj from authcontroller
			const decoded = jwtDecode(result.data.token);
			console.log(decoded);
			setUserRole(decoded.role);
			// console.log(result.data.token);
			setInProgress(false);
			// setUserRole('');
			history.push("/");
			// window.location.reload();
		} catch (err) {
			setInProgress(false);
			console.dir(err);
		}
	};

	const onFailureSuccess = (res) => {
		console.log("login failed", res);
	};

	//////////////////////////////////////////////////////

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
			{inProgress ? (
				<Box sx={{ display: "flex" }}>
					<CircularProgress sx={{ color: "text.primary" }} />
				</Box>
			) : (
				<Box sx={{ width: "230px", display: "flex", flexDirection: "column", mt: "10px" }}>
					<Button type="submit" variant="gradient" sx={{ mb: "10px" }}>
						Log In
					</Button>

					<GoogleLogin
						render={(renderProps) => (
							<Button
								onClick={renderProps.onClick}
								variant="gradient4"
								disabled={renderProps.disabled}
								sx={{ borderRadius: "20px" }}
							>
								<GoogleIcon sx={{ fontSize: "20px", mr: "10px" }} />
								Login with google
							</Button>
						)}
						clientId={clientId}
						buttonText="Login"
						onSuccess={onLoginSuccess}
						onFailure={onFailureSuccess}
						cookiePolicy={"single_host_origin"}
					/>

					<Button variant="gradient3" sx={{ mt: "2rem" }}>
						<Link sx={{ textDecoration: "none" }} href="/signup">
							Sign Up
						</Link>
					</Button>
				</Box>
			)}
			{/* </Box> */}
		</Box>
		// </Box>
	);
}

export default LoginInputForm;

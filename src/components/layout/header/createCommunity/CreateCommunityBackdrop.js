import {
	Avatar,
	Backdrop,
	Button,
	CircularProgress,
	Container,
	Input,
	InputAdornment,
	TextareaAutosize,
	TextField,
	Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useContext, useState } from "react";
import { GradientBox } from "../../../../style";
import axios from "../../../../config/axios";
import { AuthContext } from "../../../../contexts/AuthContext";
import { useHistory } from "react-router-dom";

function CreateCommunityBackdrop({ openBackdrop, handleCloseBackdrop }) {
	const history = useHistory();
	const [inProgress, setInProgress] = useState(false);
	const { user } = useContext(AuthContext);
	const [error, setError] = useState({
		name: "",
		description: "",
		image: "",
	});
	const [communityInput, setCommunityInput] = useState({
		name: "",
		description: "",
		image: null,
	});

	const handleChooseImage = (e) => {
		console.log(e.target.files);
		e.preventDefault();
		setError((cur) => ({ ...cur, image: "" }));
		if (!e.target.files[0].type.includes("image/")) {
			setError((cur) => ({ ...cur, image: "must be an image file" }));
		} else {
			setCommunityInput((cur) => ({ ...cur, image: e.target.files[0] }));
		}
	};

	const handleInputCommunityName = (e) => {
		if (e.target.value !== "") {
			setError((cur) => ({ ...cur, name: "" }));
		}
		setCommunityInput((cur) => ({ ...cur, name: e.target.value }));
	};
	const handleInputDescription = (e) => {
		if (e.target.value !== "") {
			setError((cur) => ({ ...cur, description: "" }));
		}
		setCommunityInput((cur) => ({ ...cur, description: e.target.value }));
	};

	const handleSubmitCreate = async (e) => {
		try {
			e.preventDefault();
			// console.log("here");
			// console.log(Object.values(error));
			if (communityInput.name === "") {
				setError((cur) => ({ ...cur, name: "Community name is required" }));
			}
			if (communityInput.description === "") {
				setError((cur) => ({ ...cur, description: "description is required" }));
			}
			if (communityInput.image === null) {
				setError((cur) => ({ ...cur, image: "image is required" }));
			} else if (Object.values(error).every((item) => item === "")) {
				console.log("no error");
				setInProgress(true);
				const formData = new FormData();
				formData.append("name", communityInput.name);
				formData.append("userId", user.id);
				formData.append("description", communityInput.description);
				formData.append("cloudinput", communityInput.image);

				const result = await axios.post("/community/create", formData);
				// console.log(result.data.message);
				history.push({
					pathname: `/community`,
					// pathname: `/community/${result.data.createdCommunityId}`,
					state: { successMessage: "Account Created" },
					form: "register page",
				});
			}
		} catch (err) {
			setInProgress(false);
			console.log("err response below:");
			console.dir(err.response.data);
		}
	};

	return (
		// onClick={handleCloseBackdrop}
		<Backdrop sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} open={openBackdrop}>
			<Box mt={4} width="50vw" height="80vh" position="absolute" zIndex="100000">
				<Button
					onClick={handleCloseBackdrop}
					sx={{ position: "absolute", right: "0", padding: "0", borderRadius: 0 }}
					variant="contained"
					color="error"
				>
					X
				</Button>
				<Box
					height="100%"
					width="100%"
					display="flex"
					// flexDirection="column"
					alignItems="center"
					justifyContent="spaceAround"
					// border="solid 1px red"
					bgcolor="#fff"
				>
					<GradientBox
						color="#fff"
						// border="solid 1px red"
						height="100%"
						flexGrow={1}
						display="flex"
						flexDirection="column"
						alignItems="center"
						justifyContent="center"
						width="100%"
						paddingX={1}
						paddingY={2}
					>
						{communityInput.image !== "" && (
							<Box>
								<Avatar
									src={communityInput.image !== null ? URL.createObjectURL(communityInput.image) : ""}
									sx={{ width: 150, height: 150 }}
								/>
							</Box>
						)}
					</GradientBox>
					<Box
						display="flex"
						alignItems="center"
						// justifyContent="space-ar"
						flexDirection="column"
						flexGrow={1}
						sx={{
							height: "100%",

							width: "100%",

							"& .MuiTextField-root, & input, & textarea": { m: 1, width: "80%" },
						}}
						component="form"
						onSubmit={handleSubmitCreate}
						noValidate
						autoComplete="off"
					>
						<Box mt={5}>
							<Typography variant="h5" sx={{ textAlign: "center", marginBottom: 5 }}>
								Create a Community
							</Typography>
						</Box>
						<Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
							<TextField
								size="small"
								label="Community Name"
								error={error.name !== "" ? true : false}
								helperText={error.name}
								value={communityInput.name}
								onChange={handleInputCommunityName}
							/>

							<TextareaAutosize
								minRows={10}
								maxRows={10}
								// aria-label="empty textarea"
								placeholder="Description"
								style={{ width: 200 }}
								value={communityInput.description}
								onChange={handleInputDescription}
							/>
							{error.description !== "" && <p style={{ color: "red" }}>{error.description}</p>}
							<Input
								style={{ display: "none" }}
								id="raised-button-file"
								type="file"
								onChange={handleChooseImage}
							/>
							<label htmlFor="raised-button-file">
								<Button
									sx={{ width: "100", textTransform: "none" }}
									color="secondary"
									variant="contained"
									// variant="outlined"
									component="span"
								>
									Upload Community Image
								</Button>
							</label>
							{error.image !== "" && <p style={{ color: "red" }}>{error.image}</p>}
							{inProgress ? (
								<CircularProgress />
							) : (
								<Button type="submit" variant="gradient" sx={{ m: 2 }}>
									Submit
								</Button>
							)}
						</Box>
					</Box>
				</Box>
			</Box>
		</Backdrop>
	);
}

export default CreateCommunityBackdrop;

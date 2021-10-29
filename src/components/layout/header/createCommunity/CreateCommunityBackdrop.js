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
import { useState } from "react";
import { GradientBox } from "../../../../style";

function CreateCommunityBackdrop({ openBackdrop, handleCloseBackdrop }) {
	const [error, setError] = useState({
		name: "",
		description: "",
		image: "",
	});
	const [communityInput, setCommunityInput] = useState({
		name: "",
		description: "",
		image: "",
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
									src={communityInput.image !== "" ? URL.createObjectURL(communityInput.image) : ""}
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
						// onSubmit={handleSubmitSignup}
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
							<Button type="submit" variant="gradient" sx={{ m: 2 }}>
								Submit
							</Button>
						</Box>
					</Box>
				</Box>
			</Box>
		</Backdrop>
	);
}

export default CreateCommunityBackdrop;

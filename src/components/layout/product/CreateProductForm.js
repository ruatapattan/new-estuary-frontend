import React, { useState } from "react";

import { Box } from "@mui/system";
import { Button, Input, TextField } from "@mui/material";
import validator from "validator";
import userValidate from "../../../services/userValidate";
import axios from "../../../config/axios";
import { useParams, useHistory } from "react-router-dom";

function CreateProductForm() {
	const param = useParams();
	const history = useHistory();

	const textFieldStyle = { width: { xs: "80%", sm: "70%" }, mb: "25px" };

	const [coverPic, setCoverPic] = useState(null);
	const [name, setName] = useState("");
	const [price, setPrice] = useState("");
	const [description, setDescription] = useState("");
	const [collection, setCollection] = useState([]);

	const [isFocus, setIsFocus] = useState({
		productName: false,
		price: false,
		description: false,
	});

	const [error, setError] = useState({});
	const [userInput, setUserInput] = useState({});

	///////////// PUT Profile ///////////////////
	const handleSubmitCreactProduct = async (e) => {
		e.preventDefault();
		console.dir(userInput.PicProduct);

		let isError = false;
		try {
			if (!userInput.name) {
				setError((cur) => ({ ...cur, name: "name is required" }));
				isError = true;
			}
			if (!userInput.collection) {
				setError((cur) => ({ ...cur, collection: "collection is required" }));
				isError = true;
			}
			if (!userInput.price) {
				setError((cur) => ({ ...cur, price: "price is required" }));
				isError = true;
			}

			if (error.name || error.collection || error.price) {
				isError = true;
			}

			if (!isError) {
				const formData = new FormData();

				formData.append("name", userInput.name);
				formData.append("description", userInput.description);
				formData.append("collection", userInput.collection);
				formData.append("price", userInput.price);
				formData.append("coverPic", userInput.coverPic);

				// console.dir(formData);
				await axios.put(`/product/${param.id}`, formData);

				// history.push({
				//   pathname: '/product',
				//   state: { message: 'Your creactproduct success' }
				// });
			}
		} catch (err) {
			console.log(err);
		}
	};

	//check err
	const handleInputProductName = (e) => {
		setUserInput((cur) => ({ ...cur, name: e.target.value }));
		if (e.target.value === "") {
			setError((cur) => ({ ...cur, name: "name is required" }));
		} else if (!userValidate.validateLength(e.target.value)) {
			setError((cur) => ({
				...cur,
				name: "name must be 6-12 characters long",
			}));
		} else if (!validator.isAlphanumeric(e.target.value)) {
			setError((cur) => ({
				...cur,
				name: "name must consists of alphabets and numbers only",
			}));
		} else setError((cur) => ({ ...cur, name: "" }));
	};

	const handleInputCollection = (e) => {
		setUserInput((cur) => ({ ...cur, collection: e.target.value }));
		if (e.target.value === "") {
			setError((cur) => ({ ...cur, collection: "Please select a collection" }));
		} else setError((cur) => ({ ...cur, collection: "" }));
	};

	const handleInputPrice = (e) => {
		if (e.target.value === "") {
			setError((cur) => ({ ...cur, price: "Please select a price" }));
		} else setError((cur) => ({ ...cur, price: "" }));
	};

	//pic
	const handleChangePicProduct = (e) => {
		setUserInput((cur) => ({ ...cur, coverPic: e.target.files[0] }));
		setCoverPic(URL.createObjectURL(e.target.files[0]));
	};

	return (
		<Box
			sx={{
				width: { md: "72%", sm: "100%", xs: "100%" },
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				backgroundColor: "white",
				height: "90%",
				marginLeft: "10rem",
				// border: '1px solid red'
			}}
		>
			<Box
				sx={{
					// height: '6%',
					// width: '70%',
					width: { xs: "100%", sm: "100%", md: "100%" },
					backgroundColor: "#232836",
					color: "white",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					padding: "20px 50px",
					mt: "58px",
				}}
			>
				Creact new Item
			</Box>
			<Box sx={{ paddingTop: "30px" }} component="form" onSubmit={handleSubmitCreactProduct}>
				<div>
					<img
						src={
							coverPic
								? coverPic
								: userInput.coverPic
								? userInput.coverPic
								: "https://res.cloudinary.com/duca0jbyn/image/upload/v1635160655/1478594_uop0jq.png"
						}
						alt=""
						sx={{ mb: "25px" }}
					/>
				</div>
				<label htmlFor="contained-button-file">
					<Input
						id="contained-button-file"
						multiple
						type="file"
						sx={{ display: "none" }}
						onChange={handleChangePicProduct}
					/>
					<Button variant="contained" component="span" sx={{ width: "100%", bgcolor: "gray", mt: "15px" }}>
						Upload Profile
					</Button>
				</label>
			</Box>

			<Box
				sx={{
					width: { xs: "90%", sm: "90%", md: "70%" },
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					backgroundColor: "white",
					padding: "80px 0px",
					mb: "80px",
				}}
			>
				<TextField
					id="outlined-productName-input"
					label={isFocus.name ? "Name" : ""}
					sx={textFieldStyle}
					placeholder={!userInput.name && "Name"}
					value={userInput.name}
					error={error.name !== "" ? true : false}
					helperText={error.name}
					onFocus={() => setIsFocus((curr) => ({ ...curr, name: true }))}
					onBlur={() => setIsFocus((curr) => ({ ...curr, name: false }))}
					onChange={handleInputProductName}
				/>

				<TextField
					id="standard-multiline-static"
					label={isFocus.description ? "Description" : ""}
					placeholder={!userInput.description && "Description"}
					onFocus={() => setIsFocus((curr) => ({ ...curr, description: true }))}
					onBlur={() => setIsFocus((curr) => ({ ...curr, description: false }))}
					multiline
					sx={textFieldStyle}
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				/>

				<TextField
					id="outlined-select-currency"
					select
					label="Select collection"
					sx={textFieldStyle}
					error={error.collection !== "" ? true : false}
					helperText={error.collection}
					value={userInput.collection}
					onChange={handleInputCollection}
				/>
				<TextField
					label={isFocus.price ? "Price" : ""}
					placeholder={!userInput.price && "Price"}
					onFocus={() => setIsFocus((curr) => ({ ...curr, price: true }))}
					onBlur={() => setIsFocus((curr) => ({ ...curr, price: false }))}
					sx={textFieldStyle}
					value={userInput.price}
					error={error.price !== "" ? true : false}
					helperText={error.price}
					onChange={handleInputPrice}
				/>

				<Button
					type="submit"
					variant="gradient"
					sx={{ color: "white", p: "10px", width: { xs: "80%", sm: "70%" } }}
				>
					Sale
				</Button>
			</Box>
		</Box>
	);
}

export default CreateProductForm;

import React, { useState, useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
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
	const [description, setDescription] = useState("");

	const [isFocus, setIsFocus] = useState({
		productName: false,
		price: false,
		description: false,
	});

	const [error, setError] = useState({});
	const [userInput, setUserInput] = useState({});

	///////////// PUT Profile ///////////////////
	const handleSubmitCreactProduct = async (e) => {
		console.log("ccccc");
		e.preventDefault();
		console.dir(userInput.coverPic);

		let isError = false;
		try {
			if (!userInput.name) {
				setError((cur) => ({ ...cur, name: "name is required" }));
				isError = true;
			}
			if (!userInput.category) {
				setError((cur) => ({ ...cur, category: "category is required" }));
				isError = true;
			}
			if (!userInput.price) {
				setError((cur) => ({ ...cur, price: "price is required" }));
				isError = true;
			}

			if (error.name || error.category || error.price) {
				isError = true;
			}

			if (!isError) {
				const formData = new FormData();

				formData.append("name", userInput.name);
				formData.append("description", userInput.description);
				formData.append("categoryId", userInput.category);
				formData.append("price", userInput.price);
				formData.append("coverPic", userInput.coverPic);
				formData.append("externalLink", "link to product");
				formData.append("hashtag", "link to product");

				// console.dir(formData);
				await axios.post(`/product`, formData);

				history.push({
					pathname: "/product/1",
					state: { message: "Your creactproduct success" },
				});
			}
		} catch (err) {}
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

	const handleInputCategory = (e) => {
		setUserInput((cur) => ({ ...cur, category: e.target.value }));
		if (e.target.value === "") {
			setError((cur) => ({ ...cur, category: "Please select a category" }));
		} else setError((cur) => ({ ...cur, category: "" }));
	};

	const handleInputPrice = (e) => {
		setUserInput((cur) => ({ ...cur, price: e.target.value }));
		if (e.target.value === "") {
			setError((cur) => ({ ...cur, price: "Please select a price" }));
		} else setError((cur) => ({ ...cur, price: "" }));
	};

	//pic
	const handleChangePicProduct = (e) => {
		setUserInput((cur) => ({ ...cur, coverPic: e.target.files[0] }));
		setCoverPic(URL.createObjectURL(e.target.files[0]));
	};

	//call backend category
	const [optionCategory, setOptionCategory] = useState([]);
	useEffect(() => {
		const fetchCategory = async () => {
			try {
				const res = await axios.get("/category");
				const fetChcategorys = res.data.categorys;
				setOptionCategory(fetChcategorys.filter((item) => item.name !== "all"));
				console.log(fetChcategorys);
			} catch (err) {
				console.dir(err);
			}
		};
		fetchCategory();
	}, []);

	console.log(optionCategory);

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
			<Box sx={{ paddingTop: "30px" }}>
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
				component="form"
				onSubmit={handleSubmitCreactProduct}
			>
				<TextField
					id="outlined-productName-input"
					label={isFocus.name ? "Name" : ""}
					sx={textFieldStyle}
					placeholder={!userInput.name && "Name"}
					value={userInput.name}
					error={error.name && error.name !== "" ? true : false}
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
					label="Select category"
					sx={textFieldStyle}
					error={error.category !== "" ? true : false}
					helperText={error.category}
					value={userInput.category}
					onChange={handleInputCategory}
				>
					{optionCategory.map((item) => (
						<MenuItem key={item.id} value={item.id}>
							{item.name}
						</MenuItem>
					))}
				</TextField>
				<TextField
					label={isFocus.price ? "Price" : ""}
					placeholder={!userInput.price && "Price"}
					onFocus={() => setIsFocus((curr) => ({ ...curr, price: true }))}
					onBlur={() => setIsFocus((curr) => ({ ...curr, price: false }))}
					sx={textFieldStyle}
					value={userInput.price}
					// error={error.price !== "" ? true : false}
					// helperText={error.price}
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

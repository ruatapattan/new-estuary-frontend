import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import { Button, TextField, CircularProgress } from "@mui/material";
import { Avatar, Link } from "@mui/material";
import axios from "../../../config/axios";
import { useParams, useHistory } from "react-router-dom";
import Swal from "sweetalert2";

function WalletForm() {
	const [inProgress, setInProgress] = useState(false);
	const param = useParams();
	const [user, setUser] = useState([]);
	const [amount, setAmount] = useState();
	const [isAddWallet, setIsAddWallet] = useState(false);
	const [toggle, setToggle] = useState(false);
	const [error, setError] = useState({ amount: "Amount is required" });

	const handleInputAmount = (e) => {
		setAmount(e.target.value);

		if (e.target.value == "") {
			setError((cur) => ({ ...cur, amount: "Amount is required" }));
		} else if (e.target.value < 100) {
			setError((cur) => ({ ...cur, amount: "Limit: More than or equal to 100" }));
		} else if (e.target.value > 10000) {
			setError((cur) => ({ ...cur, amount: "Limit: Less than or equal to 10,000" }));
		} else {
			setError((cur) => ({ ...cur, amount: "" }));
		}
	};

	useEffect(() => {
		const callUser = async () => {
			await axios
				.get(`/profile/${param.id}`)
				.then((res) => {
					setUser({ ...res.data.user });
				})
				.catch((err) => {
					console.dir(err);
				});
		};
		callUser();
	}, [toggle]);

	/////////////////Omise connect backend///////////////////////
	const createCreditCardCharge = async (username, wallet, amount, token) => {
		await axios.post("/checkout-credit-card", { username, wallet, amount, token }).then((res) => {
			Swal.fire({
				icon: "success",
				title: "Your top-up is successful",
				showConfirmButton: false,
				timer: 1500,
			});

			setIsAddWallet((curr) => !curr);
			setToggle((curr) => !curr);
			setAmount("");
			setError((cur) => ({ ...cur, amount: "Amount is required" }));
		});
	};

	/////////////////Omise///////////////////////

	let OmiseCard = window.OmiseCard;

	const creditCardConfigure = (e) => {
		OmiseCard.configure({
			publicKey: "pkey_test_5pm0cflftkpw5lysclq",
		});

		OmiseCard.configureButton("#credit-card", {
			// amount: 300000,
			// currency: 'USD'
			// buttonLabel: 'Pay 30 USD'
		});
		OmiseCard.attach();
	};

	const handleOpenOmise = (e) => {
		OmiseCard.open({
			amount: +amount * 100,
			submitFormTarget: "#checkout-form",
			// defaultPaymentMethod:'installment',
			// otherPaymentMethods: 'alipay',
			// otherPaymentMethods: 'installment',
			onCreateTokenSuccess: (token) => {
				// console.log(token);
				createCreditCardCharge(user.username, user.wallet, amount, token);
			},
			onFormClosed: () => {},
		});
	};

	const handleClickPurchase = async (e) => {
		e.preventDefault();
		try {
			if (error.amount) {
				setError((cur) => ({ ...cur, amount: "Amount is incorrect" }));
			} else {
				setInProgress(true);
				await creditCardConfigure();
				await handleOpenOmise();
				setInProgress(false);
			}
		} catch (err) {
			setInProgress(false);
			console.dir(err);
		}
	};

	///////////////////////////////////////////

	return (
		<Box
			sx={{
				width: { md: "72%", sm: "100%", xs: "100%" },
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				// justifyContent: 'center',
			}}
		>
			<Box
				sx={{
					width: { xs: "90%", sm: "90%", md: "70%" },
					flexDirection: "column",
					backgroundColor: "#232836",
					color: "white",
					display: "flex",
					alignItems: "center",
					padding: "20px 50px",
					m: "80px 0px",
					"& hr": {
						color: "white",
						width: "100%",
						m: "10px 0px",
					},
					"& p,h2,hr,Button": {
						m: "20px 0px",
					},
				}}
			>
				<Box
					sx={{
						display: "flex",
						flexDirection: "row",
						width: "100%",
						alignItems: "center",
					}}
				>
					<Avatar
						aria-label="recipe"
						src={user.profilePic ? user.profilePic : ""}
						sx={{
							width: "60px",
							height: "60px",
							mr: { md: "15px", xs: "20px" },
						}}
					></Avatar>
					<h3>{user.username}</h3>
				</Box>
				<hr />

				<p>Total balance</p>
				<h2>{user.wallet} Baht</h2>

				{/* ////////////////Omise/////////////////// */}
				{/* <form id="checkoutForm" method="POST" action="/charge">
          <script
            type="text/javascript"
            src="https://cdn.omise.co/omise.js"
            data-key="OMISE_PUBLIC_KEY"
            data-amount="12345"
            data-currency="THB"
            data-default-payment-method="credit_card"
          ></script>
        </form> */}

				{!isAddWallet && (
					<Button onClick={() => setIsAddWallet((curr) => !curr)} variant="gradient">
						Add Wallet
					</Button>
				)}

				{isAddWallet && (
					<Box
						sx={{
							width: "100%",
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
							"& hr": {
								color: "white",
								width: "100%",
								m: "10px 0px",
							},
							"& label.Mui-focused": {
								color: "white",
							},
							"& .MuiInput-underline:after": {
								borderBottomColor: "white",
							},
							"& .MuiOutlinedInput-root": {
								"& fieldset": {
									borderColor: "white",
								},
								"&:hover fieldset": {
									borderColor: "white",
								},
								"&.Mui-focused fieldset": {
									borderColor: "white",
								},
							},
						}}
					>
						<hr />
						<h2>Input Amount</h2>
						<TextField
							sx={{
								color: "white",
								width: "100%",
								m: "10px 0px",
								multilineColor: { color: "white" },
							}}
							// label="Amount"
							type="number"
							defaultValue=""
							error={error.amount !== "" ? true : false}
							helperText={error.amount}
							value={amount}
							onChange={handleInputAmount}
						/>

						{inProgress ? (
							<CircularProgress sx={{ color: "text.primary" }} />
						) : (
							<Box sx={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
								<Button
									variant="gradient3"
									onClick={() => {
										setIsAddWallet((curr) => !curr);
										setAmount("");
									}}
								>
									Cancel
								</Button>
								<form>
									<Button id="credit-card" onClick={handleClickPurchase} variant="gradient">
										Confirm
									</Button>
								</form>
							</Box>
						)}
					</Box>
				)}

				{/* /////////////////////////////////// */}
			</Box>
		</Box>
	);
}

export default WalletForm;

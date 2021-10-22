import { Drawer, Typography } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { Box, styled, keyframes } from "@mui/system";

// import { createTheme } from "@mui/system";
// const defaultTheme = createTheme();

// const gradientFrames = keyframes`
// 	0% {
// 		background: linear-gradient(90deg, rgba(64,169,223,1) 0%,rgba(115,194,130,1) 100%)
// 	} 10%{
// 		background: linear-gradient(90deg,rgba(64,169,223,1) 25%,rgba(115,194,130,1) 100%)
// 	} 20%{
// 		background: linear-gradient(90deg,rgba(64,169,223,1) 50%,rgba(115,194,130,1) 100%)
// 	}30%{
// 		background: linear-gradient(90deg,rgba(64,169,223,1) 75%,rgba(115,194,130,1) 100%)
// 	}40%{
// 		background: linear-gradient(90deg,rgba(64,169,223,1) 100%,rgba(115,194,130,1) 100%)
// 	}50%{
// 		background: linear-gradient(90deg,rgba(115,194,130,1) 0%, rgba(64,169,223,1) 100%)
// 	}60%{
// 		background: linear-gradient(90deg,rgba(115,194,130,1) 25%, rgba(64,169,223,1) 100%)
// 	}70%{
// 		background: linear-gradient(90deg,rgba(115,194,130,1) 50%, rgba(64,169,223,1) 100%)
// 	}80%{
// 		background: linear-gradient(90deg,rgba(115,194,130,1) 75%, rgba(64,169,223,1) 100%)
// 	}100%{
// 		background: linear-gradient(90deg,rgba(115,194,130,1) 100%, rgba(64,169,223,1) 100%)
// 	}
// `;

const gradientFrames = keyframes`
	0% {
		background: linear-gradient(90deg, rgba(64,169,223,1) 0%,rgba(115,194,130,1) 100%)
	} 10%{
		background: linear-gradient(90deg,rgba(64,169,223,1) 25%,rgba(115,194,130,1) 100%)
	} 20%{
		background: linear-gradient(90deg,rgba(64,169,223,1) 50%,rgba(115,194,130,1) 100%)
	}30%{
		background: linear-gradient(90deg,rgba(64,169,223,1) 75%,rgba(115,194,130,1) 100%)
	}40%{
		background: linear-gradient(90deg,rgba(64,169,223,1) 100%,rgba(115,194,130,1) 100%)
	}50%{
		background: linear-gradient(90deg,rgba(115,194,130,1) 0%, rgba(64,169,223,1) 100%)
	}60%{
		background: linear-gradient(90deg,#242A38 25%, rgba(64,169,223,1) 100%)	
	}70%{
		background: linear-gradient(90deg,#242A38 50%, rgba(64,169,223,1) 100%)
	}80%{
		background: linear-gradient(90deg,#242A38 75%, rgba(64,169,223,1) 100%)
	}100%{
		background: linear-gradient(90deg,#242A38 100%, rgba(64,169,223,1) 100%)
	}
`;

const theme = createTheme({
	palette: {
		primary: {
			main: "#242A38",
		},
	},
	zIndex: {
		drawer: 1,
	},
	components: {
		MuiButton: {
			variants: [
				{
					props: { variant: "gradient" },
					style: {
						borderRadius: "30px",
						color: "#242A38",
						background: "rgb(115, 194, 130)",
						background: "linear-gradient(90deg, rgba(64,169,223,1) 20%,rgba(115,194,130,1) 100%)",
						"&:hover": {
							animation: ` ${gradientFrames} 0.5s forwards`,
						},
						// animation: ` ${gradientFrames} gradient 2.5s infinite 0.8s cubic-bezier(0.2,0.8,0.2,1.2) forwards`,
					},
				},
				{
					props: { variant: "gradient2" },
					style: {
						borderRadius: "30px",
						color: "#242A38",
						// border: "1px solid white",
						background: "rgb(115, 194, 130)",
						background: "linear-gradient(90deg, rgba(64,169,223,1) 20%,rgba(115,194,130,1) 100%)",
						"&:hover": {
							animation: ` ${gradientFrames} 0.5s forwards`,
							color: "white",
						},
						// animation: ` ${gradientFrames} gradient 2.5s infinite 0.8s cubic-bezier(0.2,0.8,0.2,1.2) forwards`,
					},
				},
			],
		},
	},
});

const GradientDrawer = styled(Drawer)`
	& > div {
		background: rgb(115, 194, 130);
		background: linear-gradient(360deg, rgba(64, 169, 223, 1) 0%, rgba(115, 194, 130, 0.5) 100%);
	}
`;

const CenterTypography = styled(Typography)({
	textAlign: "center",
});
const GradientBox = styled(Box)({
	background: "rgb(115, 194, 130)",
	background: "linear-gradient(180deg, rgba(64, 169, 223, 1) 0%, rgba(115, 194, 130, 0.5) 100%)",
});

export { theme, GradientDrawer, CenterTypography, GradientBox };

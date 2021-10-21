import React from "react";
import { Container, Button, Card, CardActions, CardContent, Grid, Typography, Paper, TextField } from "@mui/material";
import { Box, styled } from "@mui/system";
import AuthContainer from "../components/layout/auth/AuthContainer";

const CenterTypography = styled(Typography)({
	textAlign: "center",
});
const GradientBox = styled(Box)({
	background: "rgb(115, 194, 130)",
	background: "linear-gradient(180deg, rgba(64, 169, 223, 1) 0%, rgba(115, 194, 130, 0.5) 100%)",
});
function Login() {
	return <AuthContainer pageType="login" />;
}

export default Login;

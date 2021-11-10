import React from "react";
import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CreatePost from "../../card/CreatePost";
import PostCard from "../../card/PostCard";
import { useState, useEffect } from "react";
import axios from "../../../config/axios";
import { useParams } from "react-router-dom";

const ExpandMore = styled((props) => {
	const { expand, ...other } = props;
	return <IconButton {...other} />;
})(({ theme, expand }) => ({
	transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
	marginLeft: "auto",
	transition: theme.transitions.create("transform", {
		duration: theme.transitions.duration.shortest,
	}),
}));

function CommunityContent() {
	const param = useParams();
	const [post, setPost] = useState([]);
	const [togglePostCommunity, setTogglePostCommunity] = useState(false);
	const [communityName, setCommunityName] = useState("");
	const [togglePostDelete, setTogglePostDelete] = useState(false);
	// console.log('******************************');
	// console.log(post);

	useEffect(() => {
		const fetchPost = async () => {
			try {
				const res = await axios.get(`/postCommunity/${param.id}`);
				setPost(res.data.postCommunity);
			} catch (err) {
				console.log(err);
			}
		};
		const fetchNameCommunity = async () => {
			try {
				const res = await axios.get(`/postCommunity/communityName/${param.id}`);
				//localhost:8000/postCommunity/communityName/6
				http: setCommunityName(res.data.communityName);
			} catch (err) {
				console.log(err);
			}
		};

		fetchNameCommunity();
		fetchPost();
	}, [togglePostCommunity, togglePostDelete]);

	// console.log('**********');
	// console.log(communityName);

	return (
		<>
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					flexDirection: "column",
					width: { xs: "100%", md: "60%" },
					mt: "20px",
				}}
			>
				<Box mb="20px" width="100%" display="flex" justifyContent="center" alignItems="flex-start">
					<Typography variant="h2" component="h3" mb="20px">
						{/* Community */}
						{/* {post[0]?.Community?.name} */}
						{communityName.name}
					</Typography>
				</Box>
				<CreatePost communityId={param.id} setTogglePostCommunity={setTogglePostCommunity} />
				{post.map((postItem) => (
					<PostCard key={postItem.id} postItem={postItem} setTogglePostDelete={setTogglePostDelete} />
				))}
			</Box>
		</>
	);
}

export default CommunityContent;

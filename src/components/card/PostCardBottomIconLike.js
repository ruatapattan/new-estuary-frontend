import React, { useContext } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import axios from "../../config/axios";
import { SocketContext } from "../../contexts/SocketContext";
import { AuthContext } from "../../contexts/AuthContext";

function PostCardBottomIconLike({ postItem, setToggleLike, likeLists }) {
	const { sendNotification } = useContext(SocketContext);
	const { user } = useContext(AuthContext);

	// console.log('postitem', postItem);

	let isLiked = false; // เปิด ปิด icon Like
	let filteredLikeList = []; // เก็บ
	likeLists.forEach((item) => {
		if (+item.postId === +postItem.id && +item.userId === +user.id) {
			if (item.status) {
				isLiked = true;
			}
			filteredLikeList.push(item);
		}
	});

	// นับคนกด Like
	const countLike = likeLists.filter((item) => item.status === true);

	const handleClickLike = async () => {
		if (filteredLikeList.length === 0) {
			axios
				.post("/like", { postId: postItem.id })
				.then((res) => {
					setToggleLike((curr) => !curr);
					return res;
				})
				.then((res2) => {
					if (postItem.User.id !== user.id) {
						// alert("notify like");
						console.log(res2);
						sendNotification(
							user.id,
							user.username,
							// item.User.id,
							postItem.User.id,
							"liked",
							"post",
							"likeId",
							res2.data.likeId
						);
					}
				});
		} else {
			axios.put(`/like/${filteredLikeList[0].id}`, { isLiked: !filteredLikeList[0].status }).then((res) => {
				setToggleLike((curr) => !curr);
			});
		}
	};

	return (
		<Grid item>
			{isLiked && <ThumbUpAltIcon sx={{ cursor: "pointer" }} onClick={handleClickLike} />}
			{!isLiked && <ThumbUpOutlinedIcon sx={{ cursor: "pointer" }} onClick={handleClickLike} />}

			<Typography sx={{ display: "inline" }} variant="body2" color="text.disabled">
				{countLike.length ? countLike.length : null}
			</Typography>
		</Grid>
	);
}

export default PostCardBottomIconLike;

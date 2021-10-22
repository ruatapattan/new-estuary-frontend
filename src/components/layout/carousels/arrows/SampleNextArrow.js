import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function SampleNextArrow(props) {
	const { className, style, onClick } = props;
	return (
		<ArrowForwardIosIcon
			style={{ ...style, color: "#242A38" }}
			className={className}
			onClick={onClick}
			onClick={onClick}
		/>
	);
}

export default SampleNextArrow;

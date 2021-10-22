import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

function SamplePrevArrow(props) {
	const { className, style, onClick } = props;
	return (
		<ArrowBackIosIcon
			style={{ ...style, color: "#242A38" }}
			className={className}
			onClick={onClick}
			onClick={onClick}
		/>
	);
}

export default SamplePrevArrow;

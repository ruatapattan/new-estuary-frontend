const limitStringLength = (text, length) => {
	if (text.length > length) {
		return text.slice(0, length - 1) + "...";
	}
	return text;
};

export default limitStringLength;

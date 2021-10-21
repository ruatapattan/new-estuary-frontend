exports.validateLength = (username) => {
	console.log("length", username);
	if (username.length >= 6 && username.length <= 12) {
		return true;
	}
};

exports.validateCharacter = (username) => {
	// const reg = new RegExp("([A-Za-z0-9-_ ])");
	const reg = new RegExp(/([!@#$%^&*()+=\[\]{};':"\\|,.<>\/?])/);
	console.log("result", reg.test(username));
	return !reg.test(username);
};

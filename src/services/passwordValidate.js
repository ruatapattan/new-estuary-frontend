exports.validateLength = (password) => {
	if (password.length >= 6) {
		return true;
	}
};

exports.validateCharacter = (password) => {
	const regExpArr = [/[A-Z]/, /[a-z]/, /[0-9]/];

	const result = regExpArr.reduce((accum, item) => {
		if (accum) {
			const reg = new RegExp(item);
			accum = reg.test(password);
		}
		return accum;
	}, true);

	return result;
};

exports.validateLength = (phone) => {
	if (phone.length === 10) {
		return true;
	}
};

exports.validateCharacter = (phone) => {
	const regExpArr = [/[0-9]/];

	const result = regExpArr.reduce((accum, item) => {
		if (accum) {
			const reg = new RegExp(item);
			accum = reg.test(phone);
		}
		return accum;
	}, true);

	return result;
};
